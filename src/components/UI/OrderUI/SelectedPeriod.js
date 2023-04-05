import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const SelectedPeriod = ({ proxyText, days }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.amountDescription}>{proxyText?.texts?.t3}</Text>
      <Text style={styles.amountBoldDiscription}>
        {days} {proxyText?.texts?.t6}
      </Text>
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
    marginBottom: 10,
  },
  amountDescription: {
    color: '#CBCBCB',
    fontWeight: '600',
  },
  amountBoldDiscription: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
})

export default SelectedPeriod
