import React from 'react'
import { View, StyleSheet } from 'react-native'
import CenterButtonOn from './CenterButtonUI/CenterButtonOn'
import CenterButtonOff from './CenterButtonUI/CenterButtonOff'
import CenterButtonNone from './CenterButtonUI/CenterButtonNone'

const CenterButton = ({ statusConect, setStatusConect, Image, heightOffScreen }) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {
          marginTop: heightOffScreen > 700 ? 40 : 0,
        },
      ])}>
      {statusConect === 'on' && (
        <CenterButtonOn setStatusConect={setStatusConect} Image={Image} heightOffScreen={heightOffScreen} />
      )}
      {statusConect === 'off' && (
        <CenterButtonOff setStatusConect={setStatusConect} Image={Image} heightOffScreen={heightOffScreen} />
      )}
      {statusConect === 'none' && <CenterButtonNone Image={Image} heightOffScreen={heightOffScreen} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  defaultButton: {
    width: 200,
    height: 200,
    alignItems: 'center',
  },
  noneButton: {
    width: 160,
    height: 160,
    alignItems: 'center',
    padding: 40,
    marginTop: 30,
    marginBottom: 10,
  },
})

export default CenterButton
