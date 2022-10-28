import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'

const LayoutMain = ({ children }) => {
  return (
    <View style={styles.sectionContainer}>
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0F1218',
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default LayoutMain
