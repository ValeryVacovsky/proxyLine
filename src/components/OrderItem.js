import React, { useEffect, useState, useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'

import SliderExample from './SliderExample'

import { flagByShortName } from '../common/flagByShortName'

import VectorRightSmall from '../image/Svg/VectorRightSmall'

import postOrderAmount from '../api/postOrderAmount'

import { addObject } from '../store/reducers/orderReducer'

function generate(str) {
  return str.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

function OrderItem({ navigation, order, setScrolling, price, proxyText }) {
  const languageGet = useSelector(res => res.textReducer.languages_get.language)
  const countryDescription = useSelector(res => res.countryDiscriptionReducer.country)
  const [userToken, setUserToken] = useState('')
  const [amount, setAmount] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0.1)
  const [initialTotalPrice, setInitialTotalPrice] = useState(0.1)
  const [days, setDays] = useState(5)
  const [selectedCountryShort, setSelectedCountryShort] = useState('ru')
  const [selectedCountry, setSelectedCountry] = useState('Russian Federation')
  const [focusInput, setFocusInput] = useState(false)
  const [coupon, setCoupon] = useState('')
  const [percent, setPercent] = useState(0)
  const [couponValue, setCouponValue] = useState('')
  const [buttonStatus, setButtonStatus] = useState(false)
  const dispatch = useDispatch()
  const timerRefMinus = useRef(null)
  const timerRefPlus = useRef(null)

  const handleOnFocus = () => {
    setFocusInput(true)
  }

  const onTakeCoupone = ({ status, percent = '' }) => {
    if (status) {
      setButtonStatus(true)
      setPercent(percent)
    } else {
      setButtonStatus(false)
      setCoupon('')
      setPercent('')
    }
  }

  const handleOnBlure = () => {
    setFocusInput(false)
    async function name() {
      const data = {
        quantity: amount,
        ip_type: order.ip_type,
        ip_version: order.ip_version,
        country: selectedCountryShort,
        period: days,
        coupon: couponValue,
      }
      postOrderAmount({ data, token: userToken }).then(data => {
        data.data?.coupon?.percent
          ? onTakeCoupone({ status: true, percent: data.data?.coupon?.percent })
          : onTakeCoupone({ status: false })
      })
    }
    void name()
  }

  const startTimerMinus = () => {
    timerRefMinus.current = setInterval(() => {
      setAmount(prevValue => {
        const newValue = prevValue - 1
        if (newValue > 0) {
          return newValue
        } else {
          stopTimerMinus()
          return prevValue
        }
      })
    }, 100)
  }

  const startTimerPlus = () => {
    timerRefPlus.current = setInterval(() => {
      setAmount(prevValue => {
        const newValue = prevValue + 1
        if (newValue < 2000) {
          return newValue
        } else {
          stopTimerPlus()
          return prevValue
        }
      })
    }, 100)
  }

  const stopTimerMinus = () => {
    if (timerRefMinus.current) {
      clearInterval(timerRefMinus.current)
      timerRefMinus.current = null
    }
  }

  const stopTimerPlus = () => {
    if (timerRefPlus.current) {
      clearInterval(timerRefPlus.current)
      timerRefPlus.current = null
    }
  }

  const handlePressAmountMinus = () => {
    amount > 1 && setAmount(amount - 1)
  }

  const handlePressAmountPlus = () => {
    amount < 2000 && setAmount(amount + 1)
  }

  const handlePressAmountButtom = count => {
    setAmount(count)
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
      const data = {
        quantity: amount,
        ip_type: order.ip_type,
        ip_version: order.ip_version,
        country: selectedCountryShort,
        period: days,
        coupon: coupon,
      }
      postOrderAmount({ data, token: userToken }).then(data => {
        setTotalPrice(data?.data?.amount / 100)
        setInitialTotalPrice(data?.data?.initial_amount / 100)
      })
    }
    void name()
  }, [days, amount, order.ip_type, order.ip_version, selectedCountryShort, coupon])

  const onSubmit = async () => {
    dispatch(
      addObject({
        token: userToken,
        data: {
          quantity: amount,
          ip_type: order.ip_type,
          ip_version: order.ip_version,
          country: selectedCountryShort,
          period: days,
          selected_ips: [],
          tags: [0],
          unique_credentials: false,
          coupon: coupon,
          statusActive: false,
          dateActive: new Date(),
          totalPrice: totalPrice,
          id: generate('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'),
        },
      }),
    )
    navigation.navigate('Orders')
  }
  const onSubmitCoupone = () => {
    setCoupon(couponValue)
    setButtonStatus(false)
  }

  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      setUserToken(`${id}_${token}`)
    }
    getToken()
  }, [])
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.center_container}>
          <View style={styles.topSliderContainer}>
            <View
              style={StyleSheet.flatten([
                styles.topSliderSideItem,
                {
                  backgroundColor: order.id === 1 ? 'gray' : '#262525',
                },
              ])}
            />
            <View
              style={StyleSheet.flatten([
                styles.topSliderCenterItem,
                {
                  backgroundColor: order.id === 2 ? 'gray' : '#262525',
                },
              ])}
            />
            <View
              style={StyleSheet.flatten([
                styles.topSliderSideItem,
                {
                  backgroundColor: order.id === 3 ? 'gray' : '#262525',
                },
              ])}
            />
          </View>
          <View style={styles.handDescriptionOrderContainer}>
            <Text style={styles.handDescriptionOrderText}>{order.handDesription}</Text>
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
          <TouchableOpacity style={styles.countryContainer} onPress={handlePressCountry} activeOpacity={0.8}>
            <View>
              <Text style={styles.countryNameText}>{proxyText?.texts?.t0}</Text>
            </View>
            <View style={styles.countrySelectContainer}>
              <Text style={styles.countrySelectText}>{countryDescription[languageGet][selectedCountryShort]}</Text>
              <View style={styles.countryFlag}>{flagByShortName[selectedCountryShort]}</View>
              <VectorRightSmall width={6} height={12} style={styles.vectorIcon} />
            </View>
          </TouchableOpacity>
          <View style={styles.selectedPeriod}>
            <Text style={styles.amountDescription}>{proxyText?.texts?.t3}</Text>
            <Text style={styles.amountBoldDiscription}>
              {days} {proxyText?.texts?.t6}
            </Text>
          </View>
          <View style={styles.periodContainer}>
            <Text style={styles.periodText}>5 {proxyText?.texts?.t6}</Text>
            <Text style={styles.periodText}>360 {proxyText?.texts?.t6}</Text>
          </View>
          <View
            style={styles.sliderContainer}
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
          <View style={styles.orderType}>
            <Text style={styles.amountDescription}>{proxyText?.texts?.t2}</Text>
            <Text style={styles.htttpsocksDiscritinon}> HTTP / SOCKS5</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amountDescription}>{proxyText?.texts?.t1}</Text>
            <View style={styles.amountToggleContainer}>
              <TouchableWithoutFeedback
                onPress={handlePressAmountMinus}
                onPressIn={startTimerMinus}
                onPressOut={stopTimerMinus}
                activeOpacity={0.8}>
                <View style={styles.amountToggleMinusCOntainer}>
                  <Text style={styles.amountToggleMinusText}>-</Text>
                </View>
              </TouchableWithoutFeedback>

              <View style={styles.amountToggleCenterContainer}>
                <Text style={styles.amountToggleCenterText}>{amount}</Text>
              </View>
              <TouchableWithoutFeedback
                onPress={handlePressAmountPlus}
                onPressIn={startTimerPlus}
                onPressOut={stopTimerPlus}
                activeOpacity={0.8}>
                <View style={styles.amountTogglePlusContainer}>
                  <Text style={styles.amountTogglePlusText}>+</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.amountButtonsContainer}>
            <TouchableOpacity style={styles.amountButtonItemContainer} onPress={() => handlePressAmountButtom(50)}>
              <Text style={styles.amountButtonItemText}>50</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.amountButtonItemContainer} onPress={() => handlePressAmountButtom(100)}>
              <Text style={styles.amountButtonItemText}>100</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.amountButtonItemContainer} onPress={() => handlePressAmountButtom(250)}>
              <Text style={styles.amountButtonItemText}>250</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.amountButtonItemContainer} onPress={() => handlePressAmountButtom(500)}>
              <Text style={styles.amountButtonItemText}>500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.amountButtonItemContainer} onPress={() => handlePressAmountButtom(1000)}>
              <Text style={styles.amountButtonItemText}>1000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.amountButtonItemContainer} onPress={() => handlePressAmountButtom(2000)}>
              <Text style={styles.amountButtonItemText}>2000</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.priceAmount}>
            <Text style={styles.priceAmountDescriptionText}>{proxyText?.texts?.t4}</Text>
            <Text style={styles.priceAmountText}>$ {price}</Text>
          </View>
          <View style={styles.coupon}>
            <Text style={styles.priceAmountDescriptionText}>{proxyText?.texts?.t8 || 'Купон'}</Text>
            {coupon.length === 0 ? (
              <TextInput
                style={styles.cuponInput}
                autoCapitalize="characters"
                onFocus={handleOnFocus}
                onBlur={handleOnBlure}
                onChangeText={setCouponValue}
              />
            ) : (
              <Text style={styles.couponText}>{proxyText?.texts?.t9 || 'Скидка'} {percent} %</Text>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View
          style={StyleSheet.flatten([
            styles.priceFullAmountContainer,
            {
              marginTop: focusInput ? -13 : 0,
            },
          ])}>
          <Text style={styles.priceFullAmountDescriptionText}>{proxyText?.texts?.t5}</Text>
          {totalPrice === initialTotalPrice ? (
            <Text style={styles.priceFullAmountText}>$ {totalPrice}</Text>
          ) : (
            <View style={styles.priceInitionAmountContainer}>
              <Text style={styles.priceInitionAmountText}>$ {initialTotalPrice}</Text>
              <Text style={styles.priceFullAmountText}>$ {totalPrice}</Text>
            </View>
          )}
        </View>
        {!buttonStatus ? (
          <TouchableOpacity onPress={onSubmit} style={styles.buttonContainer} activeOpacity={0.8}>
            <SuperEllipseMaskView
              radius={12}
              style={StyleSheet.flatten([
                styles.buttonInner,
                {
                  backgroundColor: '#FAC637',
                },
              ])}>
              <Text style={styles.buttonText}>{proxyText.buttons.b0}</Text>
            </SuperEllipseMaskView>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onSubmitCoupone} style={styles.buttonContainer} activeOpacity={0.8}>
            <SuperEllipseMaskView
              radius={12}
              style={StyleSheet.flatten([
                styles.buttonInner,
                {
                  backgroundColor: '#6FCF97',
                },
              ])}>
              <Text style={styles.buttonText}>{proxyText.buttons.b0 || 'Применить купон'}</Text>
            </SuperEllipseMaskView>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  buttonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '90%',
  },
  topSliderContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  topSliderSideItem: {
    width: 40,
    height: 4,
  },
  topSliderCenterItem: {
    width: 40,
    height: 4,
    marginLeft: 5,
    marginRight: 5,
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
  handDescriptionOrderContainer: {
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
  handDescriptionOrderText: {
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
  couponText: {
    fontWeight: '700',
    fontSize: 13,
    color: 'white',
  },
  vectorIcon: {
    top: 1,
    marginLeft: 10,
  },
  periodContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: -5,
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
    marginBottom: 10,
  },
  orderType: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  amountContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  amountDescription: {
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
  amountBoldDiscription: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
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
    marginRight: 1,
    marginLeft: 1,
    width: 60,
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
  amountButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  amountButtonItemContainer: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    backgroundColor: '#1E2127',
    borderRadius: 50,
  },
  amountButtonItemText: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    color: 'white',
  },
  priceAmount: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingBottom: 13,
  },
  htttpsocksDiscritinon: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 15,
  },
  coupon: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingBottom: 13,
    alignItems: 'center',
  },
  sliderContainer: {
    width: '100%',
    right: 10,
  },
  cuponInput: {
    backgroundColor: '#1E2127',
    paddingHorizontal: 15,
    paddingTop: 12,
    paddingBottom: 8,
    color: 'white',
    fontWeight: '400',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333842',
    width: 157,
    fontSize: 14,
    lineHeight: 15,
    paddingBottom: 10,
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
  priceFullAmountContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingBottom: 13,
  },
  priceInitionAmountContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
  priceInitionAmountText: {
    color: '#CBCBCB',
    fontWeight: '700',
    fontSize: 18,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 13,
  },
})

export default OrderItem
