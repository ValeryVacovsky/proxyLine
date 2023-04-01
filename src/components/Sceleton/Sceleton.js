import React from 'react'
import { StyleSheet, View, Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Sceleton = ({ width, height, style }) => {
  return (
    <View style={StyleSheet.flatten([{ width: width, height: height, backgroundColor: 'rgba(0,0,0,0.12)' }, style])}>
      <Animated.View style={{ width: '100%', height: '100%' }}>
        <LinearGradient
          style={{ width: '100%', height: '100%' }}
          colors={['transparent', 'rgba(0, 0, 0, 0.05)', 'transparent']}
          start={{ x: 1, y: 1 }}
        />
      </Animated.View>
    </View>
  )
}

export default Sceleton
