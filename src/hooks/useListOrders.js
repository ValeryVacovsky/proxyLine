import { useEffect, useState } from 'react'
import getListOrders from '../api/getListOrders'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useListOrders = () => {
  const [dataOrders, setDataOrders] = useState([])
  useEffect(() => {
    const listProxies = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getListOrders({ token: dataProps, limit: '100', offset: '0' })
      setDataOrders(data.data)
    }
    listProxies()
  }, [])
  return {
    dataOrders,
  }
}
