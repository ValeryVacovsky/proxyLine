import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'

let heightOffScreen = Dimensions.get('window').height

function BottomSheetCopy({ handleClosePress, children }) {
  return (
    <View style={styles.container}>
      <View style={styles.topTab} />
      <TouchableOpacity style={styles.topButton} activeOpacity={0.8} onPress={() => handleClosePress()}>
        <Text style={styles.topButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0F1218',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topTab: {
    position: 'absolute',
    width: 60,
    height: 3,
    backgroundColor: 'rgba(255,255,255, 0.1)',
    marginTop: 10,
    borderRadius: 100,
  },
  topButton: {
    paddingTop: heightOffScreen > 800 ? 20 : 18,
    paddingBottom: heightOffScreen > 800 ? 20 : 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginTop: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  topButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  centerTopButton: {
    paddingTop: heightOffScreen > 800 ? 20 : 18,
    paddingBottom: heightOffScreen > 800 ? 20 : 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginBottom: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: 'center',
  },
  centerTopButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  centerMiddleButton: {
    paddingTop: heightOffScreen > 800 ? 20 : 18,
    paddingBottom: heightOffScreen > 800 ? 20 : 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginBottom: 1,
    alignItems: 'center',
  },
  centerMiddleButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  centerBottomButton: {
    paddingTop: heightOffScreen > 800 ? 20 : 18,
    paddingBottom: heightOffScreen > 800 ? 20 : 18,
    backgroundColor: '#1E2127',
    width: '90%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: 'center',
  },
  centerBottomButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  bottomButton: {
    paddingTop: heightOffScreen > 800 ? 20 : 18,
    paddingBottom: heightOffScreen > 800 ? 20 : 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginBottom: 90,
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
export default BottomSheetCopy
