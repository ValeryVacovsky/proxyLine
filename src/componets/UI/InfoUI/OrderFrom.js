import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function OrderFrom({ date, text }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>{text?.t10}</Text>
        <Text style={{ fontWeight: '700', fontSize: 14, color: 'white' }}>{date}</Text>
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
})

export default OrderFrom
