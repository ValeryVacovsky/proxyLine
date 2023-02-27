import React from 'react'
import { useSelector } from 'react-redux'
import { View, ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity, Dimensions } from 'react-native'
import LayoutMain from '../componets/LayoutMain'
import UserNavigation from '../componets/UserNavigation'
import OrdersList from '../componets/OrdersList'
import { useListOrders } from '../hooks/useListOrders'
import OrdersListData from '../componets/OrdersListData'

function Orders({ navigation }) {
  const dataOrders = useListOrders()
  const proxyText = useSelector(res => res.textReducer.orders.payload)
  const heightOffScreen = Dimensions.get('window').height
  const ordersRes = useSelector(data => data.orderReducer)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: 'transparent',
    })
  }, [navigation])
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        {ordersRes?.length + dataOrders.dataOrders.length > 0 && (
          <ScrollView style={styles.scrollView}>
            {ordersRes?.map(data => (
              <OrdersList key={data.data.id} navigation={navigation} data={data} text={proxyText} />
            ))}
            {dataOrders.dataOrders.map(item => {
              return <OrdersListData key={item.id} text={proxyText} data={item} />
            })}
          </ScrollView>
        )}
        <View style={styles.scrollContainer}>
          {ordersRes?.length + dataOrders.dataOrders?.length === 0 && (
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
})

export default Orders
