import React, { useMemo, useRef, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, StyleSheet, SafeAreaView, Text, View, Pressable, TouchableOpacity, Clipboard } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LayoutMain from '../components/LayoutMain'
import ProxyInfoChange from '../image/Svg/ProxyInfoChange'
import ReadTrash from '../image/Svg/ReadTrash'
import HeaderTintBack from '../image/Svg/HeaderTintBack'
import BottomSheetForm from '../components/BottomSheetForm'
import BottomSheetCopy from '../components/UI/ProxyUI/BottomSheetCopy'
import BottomSheetProxyTags from '../components/UI/ProxyUI/BottomSheetProxyTags'
import dateFormat from 'dateformat'
import IdOrder from '../components/UI/InfoUI/IdOrder'
import Country from '../components/UI/InfoUI/Country'
import Version from '../components/UI/InfoUI/Version'
import IpAdress from '../components/UI/InfoUI/IpAdress'
import Port from '../components/UI/InfoUI/Port'
import InfoLogin from '../components/UI/InfoUI/InfoLogin'
import InfoPassword from '../components/UI/InfoUI/InfoPassword'
import InfoType from '../components/UI/InfoUI/InfoType'
import InfoCheckButton from '../components/UI/InfoUI/InfoCheckButton'
import OrderFrom from '../components/UI/InfoUI/OrderFrom'
import OrderEnd from '../components/UI/InfoUI/OrderEnd'
import OrderCount from '../components/UI/InfoUI/OrderCount'
import ConfirnIP from '../components/UI/InfoUI/ConfirnIP'
import InfoTag from '../components/UI/InfoUI/InfoTag'
import BottomSheetProxyIps from '../components/UI/ProxyUI/BottomSheetProxyIps'
import OrderBlock from '../components/UI/InfoUI/OrderBlock'
import OrderRenew from '../components/UI/InfoUI/OrderRenew'
import postUserCheck from '../api/Checker/postUserCheck'

