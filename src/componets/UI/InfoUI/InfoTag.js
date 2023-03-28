import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import { Colors } from '../../../utils/Color'

function InfoTag({ tag }) {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        styles.container,
        {
          backgroundColor: Colors[tag.color].back,
        },
      ])}
      activeOpacity={0.8}>
      <Text
        style={StyleSheet.flatten([
          styles.text,
          {
            color: Colors[tag.color].color,
          },
        ])}>
        {tag.value}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 5,
    marginRight: 10,
  },
  text: {
    fontWeight: '600',
    fontSize: 13,
    paddingBottom: 6,
    paddingTop: 6,
    paddingRight: 12,
    paddingLeft: 12,
  },
})

export default InfoTag
