import React from 'react'

import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native'
import ProxiesDotts from '../../../image/Svg/ProxiesDotts'
import DarkRadioUncheked from '../../../image/Svg/DarkRadioUncheked'
import LightRadioUncheked from '../../../image/Svg/LightRadioUncheked'
import BottomSheetIist from './BottomSheetIist'
// import BottomSheetItem from './BottomSheetItem'

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
    width: '91%',
    flexDirection: 'row',
  },
  s_mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '93%',
    flexDirection: 'row',
  },
})

function ProxyItem({
  proxy,
  selected,
  setSelected,
  setProxyItemPicked,
  handleSnapPress,
  setChildrenItem,
  handleClosePress,
  navigation,
  childrenItem,
}) {
  let heightOffScreen = Dimensions.get('window').height
  return (
    <View style={styles.container}>
      <View style={heightOffScreen > 700 ? styles.mainContainer : styles.s_mainContainer}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ top: 13, marginLeft: 12 }}>{proxy.flag}</View>
          <View style={{ marginLeft: 14 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 14,
                  color: 'white',
                  lineHeight: 15,
                }}>
                {proxy.name}
              </Text>
              <View
                style={{
                  paddingTop: 4,
                  paddingBottom: 4,
                  paddingLeft: 6,
                  paddingRight: 6,
                  backgroundColor: '#333842',
                  borderRadius: 4,
                  marginLeft: 6,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 11,
                    color: '#CBCBCB',
                    lineHeight: 15,
                  }}>
                  {proxy.days} дней
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
                  {proxy.IP}
                </Text>
              </View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: '400',
                  marginLeft: 6,
                }}>
                {proxy.IpAdress}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Pressable
            hitSlop={5}
            onPress={() => {
              setProxyItemPicked(proxy.id)
              childrenItem && handleSnapPress(0)
              setSelected(null)
              setChildrenItem(<BottomSheetIist handleClosePress={handleClosePress} navigation={navigation} />)
            }}>
            <ProxiesDotts style={{ marginRight: 8 }} />
          </Pressable>
          {selected === proxy.id ? (
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
                setSelected(proxy.id)
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
