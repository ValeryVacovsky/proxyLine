import React, { useState } from 'react'
import Slider from '@react-native-community/slider'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
  },
})

function SliderCommunity() {
  return (
    <View style={styles.container}>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  )
}

export default SliderCommunity
