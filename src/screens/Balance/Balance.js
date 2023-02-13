import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, SafeAreaView, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LayoutMain from '../../componets/LayoutMain'
import BalanceList from '../../componets/Balance/BalanceList'
import BalanceTopTable from '../../componets/UI/BalanceUI/BalanceTopTable'
import BalanceClearTable from '../../componets/UI/BalanceUI/BalanceClearTable'
import getBalance from '../../api/getBalance'
import getListBalanceLogs from '../../api/getListBalanceLogs'
import getPaymentSystems from '../../api/getPaymentSystem'
import { useDispatch, useSelector } from 'react-redux'
import { setBalanceSystems } from '../../store/reducers/balanceSystems'

function Balance({ navigation }) {
  const [text, setText] = useState({})
  const balanceText = useSelector(res => res.textReducer.balance)
  useEffect(() => {
    setText(balanceText.payload)
  }, [balanceText])
  const dispatch = useDispatch()
  const [balance, setBalance] = useState({ balance: null })
  const [operations, setOperations] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getBalance(dataProps)
      await setBalance(data.data)
    }
    fetchData()
    const listOrders = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getListBalanceLogs({ token: dataProps, limit: '100', offset: '0' })
      setOperations(data.data)
    }
    listOrders()
    const listPayments = async () => {
      const res = await getPaymentSystems()
      dispatch(setBalanceSystems(res.data))
    }
    listPayments()
  }, [dispatch])
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <BalanceTopTable balance={balance.balance} navigation={navigation} text={text} />
        <Text style={styles.text}>{text?.texts?.t0}</Text>
        {operations.length > 0 && (
          <ScrollView style={styles.scrollView}>
            {operations.map(key => (
              <BalanceList key={key?.create_date} navigation={navigation} data={key} text={text} />
            ))}
          </ScrollView>
        )}
        {operations.length === 0 && <BalanceClearTable text={text} />}
      </SafeAreaView>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  circleGradient: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#008f68',
    fontSize: 12,
  },
})

export default Balance
