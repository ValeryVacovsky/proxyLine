import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import dateFormat from 'dateformat'
import postCreateOrder from '../api/postCreateOrder'

import { useDispatch } from 'react-redux'
import { deleteObject } from '../store/reducers/orderReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { flagByShortName } from '../common/flagByShortName'

function OrdersList({ data, text }) {
  const dispatch = useDispatch()
  const [received, setReceived] = useState(data.data.statusActive)
  const [dateCreate, setDateCreate] = useState(new Date())

  const onHandleSuccess = () => {
    dispatch(deleteObject({ statusActive: true, dateActive: new Date() }))
    setReceived(true)
    setDateCreate(new Date())
  }

  const createOrderRequest = async () => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const user_token = `${id}_${token}`
      await postCreateOrder({
        data: {
          quantity: 1,
          ip_type: data.data.ip_type,
          ip_version: data.data.ip_version,
          country: 'ru',
          period: data.data.period,
          selected_ips: [],
          tags: [0],
          unique_credentials: false,
          coupon: 'string',
        },
        token: user_token,
      })
      onHandleSuccess()
    } catch (error) {
      console.log('ошибка', error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.topContainer}>
          <View>
            <Text style={styles.IpTitle}>IPv{data.data.ip_version} Shared</Text>
            <Text style={styles.data}>
              {text?.texts?.t2} {dateFormat(data.data.dateActive, 'd.mm.yyyy HH:MM')}
            </Text>
          </View>
          <View>
            <View style={styles.idContainer}>
              <Text style={styles.IdNumberSmall}>ID </Text>
              <Text style={styles.IdNumber}> 4829002398</Text>
            </View>
            <View style={styles.idContainer}>
              <Text style={styles.calenderTimeSmall}>{text?.texts?.t3}</Text>
              <Text style={styles.calenderTime}>
                {' '}
                5 {text?.texts?.t4} 6 {text?.texts?.t4}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'rgba(51, 51, 51, 0.3)',
            marginBottom: 1,
            width: '100%',
            borderBottomLeftRadius: received && 14,
            borderBottomRightRadius: received && 14,
          }}>
          <View style={styles.blockContainer}>
            <Text style={styles.leftText}>{text?.texts?.t6}</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={styles.rightText}>Российская Федерация</Text>
              <View style={{ width: 16, height: 13, marginLeft: 10 }}>{flagByShortName[data.data.country]}</View>
            </View>
          </View>
          <View style={styles.centerBlock}>
            <Text style={styles.leftText}>{text?.texts?.t7}</Text>
            <Text style={styles.rightText}>{data.data.period}</Text>
          </View>
          <View style={styles.blockContainer}>
            <Text style={styles.leftText}>{text?.texts?.t8}</Text>
            <Text style={styles.rightText}>{data.data.quantity}</Text>
          </View>
          <View style={styles.blockContainer}>
            <Text style={styles.leftText}>{text?.texts?.t9}</Text>
            <Text style={styles.rightText}>$ {data.data.totalPrice}</Text>
          </View>
          {received && (
            <View style={styles.blockContainer}>
              <Text style={styles.leftText}>{text?.texts?.t10}</Text>
              <Text style={styles.rightText}>{dateFormat(dateCreate, 'd.mm.yyyy HH:MM')}</Text>
            </View>
          )}
        </View>
        {!received && (
          <TouchableOpacity
            style={styles.buttonInner}
            onPress={() => {
              createOrderRequest()
            }}
            activeOpacity={0.8}>
            <Text style={styles.buttonInnerText}>{text.buttons.b0}</Text>
          </TouchableOpacity>
        )}
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
    paddingTop: 21,
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
    paddingTop: 14,
    paddingBottom: 14,
  },
})

export default OrdersList
