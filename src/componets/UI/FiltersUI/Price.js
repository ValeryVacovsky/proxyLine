import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

function Price({ price, setFilters }) {
  return (
    <View style={styles.Chips}>
      <Text style={styles.text}>Цена</Text>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity
          style={{
            backgroundColor: price.includes('fix') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.price.includes('fix')
                ? { ...prevState, price: prevState.price.filter(active => active !== 'fix') }
                : { ...prevState, price: prevState.price.concat('fix') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: price.includes('fix') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            Фиксированная
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: price.includes('course') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.price.includes('course')
                ? { ...prevState, price: prevState.price.filter(active => active !== 'course') }
                : { ...prevState, price: prevState.price.concat('course') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: price.includes('course') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            По курсу
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
  Chips: {
    width: '90%',
    marginBottom: 20,
  },
})

export default Price
