import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetItem from './UI/ProxyUI/BottomSheetItem';

const handleComponent = () => (
  <View />
);

function BottomSheetForm({
  navigation, sheetRef, snapPoints, setIsOpen, handleClosePress, children,
}) {
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={() => setIsOpen(true)}
      handleComponent={handleComponent}
    >
      {children}
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: 'black',
  },
  itemContainer: {
    backgroundColor: '#eee',
  },
});

export default BottomSheetForm;
