import { useEffect } from 'react'
import getListTags from '../api/getListTags'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setTags } from '../store/reducers/ipsTagsReducer'
import { useDispatch } from 'react-redux'

export const useListTags = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const listProxies = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getListTags({ token: dataProps, limit: '100', offset: '0' })
      dispatch(setTags(data.data))
    }
    listProxies()
  }, [dispatch])
}
