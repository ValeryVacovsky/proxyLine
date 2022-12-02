import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0F1218',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 100,
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
  topTab: {
    position: 'absolute',
    width: 60,
    height: 3,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    marginTop: 10,
    borderRadius: 100,
  },
})

function BottomSheetSelectForm({ handleClosePress, setSelectedProxies, move, selected }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.topButton} activeOpacity={0.8} onPress={() => {}}>
        <Text style={styles.topButtonText}>
          {move} выбранные ({selected})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => {
          handleClosePress()
          setSelectedProxies([])
        }}
        activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>Отменить</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomSheetSelectForm
