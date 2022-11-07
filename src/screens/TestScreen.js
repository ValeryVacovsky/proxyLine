import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import ProxyTariff from '../componets/ProxyTariff'
import { NativeModules, Button } from 'react-native'

const { RNIpSecVpn } = NativeModules

const TestScreen = () => {
  const onPress = () => {
    RNIpSecVpn.prepare()
    RNIpSecVpn.connect('us1.vpnbook.com', 'vpnbook', '88wxtet', 'IPsec', 0)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Button title="Click to invoke your native module!" color="#841584" onPress={onPress} />
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
