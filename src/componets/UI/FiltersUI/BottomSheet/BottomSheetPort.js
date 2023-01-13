import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    backgroundColor: '#0F1218',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    alignItems: 'center',
    width: '100%',
  },
  bottomButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginBottom: 100,
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

function BottomSheetPort({ handleClosePress, setIsOpen, setPorts }) {
  const [value, setValue] = useState('')
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          width: '100%',
        }}>
        <TextInput
          style={{
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
            marginTop: 50,
          }}
          value={value}
          onChangeText={setValue}
        />
      </View>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => {
          handleClosePress()
          setIsOpen(false)
          {
            value.length > 0 &&
              setPorts(prevState =>
                prevState.includes(value) ? prevState.filter(id => id !== value) : prevState.concat(String(value)),
              )
          }
        }}
        activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>Добавить</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomSheetPort
