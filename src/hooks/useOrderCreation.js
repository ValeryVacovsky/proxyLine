import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'

import postOrderAmount from '../api/postOrderAmount'
import { addObject } from '../store/reducers/orderReducer'

const useOrderCreation = ({
  setFocusInput,
  setButtonStatus,
  setPercent,
  setCoupon,
  amount,
  order,
  userToken,
  selectedCountryShort,
  setSelectedCountryShort,
  selectedCountry,
  setSelectedCountry,
  setTotalPrice,
  setInitialTotalPrice,
  setUserToken,
  days,
  couponValue,
  timerRefMinus,
  timerRefPlus,
  coupon,
  setAmount,
  navigation,
  totalPrice,
  generate,
}) => {
  const dispatch = useDispatch()
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

  const handleOnFocus = () => {
    setFocusInput(true)
  }

  const handleOnBlur = () => {
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
      const res = await postOrderAmount({ data, token: userToken })
      res.data?.coupon?.percent
        ? onTakeCoupone({ status: true, percent: res.data?.coupon?.percent })
        : onTakeCoupone({ status: false })
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

  const onSubmitCoupone = () => {
    setCoupon(couponValue)
    setButtonStatus(false)
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
      const res = await postOrderAmount({ data, token: userToken })
      setTotalPrice(res?.data?.amount / 100)
      setInitialTotalPrice(res?.data?.initial_amount / 100)
    }
    void name()
  }, [days, amount, order.ip_type, order.ip_version, selectedCountryShort, coupon])

  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      setUserToken(`${id}_${token}`)
    }
    getToken()
  }, [])

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

  return {
    handleOnFocus,
    onTakeCoupone,
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
  }
}

export default useOrderCreation
