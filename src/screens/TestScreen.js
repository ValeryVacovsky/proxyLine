import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import ProxyTariff from '../componets/ProxyTariff'

const TestScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ProxyTariff />
        <ProxyTariff />
        <ProxyTariff />
        <ProxyTariff />
        <ProxyTariff />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
})

export default TestScreen
