import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setIps } from '../store/reducers/ipsTagsReducer'
import { deleteDeleteAccessIp } from '../api/Access/deleteDeleteAccessIp'
import getListAccessIps from '../api/Access/getListAccessIps'
import postCreateAccessIp from '../api/Access/postCreateAccessIp'

export const useCreateIps = () => {
  const dispatch = useDispatch()
  async function setCreateIps(data) {
    const tokenAccess = await AsyncStorage.getItem('@token')
    const id = await AsyncStorage.getItem('@id')
    const token = `${id}_${tokenAccess}`
    await postCreateAccessIp({ token: token, data })
    const data1 = await getListAccessIps({ token: token, limit: '100', offset: '0' })
    dispatch(setIps(data1.data))
  }
  async function setDeleteIps(idIps) {
    const tokenAccess = await AsyncStorage.getItem('@token')
    const id = await AsyncStorage.getItem('@id')
    const token = `${id}_${tokenAccess}`
    await deleteDeleteAccessIp({ token: token, idIps: idIps })
    const data1 = await getListAccessIps({ token, limit: '100', offset: '0' })
    dispatch(setIps(data1.data))
  }
  return {
    setDeleteIps,
    setCreateIps,
  }
}
