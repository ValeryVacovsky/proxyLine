import React from 'react'
import { View, StyleSheet } from 'react-native'
import CenterButtonOn from './CenterButtonUI/CenterButtonOn'
import CenterButtonOff from './CenterButtonUI/CenterButtonOff'
import CenterButtonNone from './CenterButtonUI/CenterButtonNone'

const CenterButton = ({ statusConnect, setStatusConnect, Image, heightOffScreen }) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {
          marginTop: heightOffScreen > 700 ? 40 : 0,
        },
      ])}>
      {statusConnect === 'on' && (
        <CenterButtonOn setStatusConnect={setStatusConnect} Image={Image} heightOffScreen={heightOffScreen} />
      )}
      {statusConnect === 'off' && (
        <CenterButtonOff setStatusConnect={setStatusConnect} Image={Image} heightOffScreen={heightOffScreen} />
      )}
      {statusConnect === 'none' && <CenterButtonNone Image={Image} heightOffScreen={heightOffScreen} />}
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
