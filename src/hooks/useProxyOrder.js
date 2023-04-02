import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import postOrderAmount from '../api/postOrderAmount'
import { setPrice } from '../store/reducers/orderPriceReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'

const dataFirst = {
  quantity: 1,
  ip_type: 2,
  ip_version: 4,
  country: 'ru',
  period: 5,
  coupon: '',
}
const dataSecond = {
  quantity: 1,
  ip_type: 1,
  ip_version: 4,
  country: 'ru',
  period: 5,
  coupon: '',
}
const dataThird = {
  quantity: 1,
  ip_type: 1,
  ip_version: 6,
  country: 'ru',
  period: 5,
  coupon: '',
}

export const useProxyOrder = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function getProxyAmountToken() {
      const tokenName = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const token = `${id}_${tokenName}`
      async function getProxyAmount() {
        const ipTypes = []
        const resFirst = await postOrderAmount({ data: dataFirst, token })
        const resSecond = await postOrderAmount({ data: dataSecond, token })
        const resThird = await postOrderAmount({ data: dataThird, token })
        ipTypes.push(resFirst?.data?.amount)
        ipTypes.push(resSecond?.data?.amount)
        ipTypes.push(resThird?.data?.amount)
        dispatch(setPrice(ipTypes))
      }
      getProxyAmount()
    }
    getProxyAmountToken()
  }, [dispatch])
}
