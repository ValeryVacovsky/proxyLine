import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function BottomSheetSelectForm({ handleClosePress, setSelectedProxies, move, selected, text }) {
  const handlePress = () => {
    handleClosePress()
    setSelectedProxies([])
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.topButton} activeOpacity={0.8}>
        <Text style={styles.topButtonText}>
          {move} {text} ({selected})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButton} onPress={handlePress} activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>{text?.buttons?.b9}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0F1218',
    borderRadius: 14,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 1,
  },
  topButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: '#1E2127',
    width: '90%',
    borderRadius: 12,
    alignItems: 'center',
  },
  topButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  bottomButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginBottom: 80,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  bottomButtonText: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
})

export default BottomSheetSelectForm
