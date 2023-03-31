import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import ButtonOn from '../../image/ButtonOn.png'
import ButtonNone from '../../image/ButtonNone.png'
import ButtonOff from '../../image/ButtonOff.png'

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
        <TouchableOpacity onPress={() => setStatusConect('off')} activeOpacity={0.8}>
          <Image
            source={ButtonOff}
            style={StyleSheet.flatten([
              styles.defaultButton,
              {
                bottom: heightOffScreen < 700 ? 12 : 0,
              },
            ])}
            onPress={() => setStatusConect('on')}
          />
        </TouchableOpacity>
      )}
      {statusConect === 'off' && (
        <TouchableOpacity onPress={() => setStatusConect('on')} activeOpacity={0.8}>
          <Image
            source={ButtonOn}
            style={StyleSheet.flatten([
              styles.defaultButton,
              {
                bottom: heightOffScreen < 700 ? 12 : 0,
              },
            ])}
            onPress={() => setStatusConect('on')}
          />
        </TouchableOpacity>
      )}
      {statusConect === 'none' && (
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            source={ButtonNone}
            style={StyleSheet.flatten([
              styles.noneButton,
              {
                bottom: heightOffScreen < 700 ? 12 : 0,
              },
            ])}
          />
        </TouchableOpacity>
      )}
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
