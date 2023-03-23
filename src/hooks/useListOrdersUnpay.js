import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { addObject } from '../store/reducers/orderReducer'

export const useListOrdersUnpay = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const listOrders = async () => {
      const ordersStorage = await AsyncStorage.getItem('@Orders')
      JSON.parse(ordersStorage).map(item => dispatch(addObject(item)))
    }
    listOrders()
  }, [])
}
