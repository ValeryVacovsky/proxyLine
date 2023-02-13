import React from 'react'

import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native'
import ProxiesDotts from '../../../image/Svg/ProxiesDotts'
import DarkRadioUncheked from '../../../image/Svg/DarkRadioUncheked'
import LightRadioUncheked from '../../../image/Svg/LightRadioUncheked'
import BottomSheetIist from './BottomSheetIist'
import { flagByShortName } from '../../../common/flagByShortName'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    alignItems: 'center',
    marginBottom: 5,
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '88%',
    flexDirection: 'row',
  },
  s_mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
    flexDirection: 'row',
  },
})

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
  const heightOffScreen = Dimensions.get('window').height
  const dateStart = new Date(proxyRes.date_start)
  const dateEnd = new Date()
  const dateNeed = (dateEnd - dateStart) / 1000 / (60 * 60 * 24)
  console.log('proxyitem', proxyRes)
  return (
    <View style={styles.container}>
      <View style={heightOffScreen > 800 ? styles.mainContainer : styles.s_mainContainer}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: 35, height: 35, top: 10 }}>
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
                  Ressian Federation
                </Text>
                <View style={{ width: 168, height: 1, backgroundColor: 'none' }}></View>
              </View>

              <View
                style={{
                  paddingTop: 4,
                  paddingBottom: 4,
                  paddingLeft: 6,
                  paddingRight: 6,
                  backgroundColor: '#333842',
                  borderRadius: 4,
                  // marginLeft: 6,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 11,
                    color: '#CBCBCB',
                    lineHeight: 15,
                    width: 50,
                  }}>
                  {Math.abs(Math.round(dateNeed))} {text?.texts?.t5}
                </Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  paddingBottom: 4,
                  paddingTop: 4,
                  paddingLeft: 8,
                  paddingRight: 8,
                  backgroundColor: '#FAC637',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    color: '#0F1218',
                    fontWeight: '700',
                    fontSize: 11,
                    lineHeight: 15,
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
              <LightRadioUncheked style={{ marginLeft: 12, right: 5, bottom: 3 }} />
            </Pressable>
          ) : (
            <Pressable
              hitSlop={3}
              onPress={() => {
                setSelected(proxyRes.id)
                handleClosePress()
              }}>
              <DarkRadioUncheked style={{ marginLeft: 12, right: 5, bottom: 3 }} />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  )
}

export default ProxyItem
