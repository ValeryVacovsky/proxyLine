import React, { useState, useRef } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import { flagByShortName } from '../../common/flagByShortName'
import { generate } from '../../utils/generate'

import useOrderCreation from '../../hooks/useOrderCreation'
import TopSlider from '../UI/OrderUI/TopSlider'
import TopDescription from '../UI/OrderUI/TopDescription'
import TopIpInfo from '../UI/OrderUI/TopIpInfo'
import CountrySelect from '../UI/OrderUI/CountrySelect'
import SelectedPeriod from '../UI/OrderUI/SelectedPeriod'
import PeriodInfro from '../UI/OrderUI/PeriodInfro'
import Slider from '../UI/OrderUI/Slider'
import HttpType from '../UI/OrderUI/HttpType'
import QuantityProxy from '../UI/OrderUI/QuantityProxy'
import QuantityButtons from '../UI/OrderUI/QuantityButtons'
import PriceAmount from '../UI/OrderUI/PriceAmount'
import Coupon from '../UI/OrderUI/Coupon'
import ButtomInfo from '../UI/OrderUI/ButtomInfo'

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
  const timerRefMinus = useRef(null)
  const timerRefPlus = useRef(null)

  const {
    handleOnFocus,
    handleOnBlur,
    startTimerMinus,
    startTimerPlus,
    stopTimerMinus,
    stopTimerPlus,
    handlePressAmountMinus,
    handlePressAmountPlus,
    handlePressAmountButtom,
    handlePressCountry,
    onSubmitCoupone,
    onSubmit,
  } = useOrderCreation({
    setFocusInput,
    setButtonStatus,
    setPercent,
    setCoupon,
    amount,
    order,
    selectedCountryShort,
    setSelectedCountryShort,
    selectedCountry,
    setSelectedCountry,
    setTotalPrice,
    setInitialTotalPrice,
    setUserToken,
    userToken,
    days,
    couponValue,
    coupon,
    timerRefMinus,
    timerRefPlus,
    setAmount,
    navigation,
    totalPrice,
    generate,
  })

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.center_container}>
          <TopSlider order={order} />
          <TopDescription order={order} />
          <TopIpInfo order={order} />
          <CountrySelect
            proxyText={proxyText}
            countryDescription={countryDescription}
            flagByShortName={flagByShortName}
            languageGet={languageGet}
            selectedCountryShort={selectedCountryShort}
            handlePressCountry={handlePressCountry}
          />
          <SelectedPeriod proxyText={proxyText} days={days} />
          <PeriodInfro proxyText={proxyText} />
          <Slider setScrolling={setScrolling} setDays={setDays} days={days} />
          <HttpType proxyText={proxyText} />
          <QuantityProxy
            proxyText={proxyText}
            handlePressAmountMinus={handlePressAmountMinus}
            startTimerMinus={startTimerMinus}
            stopTimerMinus={stopTimerMinus}
            handlePressAmountPlus={handlePressAmountPlus}
            startTimerPlus={startTimerPlus}
            stopTimerPlus={stopTimerPlus}
            amount={amount}
          />
          <QuantityButtons handlePressAmountButtom={handlePressAmountButtom} />
          <PriceAmount proxyText={proxyText} price={price} />
          <Coupon
            proxyText={proxyText}
            coupon={coupon}
            handleOnFocus={handleOnFocus}
            handleOnBlur={handleOnBlur}
            setCouponValue={setCouponValue}
            percent={percent}
          />
        </View>
      </ScrollView>
      <ButtomInfo
        proxyText={proxyText}
        totalPrice={totalPrice}
        initialTotalPrice={initialTotalPrice}
        onSubmit={onSubmit}
        onSubmitCoupone={onSubmitCoupone}
        focusInput={focusInput}
        buttonStatus={buttonStatus}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
})

export default OrderItem
