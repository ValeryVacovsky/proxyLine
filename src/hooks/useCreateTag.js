import { useDispatch } from 'react-redux'
import getListTags from '../api/getListTags'
import AsyncStorage from '@react-native-async-storage/async-storage'
import postCreateTag from '../api/postCreateTag'
import deleteTag from '../api/deleteTag'
import { setTags } from '../store/reducers/ipsTagsReducer'

export const useCreateTag = () => {
  const dispatch = useDispatch()
  async function createTag(data) {
    const token = await AsyncStorage.getItem('@token')
    const id = await AsyncStorage.getItem('@id')
    const dataProps = `${id}_${token}`
    await postCreateTag({ token: dataProps, data })
    const data1 = await getListTags({ token: dataProps, limit: '100', offset: '0' })
    dispatch(setTags(data1.data))
  }
  async function setDeleteTag(tag) {
    const token = await AsyncStorage.getItem('@token')
    const id = await AsyncStorage.getItem('@id')
    const dataProps = `${id}_${token}`
    await deleteTag({ token: dataProps, tag })
    const data1 = await getListTags({ token: dataProps, limit: '100', offset: '0' })
    dispatch(setTags(data1.data))
  }
  return {
    setDeleteTag,
    createTag,
  }
}
