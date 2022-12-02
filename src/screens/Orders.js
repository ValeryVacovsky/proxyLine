import React from 'react'
import { View, ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import LayoutMain from '../componets/LayoutMain'
import UserNavigation from '../componets/UserNavigation'
import OrdersList from '../componets/OrdersList'

const OrdersListTotal = [1, 2, 4, 5]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
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
    marginBottom: 25,
  },
})

function Orders({ navigation }) {
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        {OrdersListTotal.length > 0 && (
          <ScrollView style={styles.scrollView}>
            {OrdersListTotal.map(key => (
              <OrdersList key={key} navigation={navigation} />
            ))}
          </ScrollView>
        )}
        <View style={styles.scrollContainer}>
          {OrdersListTotal.length === 0 && (
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
      <View style={styles.navContainer}>
        <UserNavigation status="Orders" navigation={navigation} />
      </View>
    </LayoutMain>
  )
}

export default Orders
