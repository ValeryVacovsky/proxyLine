import React from 'react'
import { View, StyleSheet } from 'react-native'
import SliderExample from './SliderExample'

const Slider = ({ setScrolling, setDays, days }) => {
  return (
    <View
      style={styles.container}
      onTouchStart={() => {
        setScrolling(false)
      }}>
      <SliderExample
        days={days}
        setDays={value => setDays(Array.isArray(value) ? value[0] : value)}
        setScrolling={setScrolling}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '93%',
    right: 20,
  },
})

export default Slider
