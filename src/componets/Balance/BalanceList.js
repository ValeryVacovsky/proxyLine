import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import dateFormat from 'dateformat'
import BalanceOperationInfo from '../UI/BalanceUI/BalanceOperationInfo'

function BalanceList({ data, text }) {
  const date = dateFormat(data.create_date, 'd.mm.yyyy HH:MM')
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <BalanceOperationInfo text={text} date={date} data={data} />
        <View
          style={StyleSheet.flatten([
            styles.summeContainer,
            {
              borderBottomLeftRadius: data.action === 3 ? 0 : 14,
              borderBottomRightRadius: data.action === 3 ? 0 : 14,
            },
          ])}>
          <View style={styles.summe}>
            <Text style={styles.summeText}>{text?.texts?.t4}</Text>
            <View style={styles.summePriceContainer}>
              <Text style={styles.summePriceText}>$ {Math.abs(data.amount)}</Text>
            </View>
          </View>
        </View>
        {data.action === 3 && (
          <View style={styles.order}>
            <Text style={styles.orderText}>
              {text?.texts?.t5} {data.payment_id}
            </Text>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    width: '100%',
    zIndex: 0,
    marginTop: 11,
  },
  dateStart: {
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
    paddingTop: 21,
    paddingBottom: 14,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    alignItems: 'center',
  },
  topInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateStartText: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
  },
  summeContainer: {
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    marginBottom: 1,
    width: '100%',
  },
  summe: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
  },
  summeText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 13,
  },
  summePriceContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  summePriceText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
  order: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  orderText: {
    fontWeight: '600',
    color: '#FAC637',
    paddingTop: 14,
    paddingBottom: 14,
  },
})

export default BalanceList
