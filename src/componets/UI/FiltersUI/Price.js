import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'

function Price({ price, setFilters }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const handlePress = item => {
    setFilters(prevState =>
      prevState.price.includes(item)
        ? { ...prevState, price: prevState.price.filter(active => active !== item) }
        : { ...prevState, price: prevState.price.concat(item) },
    )
  }
  return (
    <View style={styles.Chips}>
      <Text style={styles.text}>{text?.texts?.t28}</Text>
      <View style={styles.conatainer}>
        <TouchableOpacity
          style={StyleSheet.flatten([
            styles.priceContainer,
            {
              backgroundColor: price.includes('fix') ? '#FAC637' : '#333842',
            },
          ])}
          activeOpacity={0.8}
          onPress={() => handlePress('fix')}>
          <Text
            style={StyleSheet.flatten([
              styles.priceText,
              {
                color: price.includes('fix') ? '#0F1218' : 'white',
              },
            ])}>
            {text?.texts?.t29}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={StyleSheet.flatten([
            styles.priceContainer,
            {
              backgroundColor: price.includes('course') ? '#FAC637' : '#333842',
            },
          ])}
          activeOpacity={0.8}
          onPress={() => handlePress('center')}>
          <Text
            style={StyleSheet.flatten([
              styles.priceText,
              {
                color: price.includes('course') ? '#0F1218' : 'white',
              },
            ])}>
            {text?.texts?.t30}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conatainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  Chips: {
    width: '90%',
    marginBottom: 20,
  },
  priceContainer: {
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
    marginRight: 10,
  },
  priceText: {
    fontWeight: '600',
    fontSize: 13,
    paddingBottom: 6,
    paddingTop: 6,
    paddingRight: 12,
    paddingLeft: 12,
  },
})

export default Price
