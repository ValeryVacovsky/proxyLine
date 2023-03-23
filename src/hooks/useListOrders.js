import { useEffect } from 'react'
import getListOrders from '../api/getListOrders'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { setOrders } from '../store/reducers/ordersReducer'

export const useListOrders = () => {
  const dispatch = useDispatch()
  const listProxies = async () => {
    const token = await AsyncStorage.getItem('@token')
    const id = await AsyncStorage.getItem('@id')
    const dataProps = `${id}_${token}`
    const data = await getListOrders({ token: dataProps, limit: '100', offset: '0' })
    dispatch(setOrders(data.data))
  }
  useEffect(() => {
    listProxies()
  }, [])
  return {
    listProxies,
  }
}
