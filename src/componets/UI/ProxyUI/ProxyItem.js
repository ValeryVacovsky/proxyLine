import React from 'react'

import { View, Text, StyleSheet, Pressable } from 'react-native'
import ProxiesDotts from '../../../image/Svg/ProxiesDotts'
import DarkRadioUncheked from '../../../image/Svg/DarkRadioUncheked'
import LightRadioUncheked from '../../../image/Svg/LightRadioUncheked'
import BottomSheetIist from './BottomSheetIist'
import { flagByShortName } from '../../../common/flagByShortName'
import { useSelector } from 'react-redux'

function ProxyItem({
  proxyRes,
  selected,
  setSelected,
  handleSnapPress,
  setChildrenItem,
  handleClosePress,
  navigation,
  childrenItem,
  text,
}) {
  const handleOpenModal = () => {
    childrenItem && handleSnapPress(0)
    setSelected(null)
    setChildrenItem(
      <BottomSheetIist handleClosePress={handleClosePress} navigation={navigation} proxyRes={proxyRes} text={text} />,
    )
  }
  const handleSelect = item => {
    setSelected(item)
    handleClosePress()
  }
  const languageGet = useSelector(res => res.textReducer.languages_get.language)
  const countryDiscription = useSelector(res => res.countryDiscriptionReducer.country)
  const dateStart = new Date(proxyRes.date_end)
  const dateEnd = new Date()
  const dateNeed = ((dateStart - dateEnd) / 1000 / (60 * 60 * 24)).toFixed(0)
  const huorseNeed = ((dateStart - dateEnd) / 1000 / (60 * 60)).toFixed(0)
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.sideContainer}>
          <View style={styles.flagContainer}>
            <View style={styles.flag}>{flagByShortName[proxyRes.country_id]}</View>
          </View>
          <View style={styles.centerContainer}>
            <View style={styles.infoContainer}>
              <View>
                <Text style={styles.infoCountryName}>{countryDiscription[languageGet][proxyRes.country_id]}</Text>
                <View style={styles.infoCountryNameConst}></View>
              </View>
              <View
                style={StyleSheet.flatten([
                  styles.dateNeedContainer,
                  {
                    backgroundColor: dateNeed > 1 ? '#333842' : 'rgba(226, 58, 58, 0.2)',
                  },
                ])}>
                <Text
                  style={StyleSheet.flatten([
                    styles.dateNeedText,
                    {
                      color: dateNeed > 1 ? '#CBCBCB' : '#E23A3A',
                    },
                  ])}>
                  {huorseNeed > 24 && dateNeed}
                  {huorseNeed > 0 && huorseNeed < 24 ? huorseNeed : null}
                  {huorseNeed < 0 && 0} {huorseNeed > 24 ? text?.texts?.t5 : text?.texts?.t6 || 'Часов'}
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
          <Pressable hitSlop={25} onPress={handleOpenModal}>
            <ProxiesDotts style={styles.dotsIcon} />
          </Pressable>
          {selected?.id === proxyRes?.id ? (
            <Pressable hitSlop={2} onPress={() => handleSelect(null)}>
              <LightRadioUncheked style={styles.radioButtonIcon} />
            </Pressable>
          ) : (
            <Pressable hitSlop={2} onPress={() => handleSelect(proxyRes)}>
              <DarkRadioUncheked style={styles.radioButtonIcon} />
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
  centerContainer: {
    marginLeft: 14,
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
  dateNeedContainer: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 4,
  },
  dateNeedText: {
    fontWeight: '600',
    fontSize: 11,
    lineHeight: 15,
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
  dotsIcon: {
    marginRight: 8,
  },
  radioButtonIcon: {
    marginLeft: 12,
    bottom: 3,
  },
})

export default ProxyItem
