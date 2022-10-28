import React from 'react'
import { StyleSheet, View, ImageBackground, StatusBar } from 'react-native'

const AuthIntro = ({ children }) => {
  // setTimeout(() => navigation.navigate('Auth'), 1000)
  return (
    <View style={styles.sectionContainer}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../image/back-ground-lines.png')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        {children}
      </ImageBackground>
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

export default AuthIntro
