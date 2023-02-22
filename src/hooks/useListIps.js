import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setIps } from '../store/reducers/ipsTagsReducer'
import { useDispatch } from 'react-redux'
import getListAccessIps from '../api/Access/getListAccessIps'

export const useListIps = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const listProxies = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getListAccessIps({ token: dataProps, limit: '100', offset: '0' })
      dispatch(setIps(data.data))
    }
    listProxies()
  }, [dispatch])
}
