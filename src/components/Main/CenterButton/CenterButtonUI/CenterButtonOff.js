import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import ButtonOn from '../../../../image/ButtonOn.png'

const CenterButtonOff = ({ setStatusConnect, Image, heightOffScreen }) => {
  const handlePress = status => {
    setStatusConnect(status)
  }
  return (
    <TouchableOpacity onPress={() => handlePress('on')} activeOpacity={0.8}>
      <Image
        source={ButtonOn}
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

export default CenterButtonOff
