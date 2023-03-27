import React, { useEffect, useState } from 'react'
import { Slider } from '@miblanchard/react-native-slider'
import { StyleSheet, View } from 'react-native'

const trackMarks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const validDays = [5, 10, 20, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]

function SliderExample({ setDays, setScrolling }) {
  const [value, setValue] = useState(1)
  useEffect(() => {
    setDays(validDays[value - 1])
  }, [value])

  const step = 1
  return (
    <View style={styles.container}>
      <Slider
        trackMarks={trackMarks}
        value={value}
        onValueChange={setValue}
        maximumValue={15}
        minimumValue={1}
        maximumTrackTintColor="#1E2127"
        minimumTrackTintColor="#FAC637"
        thumbTintColor="#FAC637"
        trackClickable
        thumbStyle={styles.thumbStyle}
        step={step}
        onSlidingStart={() => setScrolling(false)}
        onSlidingComplete={() => setScrolling(true)}
        renderTrackMarkComponent={index => (
          <View
            style={StyleSheet.flatten([
              styles.renderTrackMarkComponent,
              {
                width: index === 0 ? 4 : 2,
                backgroundColor: value < trackMarks[index] ? '#1E2127' : '#FAC637',
              },
            ])}
          />
        )}
      />
      <View style={styles.rightTint} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
  },
  rightTint: {
    width: 4,
    height: 14,
    backgroundColor: '#1E2127',
    left: '100%',
    bottom: 27,
    zIndex: -10,
  },
  thumbStyle: {
    borderWidth: 1,
    borderColor: '#0F1218',
    shadowColor: '#FAC637',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    left: 13,
  },
  renderTrackMarkComponent: {
    height: 14,
    borderRadius: 2,
    shadowColor: '#FAC637',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
})

export default SliderExample
