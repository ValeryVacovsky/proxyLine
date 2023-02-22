import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import getListProxies from '../api/getListProxies'
import { setProxy } from '../store/reducers/proxyReducer'

import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import LayoutAuth from '../componets/LayoutAuth'
import FlagUseBig from '../image/Svg/FlagUseBig'
import FrameGreen from '../image/Svg/FrameGreen'
import FrameRed from '../image/Svg/FrameRed'
import FrameYellow from '../image/Svg/FrameYellow'
import FlagRusSmall from '../image/Svg/FlagRusSmall'

import LogoIntroWhite from '../image/Svg/LogoIntroWhite'
import VectorRight from '../image/Svg/VectorRight'
import UserNavigation from '../componets/UserNavigation'
import { useDispatch, useSelector } from 'react-redux'
import ButtonOn from '../image/ButtonOn.png'
import ButtonNone from '../image/ButtonNone.png'
import ButtonOff from '../image/ButtonOff.png'
import { useProxyOrder } from '../hooks/useProxyOrder'
import { useListTags } from '../hooks/useListTags'
import { useListIps } from '../hooks/useListIps'
// import postAuth from "../api";
// import axios from 'axios'

function Main({ navigation }) {
  useProxyOrder()
  useListTags()
  useListIps()
  const [IP, setIp] = useState('')
  useEffect(() => {
    async function getIPAddress() {
      const response = await fetch('https://api.ipify.org')
      const ipAddress = await response.text()
      setIp(ipAddress)
    }
    getIPAddress()
  }, [])
  const dispatch = useDispatch()
  useEffect(() => {
    const listProxies = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getListProxies({ token: dataProps, limit: '100', offset: '0' })
      dispatch(setProxy(data))
    }
    listProxies()
  }, [dispatch])

  const [text, setText] = useState({})
  const mainText = useSelector(res => res.textReducer.main.payload)
  useEffect(() => {
    setText(mainText)
  }, [mainText, text])
  const [statusConect, setStatusConect] = useState('off')

  const heightOffScreen = Dimensions.get('window').height
  useEffect(() => {}, [])
  return (
    <LayoutAuth>
      <View style={heightOffScreen > 700 ? styles.header : styles.S_header}>
        <LogoIntroWhite width={88} height={16} style={styles.mainLogo} />
      </View>
      <View style={styles.authForm}>
        <View style={{ marginBottom: 0, display: 'flex' }}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={styles.yourIP}
              onPress={() => {
                navigation.navigate('Auth')
              }}>
              {mainText?.texts?.t0}
            </Text>
            {statusConect === 'on' && <Text style={styles.IpAdress}>{IP}</Text>}
            {statusConect === 'off' && <Text style={styles.IpAdress}>{IP}</Text>}
            {statusConect === 'none' && <Text style={styles.IpAdress}>{IP}</Text>}
            <View style={styles.countries}>
              {statusConect === 'on' && (
                <Text style={styles.countryText} onPress={() => navigation.navigate('Auth')}>
                  Россия
                </Text>
              )}
              {statusConect === 'off' && (
                <Text style={styles.countryText} onPress={() => navigation.navigate('Auth')}>
                  Россия
                </Text>
              )}
              {statusConect === 'none' && (
                <Text style={styles.countryText} onPress={() => navigation.navigate('Auth')}>
                  Россия
                </Text>
              )}
              {statusConect === 'on' && <FlagRusSmall width={16} height={13} style={{ bottom: 7, left: 5 }} />}
              {statusConect === 'off' && <FlagRusSmall width={16} height={13} style={{ bottom: 7, left: 5 }} />}
              {statusConect === 'none' && <FlagRusSmall width={16} height={13} style={{ bottom: 7, left: 5 }} />}
            </View>
          </View>
          <View
            style={
              heightOffScreen > 700
                ? { marginBottom: 60, alignItems: 'center', marginTop: 40 }
                : { marginBottom: 20, alignItems: 'center' }
            }>
            {statusConect === 'on' && (
              <TouchableOpacity onPress={() => setStatusConect('off')} activeOpacity={0.8}>
                <Image
                  source={ButtonOff}
                  style={{ width: 200, height: 200, alignItems: 'center', bottom: heightOffScreen < 700 && 12 }}
                  onPress={() => setStatusConect('on')}
                />
              </TouchableOpacity>
            )}
            {statusConect === 'off' && (
              <TouchableOpacity onPress={() => setStatusConect('on')} activeOpacity={0.8}>
                <Image
                  source={ButtonOn}
                  style={{ width: 200, height: 200, alignItems: 'center', bottom: heightOffScreen < 700 && 12 }}
                  onPress={() => setStatusConect('on')}
                />
              </TouchableOpacity>
            )}
            {statusConect === 'none' && (
              <TouchableOpacity onPress={() => setStatusConect('on')} activeOpacity={0.8}>
                <Image
                  source={ButtonNone}
                  style={{
                    width: 160,
                    height: 160,
                    alignItems: 'center',
                    padding: 40,
                    marginTop: 30,
                    marginBottom: 10,
                    bottom: heightOffScreen < 700 && 12,
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.containerInfo}>
            <TouchableOpacity onPress={() => setStatusConect('none')} activeOpacity={0.8}>
              <SuperEllipseMaskView
                radius={{
                  topLeft: 12,
                  topRight: 12,
                }}
                style={styles.buyProxy}>
                <View>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    {statusConect === 'on' && (
                      <View style={styles.frameShadowGreen}>
                        <FrameGreen />
                      </View>
                    )}
                    {statusConect === 'off' && (
                      <View style={styles.frameShadowRed}>
                        <FrameRed />
                      </View>
                    )}
                    {statusConect === 'none' && (
                      <View style={styles.frameShadowNone}>
                        <FrameYellow />
                      </View>
                    )}
                    {statusConect === 'on' && (
                      <Text
                        style={{
                          color: 'white',
                          marginLeft: 10,
                          fontWeight: '600',
                          fontSize: 15,
                        }}>
                        {mainText?.texts?.t1}
                      </Text>
                    )}
                    {statusConect === 'off' && (
                      <Text
                        style={{
                          color: 'white',
                          marginLeft: 10,
                          fontWeight: '600',
                          fontSize: 15,
                        }}>
                        {mainText?.texts?.t3}
                      </Text>
                    )}
                    {statusConect === 'none' && (
                      <Text
                        style={{
                          color: 'white',
                          marginLeft: 10,
                          fontWeight: '600',
                          fontSize: 15,
                        }}>
                        {mainText?.texts?.t3}
                      </Text>
                    )}
                  </View>
                  {statusConect === 'on' && <Text style={styles.statusConect}>{mainText?.texts?.t2}</Text>}
                  {statusConect === 'off' && <Text style={styles.statusConect}>{mainText?.texts?.t4}</Text>}
                  {statusConect === 'none' && <Text style={styles.statusConect}>{mainText?.texts?.t4}</Text>}
                </View>
                {statusConect === 'on' && (
                  <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>12.18 </Text>
                    <Text style={{ color: 'white', fontSize: 13, fontWeight: '600' }}>Mbit/s</Text>
                  </View>
                )}
              </SuperEllipseMaskView>
            </TouchableOpacity>
            <View>
              {statusConect === 'off' && (
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Proxies')}>
                  <SuperEllipseMaskView
                    radius={{
                      bottomRight: 12,
                      bottomLeft: 12,
                    }}
                    style={styles.buyProxyBottom}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <FlagUseBig />
                      <View style={{ marginLeft: 14 }}>
                        <View>
                          <Text style={{ color: 'white', lineHeight: 14, fontWeight: '600' }}>
                            United States of America
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <View style={styles.IPContainer}>
                            <Text style={styles.IPText}>IPv4</Text>
                          </View>
                          <Text style={styles.http}>136.117.121.183</Text>
                        </View>
                      </View>
                    </View>
                    <VectorRight color="#636363" />
                  </SuperEllipseMaskView>
                </TouchableOpacity>
              )}
              {statusConect === 'on' && (
                <SuperEllipseMaskView
                  radius={{
                    bottomRight: 12,
                    bottomLeft: 12,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Proxies')}
                    activeOpacity={0.8}
                    style={styles.buyProxyBottom}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <FlagUseBig />
                      <View style={{ marginLeft: 14 }}>
                        <View>
                          <Text style={{ color: 'white', lineHeight: 14, fontWeight: '600' }}>
                            United States of America
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <View style={styles.IPContainer}>
                            <Text style={styles.IPText}>IPv4</Text>
                          </View>
                          <Text style={styles.http}>136.117.121.183</Text>
                        </View>
                      </View>
                    </View>
                    <VectorRight color="#636363" />
                  </TouchableOpacity>
                </SuperEllipseMaskView>
              )}
              {statusConect === 'none' && (
                <SuperEllipseMaskView
                  radius={{
                    bottomRight: 12,
                    bottomLeft: 12,
                  }}>
                  <TouchableOpacity
                    style={styles.buyProxyBottom}
                    onPress={() => {
                      setStatusConect('on')
                      navigation.navigate('Proxies')
                    }}
                    activeOpacity={0.8}>
                    <View
                      style={{
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                      }}>
                      <Text style={styles.buyProxyText}>{mainText.buttons.b0}</Text>
                    </View>
                    {statusConect === 'on' && <VectorRight color="#636363" />}
                    {statusConect === 'off' && <VectorRight color="#636363" />}
                  </TouchableOpacity>
                </SuperEllipseMaskView>
              )}
            </View>
            {statusConect === 'on' && (
              <View style={heightOffScreen > 700 ? styles.timeCalendar : styles.s_timeCalendar}>
                <Text style={{ fontWeight: '600', fontSize: 12, color: '#F5F5F5' }}>5 дней 6 часов</Text>
              </View>
            )}
            {statusConect === 'off' && (
              <View style={heightOffScreen > 700 ? styles.timeCalendar : styles.s_timeCalendar}>
                <Text style={{ fontWeight: '600', fontSize: 12, color: '#F5F5F5' }}>5 дней 6 часов</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={heightOffScreen > 700 ? styles.navContainer : styles.s_navContainer}>
        <UserNavigation status="Main" navigation={navigation} />
      </View>
    </LayoutAuth>
  )
}
const styles = StyleSheet.create({
  mainLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 132,
    height: 24,
  },
  header: {
    marginBottom: 70,
    paddingTop: 50,
    marginTop: 25,
  },
  S_header: {
    marginBottom: 35,
    paddingTop: 50,
    marginTop: 5,
  },
  authForm: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-between',
    width: '100%',
  },
  buyProxy: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1E2127',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 14,
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderTopRightRadius: 14,
    // borderTopStartRadius: 14,
  },
  buyProxyBottom: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1E2127',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 14,
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    // borderBottomRightRadius: 14,
    // borderBottomStartRadius: 14,
  },
  buyProxyText: {
    display: 'flex',
    justifyContent: 'center',
    color: '#FAC637',
    textAlign: 'center',
    fontWeight: '600',
  },
  timeCalendar: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 3,
    paddingBottom: 4,
    backgroundColor: 'rgba(99, 99, 99, 0.30)',
    width: '40%',
    left: '30%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  s_timeCalendar: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 3,
    paddingBottom: 4,
    backgroundColor: 'rgba(99, 99, 99, 0.30)',
    width: '60%',
    left: '20%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  Ip: {
    color: '#0F1218',
    paddingBottom: 4,
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#FAC637',
    borderRadius: 20,
    fontWeight: '700',
    fontSize: 11,
    marginBottom: 6,
  },
  countries: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryText: {
    paddingBottom: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    marginRight: 5,
    alignItems: 'center',
  },
  IpAdress: {
    paddingBottom: 5,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 24,
  },
  yourIP: {
    paddingBottom: 5,
    textAlign: 'center',
    color: 'white',
    fontWeight: '400',
    fontSize: 15,
  },
  containerInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  statusConect: {
    color: '#CBCBCB',
    fontWeight: '400',
    fontSize: 12,
  },
  IPContainer: {
    display: 'flex',
    backgroundColor: '#FAC637',
    borderRadius: 20,
    alignItems: 'center',
  },
  IPText: {
    color: '#0F1218',
    paddingBottom: 4,
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    fontWeight: '700',
    fontSize: 11,
  },
  http: {
    color: 'white',
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 13,
  },
  frameShadowGreen: {
    shadowColor:
      'rgba(255, 255, 255, 0.4), 4px 4px 30px rgba(147, 222, 30, 0.4), 0px 0px 50px #93DE1E, inset 0px 0px 5px 5px rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  frameShadowRed: {
    shadowColor:
      'rgba(255, 255, 255, 0.4), 4px 4px 30px rgba(147, 222, 30, 0.4), 0px 0px 50px #93DE1E, inset 0px 0px 5px 5px rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  frameShadowNone: {
    shadowColor:
      'rgba(250, 198, 55, 0.6), 4px 4px 30px rgba(222, 134, 30, 0.4), 0px 0px 50px #DEA81E, inset 0px 0px 5px 5px rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
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
