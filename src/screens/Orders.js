import React, { useEffect, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import LayoutMain from '../components/LayoutMain'
import UserNavigation from '../components/UserNavigation'
import OrdersList from '../components/OrdersList'
import OrdersListData from '../components/OrdersListData'
import ModalSuccess from '../components/Orders/ModalSuccess'
import { ActivityIndicator } from 'react-native-paper'
import getListOrders from '../api/getListOrders'

const heightOffScreen = Dimensions.get('window').height

function Orders({ navigation }) {
  const dataOrders = useSelector(res => res.ordersReducer.orders)
  const ordersRes = useSelector(data => data.orderReducer)
  const [dataOrdersState, setDataOrdersState] = useState(dataOrders)
  const dataOrdersRender = useMemo(() => [...ordersRes, ...dataOrdersState], [dataOrdersState, ordersRes])
  const proxyText = useSelector(res => res.textReducer.orders.payload)
  const [modalVisible, setModalVisible] = useState(false)
  const [currentOffset, setCurrentOffset] = useState(0)
  const [loading, setLoading] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
    setTimeout(() => {
      setModalVisible(false)
    }, 2000)
  }

  const getOrders = async () => {
    const token = await AsyncStorage.getItem('@token')
    const id = await AsyncStorage.getItem('@id')
    const dataProps = `${id}_${token}`
    setLoading(true)
    getListOrders({ token: dataProps, limit: '100', offset: currentOffset }).then(res => {
      currentOffset > 0 && setDataOrdersState([...dataOrdersState, ...res.data])
      setLoading(false)
    })
  }

  const loadMoreItem = () => {
    setCurrentOffset(prev => prev + 50)
  }

  const renderLoader = () => {
    return loading ? (
      <View>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null
  }

  useEffect(() => {
    getOrders()
  }, [currentOffset])

  useEffect(() => {
    async function cahngeLocalOrders() {
      await AsyncStorage.setItem('@Orders', JSON.stringify(ordersRes))
    }
    cahngeLocalOrders()
  }, [ordersRes])

  useEffect(() => {
    setDataOrdersState(dataOrders)
  }, [dataOrders])

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: 'transparent',
    })
  }, [navigation])

  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        {ordersRes?.length + dataOrders?.length > 0 && (
          <FlatList
            style={styles.scrollView}
            data={dataOrdersRender}
            renderItem={({ item }) =>
              item.country_id ? (
                <OrdersListData text={proxyText} data={item} />
              ) : (
                <OrdersList
                  key={item?.data?.id}
                  navigation={navigation}
                  data={item}
                  text={proxyText}
                  toggleModal={toggleModal}
                />
              )
            }
            keyExtractor={item => item.id}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={0}
          />
        )}
        <View style={styles.scrollContainer}>
          {ordersRes?.length + dataOrders?.length === 0 && (
            <View style={styles.ElementContainer}>
              <View style={styles.infoContainer}>
                <View style={styles.infoBlock}>
                  <Text style={styles.textH1}>{proxyText?.texts?.t0}</Text>
                  <Text style={styles.textDiscription}>{proxyText?.texts?.t1}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.Button} activeOpacity={0.8} onPress={() => navigation.navigate('Proxy')}>
                <Text style={styles.buttonText}>{proxyText?.buttons?.b0}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
      <View style={heightOffScreen > 700 ? styles.navContainer : styles.s_navContainer}>
        <UserNavigation status="Orders" navigation={navigation} />
      </View>
      <ModalSuccess visible={modalVisible} onClose={toggleModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTextTop}>{proxyText?.texts?.t11 || 'Прокси куплен!'}</Text>
          <Text style={styles.modalBottomText}>
            {proxyText?.texts?.t12 || 'Что бы использовать прокси выберите его из списка своих прокси'}
          </Text>
        </View>
      </ModalSuccess>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
    marginBottom: 5,
  },
  text: {
    fontSize: 42,
  },
  scrollContainer: {
    alignItems: 'center',
    top: '35%',
  },
  ElementContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    zIndex: 0,
    marginTop: 11,
  },
  infoContainer: {
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    marginBottom: 1,
    width: '100%',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    alignItems: 'center',
  },
  infoBlock: {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
  },
  textH1: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 6,
  },
  textDiscription: {
    color: 'white',
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  Button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  buttonText: {
    fontWeight: '700',
    color: '#FAC637',
    paddingTop: 14,
    paddingBottom: 14,
  },
  navContainer: {
    alignItems: 'center',
    marginBottom: 23,
  },
  s_navContainer: {
    alignItems: 'center',
    width: '95%',
    left: 10,
  },
  modalContainer: {
    backgroundColor: '#1E2127',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '80%',
  },
  modalTextTop: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 15,
    marginBottom: 6,
    color: 'white',
  },
  modalBottomText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 15,
    color: 'white',
  },
})

export default Orders
