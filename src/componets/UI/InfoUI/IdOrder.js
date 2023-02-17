import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function IdOrder({ id, text }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.bigText}>{text?.t1}</Text>
        <Text style={styles.smallText}>{id}</Text>
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

export default IdOrder
