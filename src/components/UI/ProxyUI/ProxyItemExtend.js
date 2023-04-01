import React from 'react'

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { flagByShortName } from '../../../common/flagByShortName'
import VectorYellowBig from '../../../image/Svg/VectorYellowBig'
import BottomSheetItem from './BottomSheetItem'
import { useSelector } from 'react-redux'

function ProxyItemExtend({
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
  const languageGet = useSelector(res => res.textReducer.languages_get.language)
  const countryDiscription = useSelector(res => res.countryDiscriptionReducer.country)
  const text = useSelector(res => res.textReducer.myproxies.payload)
  const dateStart = new Date(proxyRes.date_end)
  const dateEnd = new Date()
  const dateNeed = ((dateStart - dateEnd) / 1000 / (60 * 60 * 24)).toFixed(0)
  return (
    <TouchableOpacity style={styles.container} onPress={() => onChange(proxyRes?.id)} activeOpacity={0.8}>
      <View style={styles.mainContainer}>
        <View style={styles.itemContainer}>
          <View style={styles.flagContainer}>
            <View style={styles.flag}>{flagByShortName[proxyRes.country_id]}</View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoContainerItem}>
              <View>
                <Text style={styles.infoContainerText}>{countryDiscription[languageGet][proxyRes.country_id]}</Text>
                <View style={styles.infoContainerTextmock}></View>
              </View>
              <View
                style={StyleSheet.flatten([
                  styles.dateNeedContainer,
                  {
                    backgroundColor: dateNeed > 3 ? '#333842' : 'rgba(226, 58, 58, 0.2)',
                  },
                ])}>
                <Text
                  style={StyleSheet.flatten([
                    styles.dateNeedText,
                    {
                      color: dateNeed > 3 ? '#CBCBCB' : '#E23A3A',
                    },
                  ])}>
                  {dateNeed > 0 ? dateNeed : 0} {text?.texts?.t5}
                </Text>
              </View>
            </View>
            <View style={styles.infoContainerItem}>
              <View style={styles.IpVersionContainer}>
                <Text style={styles.IpVersionText}>
                  IPv
                  {proxyRes?.ip_version}
                </Text>
              </View>
              <Text style={styles.ipText}>{proxyRes?.ip}</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setProxyItemPicked(proxyRes?.id)
              childrenItem && handleSnapPress(0)
              setSelected(null)
              setChildrenItem(
                <BottomSheetItem handleClosePress={handleClosePress} navigation={navigation} text={text} />,
              )
            }}
            activeOpacity={0.8}
          />
          {selectedProxies.includes(Number(proxyRes?.id)) && <VectorYellowBig style={styles.vectorYellowIcon} />}
          {!selectedProxies.includes(Number(proxyRes?.id)) && <View style={styles.vectorYellowIconDefault} />}
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
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 20,
    alignItems: 'center',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 5,
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
    marginLeft: 14,
  },
  infoContainerItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainerText: {
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
    lineHeight: 15,
    maxWidth: 168,
  },
  infoContainerTextmock: {
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
  IpVersionContainer: {
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
  vectorYellowIcon: {
    right: 20,
  },
  vectorYellowIconDefault: {
    width: 20,
    height: 20,
  },
})

export default ProxyItemExtend
