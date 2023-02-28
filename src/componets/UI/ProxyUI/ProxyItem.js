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
  const handleOpenModal = () => {
    setProxyItemPicked(true)
    childrenItem && handleSnapPress(1)
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
  }
  const handleSelect = item => {
    setSelected(item)
    handleClosePress()
  }
  const dateStart = new Date(proxyRes.date_end)
  const dateEnd = new Date()
  const dateNeed = ((dateStart - dateEnd) / 1000 / (60 * 60 * 24)).toFixed(0)
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.sideContainer}>
          <View style={styles.flagContainer}>
            <View style={styles.flag}>{flagByShortName[proxyRes.country_id]}</View>
          </View>
          <View style={{ marginLeft: 14 }}>
            <View style={styles.infoContainer}>
              <View>
                <Text style={styles.infoCountryName}>Российская федерация</Text>
                <View style={styles.infoCountryNameConst}></View>
              </View>
              <View
                style={{
                  paddingTop: 2,
                  paddingBottom: 2,
                  paddingLeft: 6,
                  paddingRight: 6,
                  backgroundColor: dateNeed > 3 ? '#333842' : 'rgba(226, 58, 58, 0.2)',
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 11,
                    color: dateNeed > 3 ? '#CBCBCB' : '#E23A3A',
                    lineHeight: 15,
                  }}>
                  {dateNeed > 0 ? dateNeed : 0} {text?.texts?.t5}
                </Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.IpVersionContianer}>
                <Text style={styles.IpVersionText}>
                  IPv
                  {proxyRes?.ip_version}
                </Text>
              </View>
              <Text style={styles.ipText}>{proxyRes?.ip}</Text>
            </View>
          </View>
        </View>
        <View style={styles.sideContainer}>
          <Pressable hitSlop={5} onPress={handleOpenModal}>
            <ProxiesDotts style={{ marginRight: 8 }} />
          </Pressable>
          {selected === proxyRes?.id ? (
            <Pressable hitSlop={3} onPress={() => handleSelect(null)}>
              <LightRadioUncheked style={{ marginLeft: 12, bottom: 3 }} />
            </Pressable>
          ) : (
            <Pressable hitSlop={3} onPress={() => handleSelect(proxyRes.id)}>
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
  sideContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  flagContainer: {
    width: 32,
    height: 24,
    top: 5,
  },
  flag: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoCountryName: {
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
    lineHeight: 15,
    maxWidth: 168,
  },
  infoCountryNameConst: {
    width: 168,
    height: 1,
    backgroundColor: 'none',
  },
  IpVersionContianer: {
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FAC637',
    borderRadius: 20,
  },
  IpVersionText: {
    color: '#0F1218',
    fontWeight: '700',
    fontSize: 11,
    lineHeight: 15,
    textAlign: 'center',
  },
  ipText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '400',
    marginLeft: 6,
    maxWidth: 170,
  },
})

export default ProxyItem
