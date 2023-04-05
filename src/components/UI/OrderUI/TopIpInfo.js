import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const TopIpInfo = ({ order }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.proxyTypeVersionText}>
          IP
          {order.proxyType}
        </Text>
        <Text style={styles.proxyTypeDiscriptionText}>{order.discription}</Text>
      </View>
      <View>{order.icon}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 0,
    border: 2,
    borderBottomColor: 'white',
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    marginBottom: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 21,
    paddingBottom: 14,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  proxyTypeVersionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  proxyTypeDiscriptionText: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '400',
  },
})

export default TopIpInfo
