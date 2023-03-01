import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

import { Colors } from '../../../utils/Color'

function InfoTag({ tag }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors[tag.color].back,
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 5,
        marginRight: 10,
      }}
      activeOpacity={0.8}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 13,
          color: Colors[tag.color].color,
          paddingBottom: 6,
          paddingTop: 6,
          paddingRight: 12,
          paddingLeft: 12,
        }}>
        {tag.value}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.red.back,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
    marginRight: 10,
  },
  item: {
    fontWeight: '600',
    fontSize: 13,
    color: Colors.red.color,
    paddingBottom: 6,
    paddingTop: 6,
    paddingRight: 12,
    paddingLeft: 12,
  },
})

export default InfoTag
