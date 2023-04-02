import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import { flagByShortName } from '../common/flagByShortName'

import LayoutAuth from '../components/LayoutAuth'

import UserNavigation from '../components/UserNavigation'
import { useSelector } from 'react-redux'
import { useProxyOrder } from '../hooks/useProxyOrder'
import { useListTags } from '../hooks/useListTags'
import { useListIps } from '../hooks/useListIps'
import useBalance from '../hooks/useBalance'
import { useListOrders } from '../hooks/useListOrders'
import useProxyList from '../hooks/useProxyList'
import useCountries from '../hooks/useCountries'
import { useListOrdersUnpay } from '../hooks/useListOrdersUnpay'
import TopInfo from '../components/Main/TopInfo'
import CenterButton from '../components/Main/CenterButton/CenterButton'
import MainLogo from '../components/UI/MainUI/MainLogo'
import InfoPanel from '../components/Main/InfoPanel/InfoPanel'
import useCupones from '../hooks/useCupones'

const heightOffScreen = Dimensions.get('window').height

function Main({ navigation }) {
  const [Ip, setIp] = useState('')
  const [statusConnect, setStatusConnect] = useState('off')
  const languageGet = useSelector(res => res.textReducer.languages_get.language)
  const countryDiscription = useSelector(res => res.countryDiscriptionReducer.country)
  const mainText = useSelector(res => res.textReducer.main.payload)
  const selectedProxy = useSelector(data => data.selectedProxyReducer)

  useCountries()
  useListOrders()
  useBalance()
  useProxyOrder()
  useListTags()
  useListIps()
  useProxyList()
  useListOrdersUnpay()
  useCupones()

  useEffect(() => {
    async function getIPAddress() {
      const response = await fetch('https://api.ipify.org')
      const ipAddress = await response.text()
      setIp(ipAddress)
    }
    getIPAddress()
  }, [])

  useEffect(() => {
    if (Object.keys(selectedProxy).length === 0) {
      setStatusConnect('none')
    } else {
      setStatusConnect('off')
    }
  }, [selectedProxy])

  return (
    <LayoutAuth>
      <MainLogo heightOffScreen={heightOffScreen} navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.mainInfoContainer}>
          <TopInfo
            mainText={mainText}
            Ip={Ip}
            statusConnect={statusConnect}
            flagByShortName={flagByShortName}
            langugeMain="ru"
            countryDiscription={countryDiscription}
            languageGet={languageGet}
          />
          <CenterButton
            statusConnect={statusConnect}
            setStatusConnect={setStatusConnect}
            Image={Image}
            heightOffScreen={heightOffScreen}
          />
          <InfoPanel
            selectedProxy={selectedProxy}
            flagByShortName={flagByShortName}
            setStatusConnect={setStatusConnect}
            statusConnect={statusConnect}
            mainText={mainText}
            navigation={navigation}
            heightOffScreen={heightOffScreen}
            countryDiscription={countryDiscription}
            languageGet={languageGet}
          />
        </View>
      </View>
      <View style={heightOffScreen > 700 ? styles.navContainer : styles.s_navContainer}>
        <UserNavigation status="Main" navigation={navigation} />
      </View>
    </LayoutAuth>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-between',
    width: '100%',
  },
  mainInfoContainer: {
    marginBottom: 0,
    display: 'flex',
  },
  navContainer: {
    marginBottom: 25,
    width: '95%',
    left: 10,
  },
  s_navContainer: {
    width: '95%',
    left: 10,
  },
})

export default Main
