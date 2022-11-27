import React, {
  useCallback, useRef, useMemo, useState,
} from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';

const handleComponent = () => (
  <View />
);

function TestScreen() {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = useMemo(() => ['40%'], []);

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(false);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSnapPress(0)}>
        <Text>Get</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        onClose={() => setIsOpen(true)}
        handleComponent={handleComponent}
      >
        <View style={{
          height: '100%',
          backgroundColor: '#0F1218',
          borderRadius: 20,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >
          <View style={{
            position: 'absolute',
            width: 60,
            height: 3,
            backgroundColor: 'rgba(255,255,255, 0.1)',
            marginTop: 10,
            borderRadius: 100,
          }}
          />
          <TouchableOpacity
            style={{
              paddingTop: 18,
              paddingBottom: 18,
              backgroundColor: '#1E2127',
              width: '90%',
              marginTop: 33,
              borderRadius: 12,
              alignItems: 'center',
            }}
            activeOpacity={0.8}
          >
            <Text style={{
              color: 'white', fontWeight: '600', fontSize: 12, lineHeight: 15,
            }}
            >
              Заметки
            </Text>
          </TouchableOpacity>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                paddingTop: 18,
                paddingBottom: 18,
                backgroundColor: '#1E2127',
                width: '90%',
                marginBottom: 1,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                alignItems: 'center',
              }}
              activeOpacity={0.8}
            >
              <Text style={{
                color: 'white', fontWeight: '600', fontSize: 12, lineHeight: 15,
              }}
              >
                Изменить тип
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingTop: 18,
                paddingBottom: 18,
                backgroundColor: '#1E2127',
                width: '90%',
                marginBottom: 1,
                alignItems: 'center',
              }}
              activeOpacity={0.8}
            >
              <Text style={{
                color: 'white', fontWeight: '600', fontSize: 12, lineHeight: 15,
              }}
              >
                Удалить прокси
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingTop: 18,
                paddingBottom: 18,
                backgroundColor: '#1E2127',
                width: '90%',
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                alignItems: 'center',
              }}
              activeOpacity={0.8}
            >
              <Text style={{
                color: 'white', fontWeight: '600', fontSize: 12, lineHeight: 15,
              }}
              >
                Продлить прокси
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              paddingTop: 18,
              paddingBottom: 18,
              backgroundColor: '#1E2127',
              width: '90%',
              marginBottom: 33,
              borderRadius: 12,
              alignItems: 'center',
            }}
            onPress={() => handleClosePress()}
            activeOpacity={0.8}
          >
            <Text style={{
              color: '#FAC637', fontWeight: '600', fontSize: 12, lineHeight: 15,
            }}
            >
              Отменить
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
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

export default TestScreen;
