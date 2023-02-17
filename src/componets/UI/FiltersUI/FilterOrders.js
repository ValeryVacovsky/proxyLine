import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import BottomSheetOrders from './BottomSheet/BottomSheetOrders'

function FilterOrders({ orders, setFilters, setChildrenItem, handleClosePress, handleSnapPress, setIsOpen }) {
  const [ordersDefault, setOrdersDefault] = useState(['58654', '23234', '67956'])
  const handlePress = item => {
    setFilters(prevState =>
      prevState.orders.includes(item)
        ? { ...prevState, orders: prevState.orders.filter(active => active !== item) }
        : { ...prevState, orders: prevState.orders.concat(item) },
    )
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(
      <BottomSheetOrders
        handleClosePress={handleClosePress}
        setIsOpen={setIsOpen}
        setOrdersDefault={setOrdersDefault}
      />,
    )
    handleSnapPress(0)
    setIsOpen(true)
  }
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>Заказы</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleOpenBottomSheet}>
          <Text style={styles.textInfo}>Выбрать</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {ordersDefault.map(item => (
          <TouchableOpacity
            key={item}
            style={{
              backgroundColor: orders.includes(item) ? '#FAC637' : '#333842',
              alignItems: 'center',
              borderRadius: 30,
              marginTop: 10,
              marginRight: 10,
            }}
            activeOpacity={0.8}
            onPress={() => handlePress(item)}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 13,
                color: orders.includes(item) ? '#0F1218' : 'white',
                paddingBottom: 6,
                paddingTop: 6,
                paddingRight: 12,
                paddingLeft: 12,
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textInfo: {
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
  },
  topMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Chips: {
    width: '100%',
    marginBottom: 20,
  },
})

export default FilterOrders
