import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const TopInfoIp = ({ mainText, Ip }) => {
  return (
    <View>
      <Text style={styles.yourIP}>{mainText?.texts?.t0}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.ipAdress}>{Ip}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  yourIP: {
    paddingBottom: 5,
    textAlign: 'center',
    color: 'white',
    fontWeight: '400',
    fontSize: 15,
  },
  ipAdress: {
    paddingBottom: 5,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 24,
  },
  textContainer: {
    minHeight: 40,
  },
})

export default TopInfoIp
