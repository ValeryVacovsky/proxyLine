import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import LayoutAuth from '../componets/LayoutAuth'
import FlagUsaSmall from '../image/Svg/FlagUsaSmall'
import FlagUseBig from '../image/Svg/FlagUseBig'
import FrameGreen from '../image/Svg/FrameGreen'
import FrameRed from '../image/Svg/FrameRed'
import FrameYellow from '../image/Svg/FrameYellow'
import FlagRusSmall from '../image/Svg/FlagRusSmall'

import LogoIntroWhite from '../image/Svg/LogoIntroWhite'
import VectorRight from '../image/Svg/VectorRight'
import UserNavigation from '../componets/UserNavigation'

import ButtonOn from '../image/ButtonOn.png'
import ButtonNone from '../image/ButtonNone.png'
import ButtonOff from '../image/ButtonOff.png'
// import postAuth from "../api";

function Main({ navigation }) {
  const [statusConect, setStatusConect] = useState('off')
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
  })
  return (
    <LayoutAuth>
      <View style={styles.header}>
        <LogoIntroWhite width={88} height={16} style={styles.mainLogo} />
      </View>
      <View style={styles.authForm}>
        <View style={{ marginBottom: 40, display: 'flex' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.yourIP} onPress={() => navigation.navigate('Auth')}>
              Ваш IP
            </Text>
            {statusConect === 'on' && <Text style={styles.IpAdress}>136.117.121.183</Text>}
            {statusConect === 'off' && <Text style={styles.IpAdress}>192.0.0.1</Text>}
            {statusConect === 'none' && <Text style={styles.IpAdress}>192.0.0.1</Text>}
            <View style={styles.countries}>
              {statusConect === 'on' && (
                <Text style={styles.countryText} onPress={() => navigation.navigate('Auth')}>
                  United states of america
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
              {statusConect === 'on' && <FlagUsaSmall width={16} height={13} style={{ bottom: 7, left: 5 }} />}
              {statusConect === 'off' && <FlagRusSmall width={16} height={13} style={{ bottom: 7, left: 5 }} />}
              {statusConect === 'none' && <FlagRusSmall width={16} height={13} style={{ bottom: 7, left: 5 }} />}
            </View>
          </View>
          <View style={{ marginBottom: 60, alignItems: 'center', marginTop: 40 }}>
            {statusConect === 'on' && (
              <TouchableOpacity onPress={() => setStatusConect('off')} activeOpacity={0.8}>
                <Image
                  source={ButtonOn}
                  style={{ width: 200, height: 200, alignItems: 'center' }}
                  onPress={() => setStatusConect('on')}
                />
              </TouchableOpacity>
            )}
            {statusConect === 'off' && (
              <TouchableOpacity onPress={() => setStatusConect('on')} activeOpacity={0.8}>
                <Image
                  source={ButtonOff}
                  style={{ width: 200, height: 200, alignItems: 'center' }}
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
                        Подключено
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
                        Не подключено
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
                        Нет подключения
                      </Text>
                    )}
                  </View>
                  {statusConect === 'on' && <Text style={styles.statusConect}>Скорость подключения</Text>}
                  {statusConect === 'off' && (
                    <Text style={styles.statusConect}>Нажмите на кнопку чтобы подключить</Text>
                  )}
                  {statusConect === 'none' && (
                    <Text style={styles.statusConect}>Нажмите на кнопку чтобы подключить</Text>
                  )}
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
                      }}>
                      <Text style={styles.buyProxyText}>Купить прокси</Text>
                    </View>
                    {statusConect === 'on' && <VectorRight color="#636363" />}
                    {statusConect === 'off' && <VectorRight color="#636363" />}
                  </TouchableOpacity>
                </SuperEllipseMaskView>
              )}
            </View>
            {statusConect === 'on' && (
              <View style={styles.timeCalendar}>
                <Text
                  style={{ fontWeight: '600', fontSize: 12, color: '#F5F5F5' }}
                  onPress={() => navigation.navigate('Test')}>
                  5 дней 6 часов
                </Text>
              </View>
            )}
            {statusConect === 'off' && (
              <View style={styles.timeCalendar}>
                <Text style={{ fontWeight: '600', fontSize: 12, color: '#F5F5F5' }}>5 дней 6 часов</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 25, width: '90%', alignItems: 'center' }}>
        <UserNavigation style={{ marginBottom: 25 }} status="Main" navigation={navigation} />
      </View>
    </LayoutAuth>
  )
}

export default Main
