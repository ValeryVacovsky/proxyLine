import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'

const heightOffScreen = Dimensions.get('window').height

function BottomSheetList({ handleClosePress, navigation, proxyRes, text }) {
  const handlePress = item => {
    navigation.navigate(item)
    handleClosePress()
  }
  return (
    <View style={styles.container}>
      <View style={styles.topTab} />
      <View style={styles.centerContainer}>
        <TouchableOpacity style={styles.centerTopButton} activeOpacity={0.8} onPress={() => handlePress('Delete')}>
          <Text style={styles.centerMiddleButtonText}>{text?.buttons?.b6}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerBottomButton} onPress={() => handlePress('Extend')} activeOpacity={0.8}>
          <Text style={styles.centerBottomButtonText}>{text?.buttons?.b4}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.topButton}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Info', { proxyRes })
          handleClosePress()
        }}>
        <Text style={styles.topButtonText}>{text.buttons.b8}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButton} onPress={handleClosePress} activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>{text?.buttons?.b9}</Text>
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
  centerContainer: {
    width: '100%',
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
    borderRadius: 12,
    alignItems: 'center',
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
    marginTop: 33,
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
    marginBottom: 34,
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

export default BottomSheetList
