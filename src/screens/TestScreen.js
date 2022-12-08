import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { NativeModules, Button } from 'react-native'

const { VPNManager } = NativeModules

const TestScreen = () => {
  const onPress = () => {
    // RNIpSecVpn.prepare()
    // RNIpSecVpn.connect()
    // VPNManager.connect('164.92.138.94', '123ZQvboM7aI+PO6dtHsCgXpnX4WxDK0Uz+ho6mY48fh0g=')
    VPNManager.connect()
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Button title="Click to invoke your native module!" color="#841584" onPress={onPress} />
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
