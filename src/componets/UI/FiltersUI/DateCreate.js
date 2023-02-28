import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import BottomSheetDateCreate from './BottomSheet/BottomSheetDateCreate'

function DateCreate({ dateCreate, setFilters, setChildrenItem, handleClosePress, handleSnapPress, setIsOpen }) {
  // const today = new Date()
  // const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  // const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
  // const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1))
  // const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 7))
  // const startOfMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1)
  // const endOfMonth = new Date(today.getFullYear(), today.getMonth(), 0)
  const handlePress = item => {
    setFilters(prevState =>
      prevState.dateCreate.includes(item)
        ? { ...prevState, dateCreate: prevState.dateCreate.filter(active => active !== item) }
        : { ...prevState, dateCreate: prevState.dateCreate.concat(item) },
    )
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(
      <BottomSheetDateCreate
        handleClosePress={handleClosePress}
        setIsOpen={setIsOpen}
        handleSnapPress={handleSnapPress}
      />,
    )
    setTimeout(() => {
      handleSnapPress(2)
    }, 600)

    setIsOpen(true)
  }
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>Дата создания</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleOpenBottomSheet}>
          <Text style={styles.textInfo}>Выбрать дату</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containder}>
        <TouchableOpacity
          style={{
            backgroundColor: dateCreate.includes('today') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => handlePress('today')}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: dateCreate.includes('today') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            Сегодня
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: dateCreate.includes('toweek') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            handlePress('toweek')
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: dateCreate.includes('toweek') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            На этой недели
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: dateCreate.includes('tomonth') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            handlePress('tomonth')
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: dateCreate.includes('tomonth') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            В этом месяце
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containder: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
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

export default DateCreate
