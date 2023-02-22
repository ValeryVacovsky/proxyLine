import React from 'react'
import { View } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'

const handleComponent = () => <View />

function BottomSheetForm({ sheetRef, snapPoints, setIsOpen, children }) {
  return (
    <BottomSheet
      ref={sheetRef}
      backdropPressToClose={true}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={() => setIsOpen(true)}
      onCloseEnd={() => setIsOpen(true)}
      handleComponent={handleComponent}
      backdrop={true}>
      {children}
    </BottomSheet>
  )
}

export default BottomSheetForm
