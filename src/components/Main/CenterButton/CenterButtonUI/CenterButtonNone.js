import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import ButtonNone from '../../../../image/ButtonNone.png'

const CenterButtonNone = ({ Image, heightOffScreen }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Image
        source={ButtonNone}
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

export default CenterButtonNone
