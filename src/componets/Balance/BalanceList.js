import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import dateFormat from 'dateformat'
import postOrderAmount from '../../api/postOrderAmount'
import { StyleSheet } from 'react-native'

function BalanceList({ data, text }) {
  const date = dateFormat(data.create_date, 'd.mm.yyyy HH:MM')
  useEffect(() => {
    async function name() {
      postOrderAmount({
        quantity: 1,
        ip_type: 2,
        ip_version: 4,
        country: 'ru',
        period: 5,
        coupon: '',
      }).then(data => console.log('price from api', data?.data.amount))
    }
    name()
  }, [])
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.dateStart}>
          <View>
            <Text style={styles.dateStartText}>
              {text?.texts?.t3} {date}
            </Text>
          </View>
        </View>
        <View style={styles.summeContainer}>
          <View style={styles.summe}>
            <Text style={styles.summeText}>{text?.texts?.t4}</Text>
            <View style={styles.summePriceContainer}>
              <Text style={styles.summePriceText}>$ {Math.abs(data.amount)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.order}>
          <Text style={styles.orderText}>{text?.texts?.t5} 1234812348123</Text>
        </View>
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
