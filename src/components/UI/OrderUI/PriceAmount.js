import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const PriceAmount = ({ proxyText, price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.priceAmountDescriptionText}>{proxyText?.texts?.t4}</Text>
      <Text style={styles.priceAmountText}>$ {price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingBottom: 13,
  },
  priceAmountDescriptionText: {
    color: '#CBCBCB',
    fontWeight: '600',
  },
  priceAmountText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
})

export default PriceAmount
