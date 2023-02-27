import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import getListBalanceLogs from '../api/getListBalanceLogs'
import { setBalanceLogs, setBalance } from '../store/reducers/balanceReducer'
import getBalance from '../api/getBalance'

const useBalance = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const listLogs = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getListBalanceLogs({ token: dataProps, limit: '100', offset: '0' })
      dispatch(setBalanceLogs(data.data))
    }
    listLogs()
    const balance = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getBalance(dataProps)
      dispatch(setBalance(data.data.balance))
    }
    balance()
  })
}

export default useBalance
