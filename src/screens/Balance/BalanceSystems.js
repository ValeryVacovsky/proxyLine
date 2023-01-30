import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, SafeAreaView, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LayoutMain from '../../componets/LayoutMain'
import getBalance from '../../api/getBalance'
import BalanceTopTableSystems from '../../componets/UI/BalanceUI/BalanceTopTableSystems'
import BalanceListSystem from '../../componets/Balance/BalanceListSystem'
import { setBalance } from '../../store/reducers/balanceSystems'
import { useSelector } from 'react-redux'

function BalanceSystems({ navigation }) {
  const [balanceSystem, setBalanceSystem] = useState([])
  const [balanceCount, setBalanceCount] = useState(0)
  useSelector(data => console.log(data))
  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getBalance(dataProps)
      await setBalanceCount('data', data.data)
    }
    fetchData()
  }, [])
  return ( 
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <BalanceTopTableSystems balance={balanceCount.balance} navigation={navigation} />
        <Text style={styles.text}>Платежные системы</Text>
        <ScrollView style={styles.scrollView}>
          {balanceSystem.map(key => (
            <BalanceListSystem key={key?.name} navigation={navigation} name={key.name} />
          ))}
        </ScrollView>
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
    marginTop: 18,
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

export default BalanceSystems
