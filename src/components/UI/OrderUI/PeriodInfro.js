import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const PeriodInfro = ({ proxyText }) => {
  return (
    <View style={styles.periodContainer}>
      <Text style={styles.periodText}>5 {proxyText?.texts?.t6}</Text>
      <Text style={styles.periodText}>360 {proxyText?.texts?.t6}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  periodContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: -5,
  },
  periodText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 12,
  },
})

export default PeriodInfro
