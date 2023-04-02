import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Version({ vesion, text }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.bigText}>{text?.t3}</Text>
        <Text style={styles.smallText}>IPv{vesion}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1E2127',
    marginBottom: 1,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 17,
    paddingTop: 17,
    alignItems: 'center',
    width: '90%',
  },
  bigText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#CBCBCB',
  },
  smallText: {
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
})

export default Version
