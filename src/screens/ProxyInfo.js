import React, { useMemo, useRef, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, StyleSheet, SafeAreaView, Text, View, Pressable, TouchableOpacity, Clipboard } from 'react-native'
import LayoutMain from '../componets/LayoutMain'
import ProxyInfoChange from '../image/Svg/ProxyInfoChange'
import ReadTrash from '../image/Svg/ReadTrash'
import HeaderTintBack from '../image/Svg/HeaderTintBack'
import BottomSheetForm from '../componets/BottomSheetForm'
import BottomSheetCopy from '../componets/UI/ProxyUI/BottomSheetCopy'
import BottomSheetProxyTags from '../componets/UI/ProxyUI/BottomSheetProxyTags'
import dateFormat from 'dateformat'
import IdOrder from '../componets/UI/InfoUI/IdOrder'
import Country from '../componets/UI/InfoUI/Country'
import Version from '../componets/UI/InfoUI/Version'
import IpAdress from '../componets/UI/InfoUI/IpAdress'
import Port from '../componets/UI/InfoUI/Port'
import InfoLogin from '../componets/UI/InfoUI/InfoLogin'
import InfoPassword from '../componets/UI/InfoUI/InfoPassword'
import InfoType from '../componets/UI/InfoUI/InfoType'
import InfoCheckButton from '../componets/UI/InfoUI/InfoCheckButton'
import OrderFrom from '../componets/UI/InfoUI/OrderFrom'
import OrderEnd from '../componets/UI/InfoUI/OrderEnd'
import OrderCount from '../componets/UI/InfoUI/OrderCount'
import ConfirnIP from '../componets/UI/InfoUI/ConfirnIP'
import InfoTag from '../componets/UI/InfoUI/InfoTag'
import BottomSheetProxyIps from '../componets/UI/ProxyUI/BottomSheetProxyIps'
import OrderBlock from '../componets/UI/InfoUI/OrderBlock'
import OrderRenew from '../componets/UI/InfoUI/OrderRenew'

function ProxyInfo({ navigation, route }) {
  const proxyInfoText = useSelector(res => res.textReducer.proxy_info.payload)
  const [proxyInfo, setProxyInfo] = useState(route.params.proxyRes)
  const sheetRef = useRef(null)
  const [, setIsOpen] = useState(false)
  const snapPoints = useMemo(() => [120, 275, 325, 375, 500, 540], [])
  const dateStart = new Date(proxyInfo.date_end)
  const dateEnd = new Date()
  const days = ((dateStart - dateEnd) / 1000 / (60 * 60 * 24)).toFixed(0)
  const mounth = ((dateStart - dateEnd) / 1000 / (60 * 60 * 24 * 30)).toFixed(0)

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
      />,
    )
  }

  const [childrenItem, setChildrenItem] = useState(
    <BottomSheetCopy handleClosePress={handleClosePress}></BottomSheetCopy>,
  )
  const nowDate = new Date()
  const proxyInfoDate = new Date(proxyInfo.date_end)
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
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> {proxyInfoText?.buttons?.b4}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain style={{ width: '100%' }}>
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
              <InfoType type="HTTP" text={proxyInfoText?.texts} />
            </View>
            <InfoCheckButton text={proxyInfoText?.buttons} />
            <Text style={styles.text}>{proxyInfoText?.texts?.t9}</Text>
            <View styles={styles.Data}>
              <OrderBlock date={dateFormat(proxyInfo.suspended_till, 'd.mm.yyyy HH:MM')} text={proxyInfoText?.texts} />
              <OrderFrom date={dateFormat(proxyInfo.date_start, 'd.mm.yyyy HH:MM')} text={proxyInfoText?.texts} />
              <OrderEnd date={dateFormat(proxyInfo.date_end, 'd.mm.yyyy HH:MM')} text={proxyInfoText?.texts} />
              <OrderCount days={days} month={mounth} text={proxyInfoText?.texts} />
              <OrderRenew text={proxyInfoText?.texts} renewStatus={proxyInfo?.auto_renewal} />
            </View>
            <View style={styles.chipsContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{proxyInfoText?.texts?.t13}</Text>
                <Pressable hitSlop={25} activeOpacity={0.8} onPress={handleOpenIps}>
                  <ProxyInfoChange style={{ top: 5 }} />
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
                  <ProxyInfoChange style={{ top: 3 }} />
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
  container: {
    flex: 1,
    marginBottom: 33,
  },
  scrollView: {
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 18,
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
})

export default ProxyInfo
