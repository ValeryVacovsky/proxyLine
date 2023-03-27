import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useSelector } from 'react-redux'

function BottomSheetCountries({ handleClosePress, setIsOpen }) {
  const [value, setValue] = useState('')
  const text = useSelector(res => res.textReducer.proxy_info.payload)

  const handlePress = () => {
    handleClosePress()
    setIsOpen(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar} />
      <View style={styles.topContainer}>
        <TextInput textContentType="date" style={styles.topTextInput} value={value} onChangeText={setValue} />
      </View>
      <View style={styles.mockComponent}></View>
      <TouchableOpacity style={styles.bottomButton} onPress={handlePress} activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>{text?.buttons?.b1}</Text>
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
  topBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 60,
    height: 3,
    borderRadius: 40,
    marginTop: 10,
  },
})

export default BottomSheetCountries
