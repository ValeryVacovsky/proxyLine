import React from 'react';
import {
  ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Text,
} from 'react-native';
import SuperEllipseMaskView from 'react-native-super-ellipse-mask';
import CountrySlot from '../componets/CountrySlot';
import LayoutMain from '../componets/LayoutMain';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 42,
  },
  button: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
  },
  buttonInner: {
    backgroundColor: '#FAC637',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '90%',
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 13,
  },
});

function Countreis({ navigation }) {
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <CountrySlot />
          <CountrySlot />
          <CountrySlot />
          <CountrySlot />
          <CountrySlot />
          <CountrySlot />
          <CountrySlot />
          <CountrySlot />
          <CountrySlot />
          <CountrySlot />
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('Order')} style={styles.button} activeOpacity={0.8}>
        <SuperEllipseMaskView
          radius={{
            topLeft: 12,
            topRight: 12,
            bottomRight: 12,
            bottomLeft: 12,
          }}
          style={styles.buttonInner}
        >
          <Text style={styles.buttonText}>Подтвердить</Text>
        </SuperEllipseMaskView>
      </TouchableOpacity>
    </LayoutMain>
  );
}

export default Countreis;
