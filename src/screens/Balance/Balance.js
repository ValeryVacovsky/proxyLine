import React, { useEffect, useState } from 'react'
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import getListBalanceLogs from '../../api/getListBalanceLogs'
import { setBalanceLogs } from '../../store/reducers/balanceReducer'

import LayoutMain from '../../components/LayoutMain'
import BalanceList from '../../components/Balance/BalanceList'
import BalanceTopTable from '../../components/UI/BalanceUI/BalanceTopTable'
import BalanceClearTable from '../../components/UI/BalanceUI/BalanceClearTable'

import getPaymentSystems from '../../api/getPaymentSystem'

import { setBalanceSystems } from '../../store/reducers/balanceSystemsReducer'

import HeaderTintBack from '../../image/Svg/HeaderTintBack'

function Balance({ navigation }) {
  const text = useSelector(res => res.textReducer.balance.payload)
  const balance = useSelector(data => data.balanceReducer)
  const operations = useSelector(data => data.balanceReducer.balanceListLogs)
  const [currentOffset, setCurrentOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const loadMoreItem = () => {
    setCurrentOffset(prev => prev + 100)
  }

  const getBalanceLogs = async () => {
    const token = await AsyncStorage.getItem('@token')
    const id = await AsyncStorage.getItem('@id')
    const dataProps = `${id}_${token}`
    setLoading(true)
    getListBalanceLogs({ token: dataProps, limit: '100', offset: currentOffset }).then(res => {
      if (res.data.length > 0 && currentOffset > 0) {
        dispatch(setBalanceLogs([...operations, ...res.data]))
      }
      setLoading(false)
    })
  }

  const renderLoader = () => {
    return loading ? (
      <View>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null
  }

  useEffect(() => {
    getBalanceLogs()
  }, [currentOffset])

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
          <HeaderTintBack style={styles.headerLeftIcon} />
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
          <FlatList
            style={styles.scrollView}
            data={operations}
            renderItem={({ item }) => (
              <BalanceList key={item?.create_date} navigation={navigation} data={item} text={text} />
            )}
            keyExtractor={item => item.id}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={0}
          />
        )}
        {/* {operations.length > 0 && (
          <ScrollView style={styles.scrollView}>
            {operations.map(balance => (
              <BalanceList key={balance?.create_date} navigation={navigation} data={balance} text={text} />
            ))}
          </ScrollView>
        )} */}
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
  headerLeftIcon: {
    bottom: 1,
  },
  headerLeftTintText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
})

export default Balance
