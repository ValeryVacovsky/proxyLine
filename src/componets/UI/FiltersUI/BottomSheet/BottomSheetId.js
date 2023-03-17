import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

function BottomSheetId({ handleClosePress, setIdDefault, handleSnapPress }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [value, setValue] = useState('')
  const handlePress = () => {
    handleClosePress()
    if (value.length > 0) {
      setIdDefault(prevState =>
        prevState.includes(value) ? prevState.filter(id => id !== value) : prevState.concat(String(value)),
      )
    }
  }
  const handleBlur = () => {
    handleSnapPress(0)
  }
  const handleFocus = () => {
    handleSnapPress(1)
  }
  return (
    <ScrollView
      scrollEnabled={false}
      keyboardShouldPersistTaps="always"
      style={{
        height: '100%',
        backgroundColor: '#0F1218',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        display: 'flex',
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, height: '100%' }}
        keyboardVerticalOffset={50}>
        <View style={styles.container}>
          <View style={styles.topBar} />
          <View style={styles.topContainer}>
            <TextInput
              type="number"
              keyboardType="numeric"
              returnKeyType="done"
              style={styles.topInput}
              value={value}
              onChangeText={setValue}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </View>
          <TouchableOpacity style={styles.bottomButton} onPress={handlePress} activeOpacity={0.8}>
            <Text style={styles.bottomButtonText}>{text.buttons?.b1}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 60,
    height: 3,
    borderRadius: 40,
    marginTop: 10,
  },
  container: {
    backgroundColor: '#0F1218',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    alignItems: 'center',
    width: '100%',
  },
  topInput: {
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
    marginTop: 45,
  },
  bottomButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginBottom: 120,
    borderRadius: 12,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
})

export default BottomSheetId
