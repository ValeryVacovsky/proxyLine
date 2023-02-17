import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import BottomSheetDateCreate from './BottomSheet/BottomSheetDateCreate'

function DateCreate({ dateCreate, setFilters, setChildrenItem, handleClosePress, handleSnapPress, setIsOpen }) {
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>Дата создания</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setChildrenItem(<BottomSheetDateCreate handleClosePress={handleClosePress} setIsOpen={setIsOpen} />)
            handleSnapPress(1)
            setIsOpen(true)
          }}>
          <Text style={styles.textInfo}>Выбрать дату</Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity
          style={{
            backgroundColor: dateCreate.includes('today') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.dateCreate.includes('today')
                ? { ...prevState, dateCreate: prevState.dateCreate.filter(active => active !== 'today') }
                : { ...prevState, dateCreate: prevState.dateCreate.concat('today') },
            )
          }}>
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
            setFilters(prevState =>
              prevState.dateCreate.includes('toweek')
                ? { ...prevState, dateCreate: prevState.dateCreate.filter(active => active !== 'toweek') }
                : { ...prevState, dateCreate: prevState.dateCreate.concat('toweek') },
            )
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
            setFilters(prevState =>
              prevState.dateCreate.includes('tomonth')
                ? { ...prevState, dateCreate: prevState.dateCreate.filter(active => active !== 'tomonth') }
                : { ...prevState, dateCreate: prevState.dateCreate.concat('tomonth') },
            )
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
