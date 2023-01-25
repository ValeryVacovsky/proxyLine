import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

function DateOver({ dateOver, setFilters }) {
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>Дата окончания</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.textInfo}>Выбрать дату</Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity
          style={{
            backgroundColor: dateOver.includes('today') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.dateOver.includes('today')
                ? { ...prevState, dateOver: prevState.dateOver.filter(active => active !== 'today') }
                : { ...prevState, dateOver: prevState.dateOver.concat('today') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: dateOver.includes('today') ? '#0F1218' : 'white',
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
            backgroundColor: dateOver.includes('toweek') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.dateOver.includes('toweek')
                ? { ...prevState, dateOver: prevState.dateOver.filter(active => active !== 'toweek') }
                : { ...prevState, dateOver: prevState.dateOver.concat('toweek') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: dateOver.includes('toweek') ? '#0F1218' : 'white',
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
            backgroundColor: dateOver.includes('tomonth') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.dateOver.includes('tomonth')
                ? { ...prevState, dateOver: prevState.dateOver.filter(active => active !== 'tomonth') }
                : { ...prevState, dateOver: prevState.dateOver.concat('tomonth') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: dateOver.includes('tomonth') ? '#0F1218' : 'white',
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

export default DateOver
