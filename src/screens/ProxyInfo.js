import React, { useMemo, useRef, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, StyleSheet, SafeAreaView, Text, View, Pressable, TouchableOpacity } from 'react-native'
import LayoutMain from '../componets/LayoutMain'
import ProxyInfoChange from '../image/Svg/ProxyInfoChange'
import ReadTrash from '../image/Svg/ReadTrash'
import HeaderTintBack from '../image/Svg/HeaderTintBack'
import BottomSheetForm from '../componets/BottomSheetForm'
import BottomSheetCopy from '../componets/UI/ProxyUI/BottomSheetCopy'
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

function ProxyInfo({ navigation, route }) {
  const proxyInfoText = useSelector(res => res.textReducer.proxy_info.payload)
  const proxyInfo = route.params.proxyRes
  const sheetRef = useRef(null)
  const [, setIsOpen] = useState(false)
  const snapPoints = useMemo(() => ['15%', '45%'], [])
  const [copy, setCopy] = useState(false)
  const dateStart = new Date(proxyInfo.date_end)
  const dateEnd = new Date()
  const days = ((dateEnd - dateStart) / 1000 / (60 * 60 * 24)).toFixed(0)
  const mounth = ((dateEnd - dateStart) / 1000 / (60 * 60)).toFixed(0)

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index)
    setIsOpen(false)
  }, [])
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close()
  }, [])
  const handelOpenCopy = item => {
    // eslint-disable-next-line react/no-unescaped-entities
    setChildrenItem(<BottomSheetCopy handleClosePress={handleClosePress}>{item}</BottomSheetCopy>)
    handleSnapPress(0)
    setTimeout(() => {
      handleClosePress()
    }, 3000)
  }
  const [childrenItem, setChildrenItem] = useState(
    <BottomSheetCopy handleClosePress={handleClosePress}>Укажите баланс</BottomSheetCopy>,
  )
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <Pressable activeOpacity={0.7} hitSlop={50}>
          <ReadTrash />
        </Pressable>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> Мои прокси</Text>
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
              <OrderFrom date={dateFormat(proxyInfo.date_start, 'd.mm.yyyy HH:MM')} text={proxyInfoText?.texts} />
              <OrderEnd date={dateFormat(proxyInfo.date_end, 'd.mm.yyyy HH:MM')} text={proxyInfoText?.texts} />
              <OrderCount days={days} month={mounth} text={proxyInfoText?.texts} />
            </View>
            <View style={styles.chipsContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{proxyInfoText?.texts?.t13}</Text>
                <ProxyInfoChange />
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
                <ProxyInfoChange />
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
