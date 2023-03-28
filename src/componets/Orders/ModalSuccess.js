import React from 'react'
import { Modal, TouchableOpacity, StyleSheet } from 'react-native'

const ModalSuccess = ({ visible, onClose, children }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <TouchableOpacity style={styles.modalBackground} onPress={onClose}>
        {children}
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
})
export default ModalSuccess
