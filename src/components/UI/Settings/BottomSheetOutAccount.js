import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function BottomSheetOutAccount({ text, handleRightNavigate, handleClosePress }) {
  return (
    <View style={styles.container} activeOpacity={0.8}>
      <View style={styles.topContainer}>
        <View style={styles.topTink} />
        <Text style={styles.topInfoText}>{text?.texts?.t29 || 'Хотите выйти?'}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.buttonYesContainer} activeOpacity={0.8} onPress={handleRightNavigate}>
          <Text style={styles.buttonYesText}>{text?.buttons?.b4 || 'Да'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNoContainer} activeOpacity={0.8} onPress={handleClosePress}>
          <Text style={styles.buttonNoText}>{text?.buttons?.b5 || 'Нет'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#0F1218',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topContainer: {
    alignItems: 'center',
  },
  topTink: {
    width: 60,
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: 10,
  },
  topInfoText: {
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 15,
    color: 'white',
    marginTop: 20,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 100,
    width: '100%',
    marginLeft: 10,
    marginTop: 20,
  },
  buttonYesContainer: {
    backgroundColor: '#1E2127',
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 12,
  },
  buttonYesText: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
    paddingTop: 18,
    paddingBottom: 18,
    width: '100%',
    textAlign: 'center',
  },
  buttonNoContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#FAC637',
    marginTop: 14,
    borderRadius: 12,
    marginBottom: 34,
    width: '90%',
  },
  buttonNoText: {
    color: '#0F1218',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
  },
})

export default BottomSheetOutAccount
