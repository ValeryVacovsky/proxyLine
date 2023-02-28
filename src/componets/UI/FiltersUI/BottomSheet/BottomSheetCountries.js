import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'

function BottomSheetCountries({ handleClosePress, setIsOpen }) {
  const [value, setValue] = useState('')
  const handlePress = () => {
    handleClosePress()
    setIsOpen(false)
  }
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextInput textContentType="date" style={styles.topTextInput} value={value} onChangeText={setValue} />
      </View>
      <View style={styles.mockComponent}></View>
      <TouchableOpacity style={styles.bottomButton} onPress={handlePress} activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>Добавить</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0F1218',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topContainer: {
    alignItems: 'center',
    width: '100%',
  },
  topTextInput: {
    backgroundColor: '#1E2127',
    color: 'white',
    height: 44,
    minWidth: '90%',
    marginBottom: 14,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 14,
    paddingBottom: 14,
    borderColor: '#333842',
    marginTop: 33,
  },
  bottomButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginBottom: 33,
    borderRadius: 12,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  mockComponent: {
    height: '50%',
    width: '100%',
    marginBottom: 140,
  },
})

export default BottomSheetCountries
