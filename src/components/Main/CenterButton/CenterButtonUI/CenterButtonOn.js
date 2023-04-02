import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import ButtonOff from '../../../../image/ButtonOff.png'

const CenterButtonOn = ({ setStatusConnect, Image, heightOffScreen }) => {
  const handlePress = status => {
    setStatusConnect(status)
  }
  return (
    <TouchableOpacity onPress={() => handlePress('off')} activeOpacity={0.8}>
      <Image
        source={ButtonOff}
        style={StyleSheet.flatten([
          styles.defaultButton,
          {
            bottom: heightOffScreen < 700 ? 12 : 0,
          },
        ])}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  defaultButton: {
    width: 200,
    height: 200,
    alignItems: 'center',
  },
})

export default CenterButtonOn
