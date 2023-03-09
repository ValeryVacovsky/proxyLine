import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useSelector } from 'react-redux'

function BottomSheetOrders({ handleClosePress, setOrdersDefault }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [value, setValue] = useState('')
  const handlePress = () => {
    handleClosePress()
    value.length > 0 &&
      setOrdersDefault(prevState =>
        prevState.includes(value) ? prevState.filter(id => id !== value) : prevState.concat(String(value)),
      )
  }
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextInput style={styles.topInput} value={value} onChangeText={setValue} />
      </View>
      <TouchableOpacity style={styles.bottomButton} onPress={handlePress} activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>{text?.buttons?.b1}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
    marginTop: 50,
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

export default BottomSheetOrders