function ProxyInfo({ navigation, route }) {
  const proxyInfoText = useSelector(res => res.textReducer.proxy_info.payload)
  const [proxyInfo, setProxyInfo] = useState(route.params.proxyRes)
  const sheetRef = useRef(null)
  const [, setIsOpen] = useState(false)
  const snapPoints = useMemo(() => [120, 275, 325, 375, 500, 540, 580], [])
  const dateStart = new Date(proxyInfo.date_end)
  const dateEnd = new Date()
  const days = ((dateStart - dateEnd) / 1000 / (60 * 60 * 24)).toFixed(0)
  const [heightTags, setHeightTags] = useState(1)
  const mounth = ((dateStart - dateEnd) / 1000 / (60 * 60 * 24 * 30)).toFixed(0)

  const handlePressCheckButton = () => {
    async function getCheckConnectStatus() {
      const dataToken = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const token = `${id}_${dataToken}`
      const data = {
        project_id: 1,
        ids: [proxyInfo.id],
      }
      const res = await postUserCheck({ token, data })
      const objectsArray = res.data
        .split('\n')
        .filter(Boolean)
        .map(objectString => {
          return JSON.parse(objectString)
        })
      navigation.navigate('ResultConnect', {
        objectsArray,
        proxyInfo,
      })
    }
    getCheckConnectStatus()
  }

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index)
    setIsOpen(false)
  }, [])
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close()
  }, [])
  const handelOpenCopy = item => {
    // eslint-disable-next-line react/no-unescaped-entities
    setChildrenItem(<BottomSheetCopy handleClosePress={handleClosePress}>{`Скопированно "${item}"`}</BottomSheetCopy>)
    handleSnapPress(0)
    Clipboard.setString(item.toString())
    setTimeout(() => {
      handleClosePress()
    }, 3000)
  }

  const handleOpenIps = () => {
    if (proxyInfo?.access_ips?.length == 0) {
      handleSnapPress(1)
    } else if (proxyInfo?.access_ips?.length < 3) {
      handleSnapPress(2)
    } else {
      handleSnapPress(3)
    }

    setChildrenItem(
      <BottomSheetProxyIps
        handleClosePress={handleClosePress}
        proxyIps={proxyInfo?.access_ips}
        handleSnapPress={handleSnapPress}
        proxyId={proxyInfo.id}
        setProxyInfo={setProxyInfo}
      />,
    )
  }

  const handleOpenTags = () => {
    if (proxyInfo?.tags?.length == 0) {
      handleSnapPress(1)
    } else {
      handleSnapPress(2)
    }
    setChildrenItem(
      <BottomSheetProxyTags
        handleClosePress={handleClosePress}
        proxyTags={proxyInfo?.tags}
        handleSnapPress={handleSnapPress}
        proxyId={proxyInfo.id}
        setProxyInfo={setProxyInfo}
        heightTags={heightTags}
        setHeightTags={setHeightTags}
      />,
    )
  }

  const [childrenItem, setChildrenItem] = useState(
    <BottomSheetCopy handleClosePress={handleClosePress}></BottomSheetCopy>,
  )
  const nowDate = new Date()
  const proxyInfoDate = new Date(proxyInfo.date_end % 24)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <Pressable activeOpacity={0.7} hitSlop={50}>
          {nowDate > proxyInfoDate && <ReadTrash />}
        </Pressable>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={styles.headerLeftIcon} />
          <Text style={styles.headerLeftTintText}> {proxyInfoText?.buttons?.b4}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain style={styles.layoutConatiner}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.text}>{proxyInfoText?.texts?.t0}</Text>
            <View style={styles.dataProxyes}>
              <IdOrder id={proxyInfo.id} text={proxyInfoText?.texts} />
              <Country countryName={proxyInfo.country_id} text={proxyInfoText?.texts} />
              <Version vesion={proxyInfo.ip_version} text={proxyInfoText?.texts} />
              <IpAdress IP={proxyInfo.ip} handelOpenCopy={handelOpenCopy} text={proxyInfoText?.texts} />
              <Port port={proxyInfo.port_socks5} handelOpenCopy={handelOpenCopy} text={proxyInfoText?.texts} />
              <InfoLogin login={proxyInfo.username} handelOpenCopy={handelOpenCopy} text={proxyInfoText?.texts} />
              <InfoPassword password={proxyInfo.password} handelOpenCopy={handelOpenCopy} text={proxyInfoText?.texts} />
              <InfoType type="HTTP / SOCKS5" text={proxyInfoText?.texts} />
            </View>
            <InfoCheckButton text={proxyInfoText?.buttons} handlePressCheckButton={handlePressCheckButton} />
            <Text style={styles.text}>{proxyInfoText?.texts?.t9}</Text>
            <View style={styles.Data}>
              {proxyInfo.suspended_till ? (
                <OrderBlock
                  date={dateFormat(proxyInfo.suspended_till, 'd.mm.yyyy HH:MM')}
                  text={proxyInfoText?.texts}
                />
              ) : null}
              <OrderFrom date={dateFormat(proxyInfo.date_start, 'd.mm.yyyy HH:MM')} text={proxyInfoText?.texts} />
              <OrderEnd date={dateFormat(proxyInfo.date_end, 'd.mm.yyyy HH:MM')} text={proxyInfoText?.texts} />
              <OrderCount days={days} month={mounth} text={proxyInfoText?.texts} />
              <OrderRenew text={proxyInfoText?.texts} renewStatus={proxyInfo?.auto_renewal} />
            </View>
            <View style={styles.chipsContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{proxyInfoText?.texts?.t13}</Text>
                <Pressable hitSlop={25} activeOpacity={0.8} onPress={handleOpenIps}>
                  <ProxyInfoChange style={styles.proxyInfoChanheIp} />
                </Pressable>
              </View>
              <View style={styles.Chips}>
                <View>
                  <View style={styles.itemContainer}>
                    {proxyInfo?.access_ips?.map(ips => {
                      return <ConfirnIP key={ips?.id} ips={ips} />
                    })}
                  </View>
                </View>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{proxyInfoText?.texts?.t14}</Text>
                <Pressable hitSlop={25} activeOpacity={0.8} onPress={handleOpenTags}>
                  <ProxyInfoChange style={styles.proxyInfoChanheTags} />
                </Pressable>
              </View>
              <View style={styles.Chips}>
                <View>
                  <View style={styles.itemContainer}>
                    {proxyInfo?.tags?.map(tag => {
                      return <InfoTag key={tag.id} tag={tag} />
                    })}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <BottomSheetForm
        navigation={navigation}
        sheetRef={sheetRef}
        snapPoints={snapPoints}
        setIsOpen={setIsOpen}
        handleClosePress={handleClosePress}>
        {childrenItem}
      </BottomSheetForm>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  layoutConatiner: {
    width: '100%',
  },
  container: {
    flex: 1,
    marginBottom: 33,
  },
  scrollView: {
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    paddingLeft: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  circleGradient: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#008f68',
    fontSize: 12,
  },
  dataProxyes: {
    width: '100%',
    alignItems: 'center',
  },
  Chips: {
    width: '90%',
    marginLeft: 20,
  },
  chipsTextContainer: {},
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 20,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headerLeftTintContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftTintText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
  headerLeftIcon: {
    bottom: 1,
  },
  proxyInfoChanheIp: {
    top: 5,
  },
  proxyInfoChanheTags: {
    top: 3,
  },
})

export default ProxyInfo
