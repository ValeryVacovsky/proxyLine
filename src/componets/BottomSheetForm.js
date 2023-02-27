import React from 'react'
import { View } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'

const handleComponent = () => <View />

function BottomSheetForm({ sheetRef, snapPoints, setIsOpen, children, handleSheetChange }) {
  return (
    <BottomSheet
      ref={sheetRef}
      backdropPressToClose={true}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={() => setIsOpen(false)}
      onCloseEnd={() => setIsOpen(false)}
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
