import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setTags } from '../store/reducers/ipsTagsReducer'
import deleteDeleteAccessIp from '../api/Access/deleteDeleteAccessIp'
import getListAccessIps from '../api/Access/getListAccessIps'

export const useCreateIps = () => {
  const dispatch = useDispatch()
  // async function createTag(data) {
  //   const token = await AsyncStorage.getItem('@token')
  //   const id = await AsyncStorage.getItem('@id')
  //   const dataProps = `${id}_${token}`
  //   await postCreateTag({ token: dataProps, data })
  //   const data1 = await getListTags({ token: dataProps, limit: '100', offset: '0' })
  //   dispatch(setTags(data1.data))
  // }
  async function setDeleteIps(idIps) {
    const token = await AsyncStorage.getItem('@token')
    const id = await AsyncStorage.getItem('@id')
    const dataProps = `${id}_${token}`
    await deleteDeleteAccessIp({ token: dataProps, idIps })
    const data1 = await getListAccessIps({ token: dataProps, limit: '100', offset: '0' })
    dispatch(setTags(data1.data))
  }
  return {
    setDeleteIps,
  }
}
