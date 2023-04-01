import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LayoutAuth from '../../components/LayoutAuth'

function NetworkError() {
  return (
    <LayoutAuth>
      <View style={styles.container}>
        <Text style={styles.topText}>No internet connection</Text>
        <Text style={styles.bottomText}>Try another mobile or wi-fi network.</Text>
      </View>
    </LayoutAuth>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 40,
    padding: 20,
    backgroundColor: '#1E2127',
    borderRadius: 14,
  },
  topText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 18,
    textAlign: 'center',
  },
  bottomText: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15,
    color: 'white',
    textAlign: 'center',
  },
})

export default NetworkError
