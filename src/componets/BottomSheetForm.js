import React, { useCallback } from 'react'
import { View } from 'react-native'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'

const handleComponent = () => <View />

function BottomSheetForm({ sheetRef, snapPoints, children, handleClosePress, bottomInset = 0 }) {
  const renderBackdrop = useCallback(
    props => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} onPress={handleClosePress} />,
    [handleClosePress],
  )

  return (
    <BottomSheet
      shouldMeasureContentHeight={true}
      enablePanDownToClose={true}
      bottomInset={bottomInset}
      ref={sheetRef}
      index={-1}
      snapPoints={snapPoints}
      enabledGestureInteraction={false}
      handleComponent={handleComponent}
      backdropComponent={renderBackdrop}>
      {children}
    </BottomSheet>
  )
}

export default BottomSheetForm
