import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { ScrollView, StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native'
import LayoutMain from '../../componets/LayoutMain'
import BalanceTopTableSystems from '../../componets/UI/BalanceUI/BalanceTopTableSystems'
import BalanceListSystem from '../../componets/Balance/BalanceListSystem'
import { useSelector } from 'react-redux'
import BottomSheetForm from '../../componets/BottomSheetForm'
import BottomSheetCopy from '../../componets/UI/ProxyUI/BottomSheetCopy'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

function BalanceSystems({ navigation }) {
  const [text, setText] = useState({})
  const balanceText = useSelector(res => res.textReducer.balance)
  useEffect(() => {
    setText(balanceText.payload)
  }, [balanceText])
  const [amount, setAmount] = useState(null)
  const systems = useSelector(res => res.BalanceSystems.BalanceSystems)
  const [balanceSystems, setBalanceSystems] = useState([])
  const balance = useSelector(data => data.balanceReducer)
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
    setBalanceSystems(systems)
  }, [systems])
  useEffect(() => {
    if (amount == 0) {
      setMayGo(false)
    } else {
      setMayGo(true)
    }
  }, [amount])
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={{ color: '#CBCBCB', fontWeight: '600', fontSize: 14, lineHeight: 15 }}> Назад</Text>
        </TouchableOpacity>
      ),
    })
  })
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <BalanceTopTableSystems balance={balance.balance} navigation={navigation} />
        <Text style={styles.text}>{text?.texts?.t6}</Text>
        <View style={styles.topInputContainer}>
          <TextInput
            onFocus={() => {}}
            onBlur={() => {}}
            style={styles.inputFilter}
            onChangeText={setAmount}
            value={amount}
            iconPosition="right"
            placeholder=""
            placeholderTextColor="#CBCBCB"
            type="number"
            keyboardType="numeric"
            returnKeyType="done"
          />
          <Text style={styles.placeholderText}>$</Text>
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
  topInputContainer: {
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
  },
  inputFilter: {
    color: 'white',
    width: '80%',
    height: '100%',
    paddingLeft: 10,
  },
  placeholderText: {
    position: 'absolute',
    left: '4%',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 25,
    color: '#4F4F4F',
  },
})

export default BalanceSystems
