import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';

// eslint-disable-next-line no-unused-vars

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0F1218',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topTab: {
    position: 'absolute',
    width: 60,
    height: 3,
    backgroundColor: 'rgba(255,255,255, 0.1)',
    marginTop: 10,
    borderRadius: 100,
  },
  topButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginTop: 33,
    borderRadius: 12,
    alignItems: 'center',
  },
  topButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  centerTopButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginBottom: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: 'center',
  },
  centerTopButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  centerMiddleButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginBottom: 1,
    alignItems: 'center',
  },
  centerMiddleButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  centerBottomButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: '#1E2127',
    width: '90%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: 'center',
  },
  centerBottomButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  bottomButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginBottom: 110,
    borderRadius: 12,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
});

function BottomSheetItem({ handleClosePress, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topTab} />
      <TouchableOpacity
        style={styles.topButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Notes')}
      >
        <Text style={styles.topButtonText}>
          Заметки
        </Text>
      </TouchableOpacity>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.centerTopButton}
          activeOpacity={0.8}
        >
          <Text style={styles.centerTopButtonText}>
            Изменить тип
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centerMiddleButton}
          activeOpacity={0.8}
        >
          <Text style={styles.centerMiddleButtonText}>
            Удалить прокси
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centerBottomButton}
          activeOpacity={0.8}
        >
          <Text style={styles.centerBottomButtonText}>
            Продлить прокси
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => handleClosePress()}
        activeOpacity={0.8}
      >
        <Text style={styles.bottomButtonText}>
          Отменить
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomSheetItem;
