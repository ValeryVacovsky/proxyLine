import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { ScrollView, StyleSheet, SafeAreaView, Text, View, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LayoutMain from '../../componets/LayoutMain'
import getBalance from '../../api/getBalance'
import BalanceTopTableSystems from '../../componets/UI/BalanceUI/BalanceTopTableSystems'
import BalanceListSystem from '../../componets/Balance/BalanceListSystem'
import { useSelector } from 'react-redux'
import BottomSheetForm from '../../componets/BottomSheetForm'
import BottomSheetCopy from '../../componets/UI/ProxyUI/BottomSheetCopy'

function BalanceSystems({ navigation }) {
  const [text, setText] = useState({})
  const balanceText = useSelector(res => res.textReducer.balance)
  useEffect(() => {
    setText(balanceText.payload)
  }, [balanceText])
  const [amount, setAmount] = useState(null)
  const systems = useSelector(res => res.BalanceSystems.BalanceSystems)
  const [balanceSystems, setBalanceSystems] = useState([])
  const [balance, setBalance] = useState({ balance: null })
  const sheetRef = useRef(null)
  const snapPoints = useMemo(() => ['15%'], [])
  const [, setIsOpen] = useState(false)

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index)
    setIsOpen(false)
  }, [])
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close()
  }, [])

  const [error, setError] = useState(false)
  const [mayGo, setMayGo] = useState(false)
  const handelOpenCopy = () => {
    // eslint-disable-next-line react/no-unescaped-entities
    setChildrenItem(<BottomSheetCopy handleClosePress={handleClosePress}>{text?.texts?.t8}</BottomSheetCopy>)
    handleSnapPress(0)
    setError(true)
    setTimeout(() => {
      handleClosePress()
    }, 3000)
  }
  const [childrenItem, setChildrenItem] = useState(
    <BottomSheetCopy handleClosePress={handleClosePress}>{text?.texts?.t8}</BottomSheetCopy>,
  )
  handlePressRequest = () => {
    navigation.navigate('BalanceMethod', { dataNav })
  }
  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getBalance(dataProps)
      await setBalance(data.data)
    }
    fetchData()
  }, [])
  useEffect(() => {
    setBalanceSystems(systems)
  }, [systems])
  useEffect(() => {
    if (amount == 0) {
      setMayGo(false)
    } else {
      setMayGo(true)
    }
  }, [amount])
  console.log('syste', balanceSystems[0].icon_path_2)
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <BalanceTopTableSystems balance={balance.balance} navigation={navigation} />
        <Text style={styles.text}>{text?.texts?.t6}</Text>
        <View
          style={{
            backgroundColor: '#1E2127',
            color: '#CBCBCB',
            height: 44,
            minWidth: '90%',
            borderRadius: 8,
            paddingLeft: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            marginHorizontal: 20,
            marginBottom: 5,
          }}>
          <TextInput
            onFocus={() => {}}
            onBlur={() => {}}
            style={{ color: 'white', width: '80%', height: '100%', paddingLeft: 10 }}
            onChangeText={setAmount}
            value={amount}
            iconPosition="right"
            placeholder=""
            placeholderTextColor="#CBCBCB"
            type="number"
            keyboardType="numeric"
            returnKeyType="done"
          />
          <Text
            style={{
              position: 'absolute',
              left: '4%',
              fontSize: 20,
              fontWeight: '600',
              lineHeight: 25,
              color: '#4F4F4F',
            }}>
            $
          </Text>
        </View>
        <Text style={styles.text}>{text?.texts?.t7}</Text>
        <ScrollView style={styles.scrollView}>
          {balanceSystems.map(data => (
            <BalanceListSystem
              key={data?.name}
              navigation={navigation}
              name={data.name}
              data={data}
              amount={amount}
              error={error}
              handelOpenCopy={handelOpenCopy}
              mayGo={mayGo}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
      {error && (
        <BottomSheetForm
          navigation={navigation}
          sheetRef={sheetRef}
          snapPoints={snapPoints}
          setIsOpen={setIsOpen}
          handleClosePress={handleClosePress}>
          {childrenItem}
        </BottomSheetForm>
      )}
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
    marginTop: 20,
    marginBottom: 14,
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
