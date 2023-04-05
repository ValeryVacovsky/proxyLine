import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import ButtonNone from '../../../../image/ButtonNone.png'

const CenterButtonNone = ({ heightOffScreen, setStatusConnect }) => {
  const handleSetStatusConnect = () => {
    setStatusConnect('on')
  }
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleSetStatusConnect}>
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
    width: 160,
    height: 160,
    alignItems: 'center',
  },
})

export default CenterButtonNone
