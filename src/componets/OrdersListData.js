import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import dateFormat from 'dateformat'
import { flagByShortName } from '../common/flagByShortName'
import { useSelector } from 'react-redux'

function OrdersListData({ data, text }) {
  // преобразуем строку в объект Date
  const date = new Date(data.earliest_date_end)

  // вычисляем разницу между датами
  const diff = date - new Date()

  // вычисляем количество дней и часов в разнице
  const hours = Math.floor(diff / (1000 * 60 * 60 * 24))
  const days = Math.floor(diff / (1000 * 60 * 60)) % 24
  const languageGet = useSelector(res => res.textReducer.languages_get.language)
  const countryDiscription = useSelector(res => res.countryDiscriptionReducer.country)

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.topContainer}>
          <View>
            <Text style={styles.IpTitle}>IPv{4} Shared</Text>
            <Text style={styles.data}>
              {text?.texts?.t2} {dateFormat(data.create_date, 'd.mm.yyyy HH:MM')}
            </Text>
          </View>
          <View>
            <View style={styles.idContainer}>
              <Text style={styles.IdNumberSmall}>ID </Text>
              <Text style={styles.IdNumber}> {data.id}</Text>
            </View>
            <View style={styles.idContainer}>
              <Text style={styles.calenderTimeSmall}>{text?.texts?.t3}</Text>
              <Text style={styles.calenderTime}>
                {' '}
                {days > 0 ? days : 0} {text?.texts?.t4} {hours > 0 ? hours % 24 : 0} {text?.texts?.t5}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomBlockContainer}>
          <View style={styles.blockContainer}>
            <Text style={styles.leftText}>{text?.texts?.t6}</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={styles.rightText}>{countryDiscription[languageGet][data.country_id]}</Text>
              <View style={styles.countryFlagContainer}>{flagByShortName[data.country_id]}</View>
            </View>
          </View>
          <View style={styles.centerBlock}>
            <Text style={styles.leftText}>{text?.texts?.t7}</Text>
            <Text style={styles.rightText}>{30}</Text>
          </View>
          <View style={styles.blockContainer}>
            <Text style={styles.leftText}>{text?.texts?.t8}</Text>
            <Text style={styles.rightText}>{data.proxy_count}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  container1: {
    alignItems: 'center',
    width: '100%',
    zIndex: 0,
    marginTop: 11,
  },
  buttonInner: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  buttonInnerText: {
    fontWeight: '700',
    color: '#FAC637',
    paddingTop: 14,
    paddingBottom: 14,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 0,
    border: 2,
    borderBottomColor: 'white',
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    marginBottom: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    alignItems: 'center',
  },
  IpTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  data: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
  },
  IdNumber: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
    textAlign: 'right',
    marginBottom: 5,
  },
  IdNumberSmall: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
    textAlign: 'right',
    marginBottom: 5,
  },
  calenderTime: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
    textAlign: 'right',
  },
  calenderTimeSmall: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
    textAlign: 'right',
  },
  countryFlagContainer: {
    width: 16,
    height: 13,
    marginLeft: 10,
    top: 1,
  },
  bottomBlockContainer: {
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    marginBottom: 1,
    width: '100%',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  blockContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
  },
  idContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  leftText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 13,
  },
  rightText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
  },
  centerBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
})

export default OrdersListData
