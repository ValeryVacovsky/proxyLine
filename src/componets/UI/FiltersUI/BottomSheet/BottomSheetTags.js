import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'

function BottomSheetTags({ handleClosePress, setIsOpen, setTagsList }) {
  const [value, setValue] = useState('')
  const handlePress = () => {
    handleClosePress()
    setIsOpen(false)
    if (value.length > 0) {
      setTagsList(prevState =>
        prevState.includes(value) ? prevState.filter(id => id !== value) : prevState.concat(String(value)),
      )
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>asfasd</Text>
      <Text style={{ color: 'white' }}>asfasd</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F1218',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default BottomSheetTags
