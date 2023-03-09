import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import LayoutMain from '../../componets/LayoutMain'
import BalanceList from '../../componets/Balance/BalanceList'
import BalanceTopTable from '../../componets/UI/BalanceUI/BalanceTopTable'
import BalanceClearTable from '../../componets/UI/BalanceUI/BalanceClearTable'
import getPaymentSystems from '../../api/getPaymentSystem'
import { useDispatch, useSelector } from 'react-redux'
import { setBalanceSystems } from '../../store/reducers/balanceSystems'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

function Balance({ navigation }) {
  const text = useSelector(res => res.textReducer.balance.payload)
  const dispatch = useDispatch()
  const balance = useSelector(data => data.balanceReducer)
  const operations = useSelector(data => data.balanceReducer.balanceListLogs)
  useEffect(() => {
    const listPayments = async () => {
      const res = await getPaymentSystems()
      dispatch(setBalanceSystems(res.data))
    }
    listPayments()
  }, [dispatch])
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b2}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
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
  headerLeftTintContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftTintText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
})

export default Balance
