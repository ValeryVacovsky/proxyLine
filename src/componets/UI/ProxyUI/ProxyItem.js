import React from 'react'

import { View, Text, StyleSheet, Pressable } from 'react-native'
import ProxiesDotts from '../../../image/Svg/ProxiesDotts'
import DarkRadioUncheked from '../../../image/Svg/DarkRadioUncheked'
import LightRadioUncheked from '../../../image/Svg/LightRadioUncheked'
import BottomSheetIist from './BottomSheetIist'
import { flagByShortName } from '../../../common/flagByShortName'

function ProxyItem({
  proxyRes,
  selected,
  setSelected,
  setProxyItemPicked,
  handleSnapPress,
  setChildrenItem,
  handleClosePress,
  navigation,
  childrenItem,
  index,
  text,
}) {
  const dateStart = new Date(proxyRes.date_start)
  const dateEnd = new Date()
  const dateNeed = (dateEnd - dateStart) / 1000 / (60 * 60 * 24)
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: 32, height: 24, top: 5 }}>
            <View style={{ width: '100%', height: '100%' }}>{flagByShortName[proxyRes.country_id]}</View>
          </View>
          <View style={{ marginLeft: 14 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
                    color: 'white',
                    lineHeight: 15,
                    maxWidth: 168,
                  }}>
                  Российская федерация
                </Text>
                <View style={{ width: 168, height: 1, backgroundColor: 'none' }}></View>
              </View>

              <View
                style={{
                  paddingTop: 2,
                  paddingBottom: 2,
                  paddingLeft: 6,
                  paddingRight: 6,
                  backgroundColor: '#333842',
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 11,
                    color: '#CBCBCB',
                    lineHeight: 15,
                  }}>
                  {Math.abs(Math.round(dateNeed))} {text?.texts?.t5}
                </Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  paddingBottom: 2,
                  paddingTop: 2,
                  paddingLeft: 10,
                  paddingRight: 10,
                  backgroundColor: '#FAC637',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    color: '#0F1218',
                    fontWeight: '700',
                    fontSize: 11,
                    lineHeight: 15,
                    textAlign: 'center',
                  }}>
                  IPv
                  {proxyRes?.ip_version}
                </Text>
              </View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: '400',
                  marginLeft: 6,
                }}>
                {proxyRes?.ip}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Pressable
            hitSlop={5}
            onPress={() => {
              setProxyItemPicked(proxyRes?.id)
              childrenItem && handleSnapPress(0)
              setSelected(null)
              setChildrenItem(
                <BottomSheetIist
                  handleClosePress={handleClosePress}
                  navigation={navigation}
                  proxyRes={proxyRes}
                  index={index}
                  text={text}
                />,
              )
            }}>
            <ProxiesDotts style={{ marginRight: 8 }} />
          </Pressable>
          {selected === proxyRes?.id ? (
            <Pressable
              hitSlop={3}
              onPress={() => {
                setSelected(null)
                handleClosePress()
              }}>
              <LightRadioUncheked style={{ marginLeft: 12, bottom: 3 }} />
            </Pressable>
          ) : (
            <Pressable
              hitSlop={3}
              onPress={() => {
                setSelected(proxyRes.id)
                handleClosePress()
              }}>
              <DarkRadioUncheked style={{ marginLeft: 12, bottom: 3 }} />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    marginBottom: 5,
    height: 64,
  },
  mainContainer: {
    paddingLeft: 30,
    paddingRight: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export default ProxyItem
