import React, { useState } from 'react'
import { Slider } from '@miblanchard/react-native-slider'
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

function SliderExample({ days, setDays, setScrolling }) {
  const trackMarks = [
    30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360,
  ]
  const [step] = useState(30)
  return (
    <View style={styles.container}>
      <Slider
        trackMarks={trackMarks}
        value={days}
        onValueChange={setDays}
        maximumValue={360}
        minimumValue={30}
        maximumTrackTintColor="#1E2127"
        minimumTrackTintColor="#FAC637"
        thumbTintColor="#FAC637"
        trackClickable
        thumbStyle={{
          borderWidth: 1,
          borderColor: '#0F1218',
          shadowColor: '#FAC637',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
        }}
        step={step}
        onSlidingStart={() => setScrolling(false)}
        onSlidingComplete={() => setScrolling(true)}
        renderTrackMarkComponent={index => (
          <View
            style={{
              width: index === 0 ? 4 : 2,
              height: 14,
              backgroundColor: days < trackMarks[index] ? '#1E2127' : '#FAC637',
              borderRadius: 2,
              shadowColor: '#FAC637',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
            }}
          />
        )}
      />
    </View>
  )
}

export default SliderExample
