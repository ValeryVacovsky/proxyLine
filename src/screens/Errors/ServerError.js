import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LayoutAuth from '../../componets/LayoutAuth'

function ServerError() {
  return (
    <LayoutAuth>
      <View style={styles.container}>
        <Text style={styles.topText}>Engineering works</Text>
        <Text style={styles.bottomText}>
          Apologize. The servers are currently under maintenance, please try again later.
        </Text>
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

export default ServerError
