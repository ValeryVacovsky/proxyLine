import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const HttpType = ({ proxyText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.amountDescription}>{proxyText?.texts?.t2}</Text>
      <Text style={styles.htttpsocksDiscritinon}> HTTP / SOCKS5</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  amountDescription: {
    color: '#CBCBCB',
    fontWeight: '600',
  },
  htttpsocksDiscritinon: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 15,
  },
})

export default HttpType
