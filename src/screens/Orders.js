import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity, Dimensions } from 'react-native'
import LayoutMain from '../componets/LayoutMain'
import UserNavigation from '../componets/UserNavigation'
import OrdersList from '../componets/OrdersList'
import { useSelector } from 'react-redux'

function Orders({ navigation }) {
  const [ordersListTotal, setOrdersListTotal] = useState([])
  const heightOffScreen = Dimensions.get('window').height
  const ordersRes = useSelector(data => data.orderReducer)
  useEffect(() => {
    setOrdersListTotal(ordersRes)
  }, [ordersRes])
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        {ordersListTotal?.length > 0 && (
          <ScrollView style={styles.scrollView}>
            {ordersListTotal?.map(data => (
              <OrdersList key={data.data.id} navigation={navigation} data={data} />
            ))}
          </ScrollView>
        )}
        <View style={styles.scrollContainer}>
          {ordersListTotal?.length === 0 && (
            <View style={styles.ElementContainer}>
              <View style={styles.infoContainer}>
                <View style={styles.infoBlock}>
                  <Text style={styles.textH1}>Нет ни одного заказа</Text>
                  <Text style={styles.textDiscription}>На данный момент вы не совершали ни одного заказа</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.Button} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Получить</Text>
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
