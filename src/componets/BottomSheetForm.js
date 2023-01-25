import React from 'react'
import { View } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'

const handleComponent = () => <View />

function BottomSheetForm({ sheetRef, snapPoints, setIsOpen, children }) {
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={() => setIsOpen(true)}
      handleComponent={handleComponent}>
      {children}
    </BottomSheet>
  )
}

export default BottomSheetForm
