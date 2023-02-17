import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

function ConfirnIP({ ips }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Text style={styles.item}>{ips}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333842',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
    marginRight: 10,
  },
  item: {
    fontWeight: '600',
    fontSize: 13,
    color: 'white',
    paddingBottom: 6,
    paddingTop: 6,
    paddingRight: 12,
    paddingLeft: 12,
  },
})

export default ConfirnIP
