import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

function InfoCheckButton({ text, handlePressCheckButton }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.textContainer} activeOpacity={0.8} onPress={handlePressCheckButton}>
        <Text style={styles.text}>{text?.b0}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 17,
    paddingTop: 17,
    alignItems: 'center',
    width: '90%',
  },
  textContainer: {
    backgroundColor: '#1E2127',
    width: '90%',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 20,
  },
  text: {
    fontWeight: '600',
    fontSize: 13,
    color: '#FAC637',
    paddingBottom: 18,
    paddingTop: 18,
  },
})

export default InfoCheckButton
