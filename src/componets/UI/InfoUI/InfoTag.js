import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const Colors = {
  danger: {
    back: 'rgba(236, 54, 65, 0.1)',
    color: '#EC3641',
  },
  warning: {
    back: 'rgba(246, 186, 64, 0.1)',
    color: '#F6BA40',
  },
  success: {
    back: 'rgba(97, 198, 123, 0.1)',
    color: '#61C67B',
  },
  primary: {
    back: 'rgba(35, 107, 246, 0.1)',
    color: '#236BF6',
  },
}

function InfoTag({ tag }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Text style={styles.item}>{tag.value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.danger.back,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
    marginRight: 10,
  },
  item: {
    fontWeight: '600',
    fontSize: 13,
    color: Colors.danger.color,
    paddingBottom: 6,
    paddingTop: 6,
    paddingRight: 12,
    paddingLeft: 12,
  },
})

export default InfoTag
