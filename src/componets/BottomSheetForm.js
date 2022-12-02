import React from 'react'
import { View } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'

const handleComponent = () => <View />

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 200,
//   },
//   contentContainer: {
//     backgroundColor: 'black',
//   },
//   itemContainer: {
//     backgroundColor: '#eee',
//   },
// });

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
