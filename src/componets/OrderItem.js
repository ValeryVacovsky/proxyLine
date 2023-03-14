import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import SliderExample from './SliderExample'
import VectorRightSmall from '../image/Svg/VectorRightSmall'
import Toggle from './UI/OrderUI/Toggle'
import postOrderAmount from '../api/postOrderAmount'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { addObject } from '../store/reducers/orderReducer'
import { flagByShortName } from '../common/flagByShortName'

function OrderItem({ navigation, order, setScrolling, price, proxyText }) {
  function generate(str) {
    return str.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
    })
  }
  const languageGet = useSelector(res => res.textReducer.languages_get.language)
  const countryDiscription = useSelector(res => res.countryDiscriptionReducer.country)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0.1)
  const [days, setDays] = useState(5)
  const [selectedCountryShort, setSelectedCountryShort] = useState('ru')
  const [selectedCountry, setSelectedCountry] = useState('Russian Federation')
  const handlePressAmount = item => {
    if (item === 'minus') {
      amount > 1 && setAmount(amount - 1)
    } else {
      amount < 1999 && setAmount(amount + 1)
    }
  }
  const handlePressCountry = () => {
    navigation.navigate('Countries', {
      selectedCountryShort,
      setSelectedCountryShort,
      selectedCountry,
      setSelectedCountry,
    })
  }
  useEffect(() => {
    async function name() {
      postOrderAmount({
        quantity: amount,
        ip_type: order.ip_type,
        ip_version: order.ip_version,
        country: 'ru',
        period: days,
        coupon: '',
      }).then(data => {
        setTotalPrice(data?.data?.amount / 100)
      })
    }
    name()
  }, [days, amount, order.ip_type, order.ip_version])
  const onSubmit = async () => {
    const token = await AsyncStorage.getItem('@token')
    const id = await AsyncStorage.getItem('@id')
    const data = `${id}_${token}`
    await dispatch(
      addObject({
        token: data,
        data: {
          quantity: amount,
          ip_type: order.ip_type,
          ip_version: order.ip_version,
          country: 'ru',
          period: days,
          selected_ips: [],
          tags: [0],
          unique_credentials: false,
          coupon: 'string',
          statusActive: false,
          dateActive: new Date(),
          totalPrice: totalPrice,
          id: generate('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'),
        },
      }),
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.center_container}>
        <View style={styles.handDesriptionOrderContainer}>
          <Text style={styles.handDesriptionOrderText}>{order.handDesription}</Text>
        </View>
        <View style={styles.proxyTypeContianer}>
          <View>
            <Text style={styles.proxyTypeVersionText}>
              IP
              {order.proxyType}
            </Text>
            <Text style={styles.proxyTypeDiscriptionText}>{order.discription}</Text>
          </View>
          <View>{order.icon}</View>
        </View>
        <TouchableOpacity style={styles.countryContainer} onPress={() => handlePressCountry()} activeOpacity={0.8}>
          <View>
            <Text style={styles.countryNameText}>{proxyText?.texts?.t0}</Text>
          </View>
          <View style={styles.countrySelectContainer}>
            <Text style={styles.countrySelectText}>{countryDiscription[languageGet][selectedCountryShort]}</Text>
            <View style={styles.countryFlag}>{flagByShortName[selectedCountryShort]}</View>
            <VectorRightSmall width={6} height={12} style={{ top: 1, marginLeft: 10 }} />
          </View>
        </TouchableOpacity>
        <View style={styles.periodContainer}>
          <Text style={styles.periodText}>5 {proxyText?.texts?.t6}</Text>
          <Text style={styles.periodText}>360 {proxyText?.texts?.t6}</Text>
        </View>
        <View
          style={{ width: '100%', right: 10 }}
          onTouchStart={() => {
            setScrolling(false)
          }}
          onTouchEnd={() => {}}>
          <SliderExample
            days={days}
            setDays={value => setDays(Array.isArray(value) ? value[0] : value)}
            setScrolling={setScrolling}
          />
        </View>
        <View style={styles.selectedPeriod}>
          <Text style={{ color: '#CBCBCB', fontWeight: '600' }}>{proxyText?.texts?.t3}</Text>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>
            {days} {proxyText?.texts?.t6}
          </Text>
        </View>
        <View style={styles.orderType}>
          <Text style={{ color: '#CBCBCB', fontWeight: '600' }}>{proxyText?.texts?.t2}</Text>
          <View
            style={{
              position: 'relative',
              right: 80,
            }}>
            <Toggle />
          </View>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountDiscription}>{proxyText?.texts?.t4}</Text>
          <View style={styles.amountToggleContainer}>
            <TouchableOpacity
              style={styles.amountToggleMinusCOntainer}
              onPress={() => handlePressAmount('minus')}
              activeOpacity={0.8}>
              <Text style={styles.amountToggleMinusText}>-</Text>
            </TouchableOpacity>
            <View style={styles.amountToggleCenterContainer}>
              <Text style={styles.amountToggleCenterText}>{amount}</Text>
            </View>
            <TouchableOpacity
              style={styles.amountTogglePlusContainer}
              onPress={() => {
                handlePressAmount('plus')
              }}
              activeOpacity={0.8}>
              <Text style={styles.amountTogglePlusText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.priceAmount}>
          <Text style={styles.priceAmountDescriptionText}>{proxyText?.texts?.t4}</Text>
          <Text style={styles.priceAmountText}>$ {price}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.priceFullAmountrContainer}>
          <Text style={styles.priceFullAmountDescriptionText}>{proxyText?.texts?.t5}</Text>
          <Text style={styles.priceFullAmountText}>$ {totalPrice}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            onSubmit()
            navigation.navigate('Orders')
          }}
          style={styles.buttonContainer}
          activeOpacity={0.8}>
          <SuperEllipseMaskView radius={12} style={styles.buttonInner}>
            <Text style={styles.buttonText}>{proxyText.buttons.b0}</Text>
          </SuperEllipseMaskView>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonInner: {
    backgroundColor: '#FAC637',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '90%',
  },
  center_container: {
    alignItems: 'center',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 0,
    marginTop: 11,
    flex: 1,
  },
  handDesriptionOrderContainer: {
    backgroundColor: '#FAC637',
    top: 12,
    borderRadius: 8,
    position: 'relative',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 14,
    paddingRight: 14,
    shadowColor: '#FAC637',
    shadowOffset: { width: 3, height: 20 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    zIndex: 1,
  },
  handDesriptionOrderText: {
    alignItems: 'center',
    fontWeight: '600',
    fontSize: 12,
    color: '#0F1218',
  },
  proxyTypeContianer: {
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
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  proxyTypeVersionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  proxyTypeDiscriptionText: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '400',
  },
  countryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 13,
  },
  countryNameText: {
    color: '#CBCBCB',
    fontSize: 15,
    fontWeight: '600',
  },
  countrySelectContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  countrySelectText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
  },
  countryFlag: {
    width: 16,
    height: 16,
    marginLeft: 5,
    marginRight: 5,
  },
  periodContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  periodText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 12,
  },
  selectedPeriod: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingBottom: 13,
  },
  orderType: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  amountContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  amountDiscription: {
    color: '#CBCBCB',
    fontWeight: '600',
  },
  amountToggleContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 4,
    borderRadius: 40,
    left: 5,
    alignItems: 'center',
  },
  amountToggleMinusCOntainer: {
    backgroundColor: '#1E2127',
    borderBottomLeftRadius: 44,
    borderTopLeftRadius: 44,
  },
  amountToggleMinusText: {
    color: '#CBCBCB',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 22,
    paddingRight: 18,
    fontSize: 14,
    fontWeight: '600',
  },
  amountToggleCenterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E2127',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 18,
    marginRight: 1,
    marginLeft: 1,
  },
  amountToggleCenterText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  amountTogglePlusContainer: {
    backgroundColor: '#1E2127',
    borderBottomRightRadius: 44,
    borderTopRightRadius: 44,
  },
  amountTogglePlusText: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 22,
    fontSize: 14,
    fontWeight: '600',
  },
  priceAmount: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingBottom: 13,
  },
  priceAmountDescriptionText: {
    color: '#CBCBCB',
    fontWeight: '600',
  },
  priceAmountText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  priceFullAmountrContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingBottom: 13,
  },
  priceFullAmountDescriptionText: {
    color: '#CBCBCB',
    fontWeight: '600',
  },
  priceFullAmountText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 13,
  },
})

export default OrderItem
