import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import getListProxies from '../api/getListProxies'
import { useDispatch } from 'react-redux'
import { setProxy } from '../store/reducers/proxyReducer'

const useProxyInfo = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const listProxies = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getListProxies({ token: dataProps, limit: '100', offset: '0' })
      dispatch(setProxy(data))
    }
    listProxies()
  }, [dispatch])
}

export default useProxyInfo
