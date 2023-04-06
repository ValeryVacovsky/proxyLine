import React from 'react'
import { View, StyleSheet } from 'react-native'
import CenterButtonOn from './CenterButtonUI/CenterButtonOn'
import CenterButtonOff from './CenterButtonUI/CenterButtonOff'
import CenterButtonNone from './CenterButtonUI/CenterButtonNone'

const CenterButton = ({ statusConnect, setStatusConnect, heightOffScreen }) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {
          marginTop: heightOffScreen > 700 ? 30 : 10,
          marginBottom: heightOffScreen > 700 ? 40 : 10,
        },
      ])}>
      {statusConnect === 'on' && (
        <CenterButtonOn setStatusConnect={setStatusConnect} heightOffScreen={heightOffScreen} />
      )}
      {statusConnect === 'off' && (
        <CenterButtonOff setStatusConnect={setStatusConnect} heightOffScreen={heightOffScreen} />
      )}
      {statusConnect === 'none' && (
        <CenterButtonNone heightOffScreen={heightOffScreen} setStatusConnect={setStatusConnect} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
  },
})

export default CenterButton
