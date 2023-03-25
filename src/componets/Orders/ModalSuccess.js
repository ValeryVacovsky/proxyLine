import React from 'react'
import { Modal, TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const ModalSuccess = ({ visible, onClose, text }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <TouchableOpacity style={styles.modalBackground} onPress={onClose}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTextTop}>{text?.texts?.t11 || 'Прокси куплен!'}</Text>
          <Text style={{ textAlign: 'center', fontWeight: '400', fontSize: 11, lineHeight: 15, color: 'white' }}>
            {text?.texts?.t12 || 'Что бы использовать прокси выберите его из списка своих прокси'}
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#1E2127',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '80%',
  },
  modalTextTop: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 15,
    marginBottom: 6,
    color: 'white',
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
})
export default ModalSuccess
