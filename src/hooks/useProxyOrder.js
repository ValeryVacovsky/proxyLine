import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import postOrderAmount from '../api/postOrderAmount'
import { setPrice } from '../store/reducers/orderPriceReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useProxyOrder = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function name() {
      const tokenName = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const token = `${id}_${tokenName}`
      const data = {
        quantity: 1,
        ip_type: 2,
        ip_version: 4,
        country: 'ru',
        period: 5,
        coupon: '',
      }
      const ipTypes = []
      postOrderAmount({ data, token }).then(data => ipTypes.push(data?.data.amount))
      postOrderAmount({ data, token }).then(data => ipTypes.push(data?.data.amount))
      postOrderAmount({ data, token }).then(data => ipTypes.push(data?.data.amount))
      dispatch(setPrice(ipTypes))
    }
    name()
  }, [dispatch])
}
