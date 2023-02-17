import React, { useState, useEffect } from 'react'

import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import { flagByShortName } from '../../../common/flagByShortName'
import VectorYellowBig from '../../../image/Svg/VectorYellowBig'
import BottomSheetItem from './BottomSheetItem'
import { useSelector } from 'react-redux'

function ProxyItemExtend({
  proxy,
  selectedProxies,
  setSelected,
  setProxyItemPicked,
  handleSnapPress,
  setChildrenItem,
  handleClosePress,
  navigation,
  childrenItem,
  onChange,
  proxyRes,
}) {
  const heightOffScreen = Dimensions.get('window').height
  const [text, setText] = useState({})
  const balanceText = useSelector(res => res.textReducer.myproxies)
  useEffect(() => {
    setText(balanceText.payload)
  }, [balanceText])
  return (
    <TouchableOpacity style={styles.container} onPress={() => onChange(proxy?.id)} activeOpacity={0.8}>
      <View
        style={
          heightOffScreen > 900
            ? {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
                flexDirection: 'row',
              }
            : {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '96.5%',
                flexDirection: 'row',
              }
        }>
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
                  Russian Federation
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
                  marginLeft: 6,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 11,
                    color: '#CBCBCB',
                    lineHeight: 15,
                  }}>
                  {proxy?.days} дней
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
                  IPv{proxyRes.ip_version}
                </Text>
              </View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: '400',
                  marginLeft: 6,
                }}>
                {proxyRes.ip}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setProxyItemPicked(proxy?.id)
              childrenItem && handleSnapPress(0)
              setSelected(null)
              setChildrenItem(
                <BottomSheetItem handleClosePress={handleClosePress} navigation={navigation} text={text} />,
              )
            }}
            activeOpacity={0.8}
          />
          {selectedProxies.includes(Number(proxy?.id)) && <VectorYellowBig style={{ right: 20 }} />}
          {!selectedProxies.includes(Number(proxy?.id)) && <View style={{ width: 20, height: 20 }} />}
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '103%',
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
    width: '100%',
    flexDirection: 'row',
  },
})

export default ProxyItemExtend
