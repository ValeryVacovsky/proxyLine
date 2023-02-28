import React, { useCallback } from 'react'
import { View } from 'react-native'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'

const handleComponent = () => <View />

function BottomSheetForm({ sheetRef, snapPoints, children, handleSheetChange, handleClosePress }) {
  const renderBackdrop = useCallback(
    props => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} onPress={handleClosePress} />,
    [handleClosePress],
  )

  return (
    <BottomSheet
      ref={sheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      handleComponent={handleComponent}
      backdropComponent={renderBackdrop}
      onChange={handleSheetChange}>
      {children}
    </BottomSheet>
  )
}

export default BottomSheetForm
