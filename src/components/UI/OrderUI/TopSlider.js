import React from 'react'
import { View, StyleSheet } from 'react-native'

const TopSlider = ({ order }) => {
  return (
    <View style={styles.container}>
      <View
        style={StyleSheet.flatten([
          styles.sliderItemSide,
          {
            backgroundColor: order.id === 1 ? 'gray' : '#262525',
          },
        ])}
      />
      <View
        style={StyleSheet.flatten([
          styles.sliderItemCenter,
          {
            backgroundColor: order.id === 2 ? 'gray' : '#262525',
          },
        ])}
      />
      <View
        style={StyleSheet.flatten([
          styles.sliderItemSide,
          {
            backgroundColor: order.id === 3 ? 'gray' : '#262525',
          },
        ])}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  sliderItemSide: {
    width: 40,
    height: 4,
  },
  sliderItemCenter: {
    width: 40,
    height: 4,
    marginLeft: 5,
    marginRight: 5,
  },
})

export default TopSlider
