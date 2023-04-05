import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const TopDescription = ({ order }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{order.handDesription}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAC637',
    top: 12,
    borderRadius: 8,
    position: 'relative',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 14,
    paddingRight: 14,
    shadowColor: '#FAC637',
    shadowOffset: { width: 3, height: 20 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    zIndex: 1,
  },
  text: {
    alignItems: 'center',
    fontWeight: '600',
    fontSize: 12,
    color: '#0F1218',
  },
})

export default TopDescription
