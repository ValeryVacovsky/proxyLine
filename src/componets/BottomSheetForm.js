import React from 'react'
import { View } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'

const handleComponent = () => <View />

function BottomSheetForm({ sheetRef, snapPoints, setIsOpen, children, handleSheetChange }) {
  const handelClose = () => {
    setIsOpen(false)
  }
  return (
    <BottomSheet
      ref={sheetRef}
      backdropPressToClose={true}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={handelClose}
      onCloseEnd={handelClose}
      handleComponent={handleComponent}
      onChange={handleSheetChange}
      enabledGestureInteraction={true}
      enabledContentGestureInteraction={false}
      backdrop={true}>
      {children}
    </BottomSheet>
  )
}

export default BottomSheetForm
