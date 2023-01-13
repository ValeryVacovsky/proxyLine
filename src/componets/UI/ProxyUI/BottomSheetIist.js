import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0F1218',
    borderRadius: 14,
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
  centerTopButton: {
    paddingTop: 18,
    paddingBottom: 18,
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
    paddingTop: 18,
    paddingBottom: 18,
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
    paddingTop: 18,
    paddingBottom: 18,
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
    paddingTop: 18,
    paddingBottom: 18,
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

function BottomSheetList({ handleClosePress, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topTab} />
      <View style={{ width: '100%', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.centerTopButton}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Change')
            handleClosePress()
          }}>
          <Text style={styles.centerTopButtonText}>Изменить тип</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centerMiddleButton}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Delete')
            handleClosePress()
          }}>
          <Text style={styles.centerMiddleButtonText}>Удалить</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centerBottomButton}
          onPress={() => {
            navigation.navigate('Extend')
            handleClosePress()
          }}
          activeOpacity={0.8}>
          <Text style={styles.centerBottomButtonText}>Продлить</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.topButton}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Info')
          handleClosePress()
        }}>
        <Text style={styles.topButtonText}>Подробнее</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButton} onPress={() => handleClosePress()} activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>Отменить</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomSheetList
