import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native'
import { Button } from 'react-native'
import { VPN, VPNStatuses } from '../services/VPNManager'

const TestScreen = () => {
  const onPress = async () => {
    // RNIpSecVpn.prepare()
    // RNIpSecVpn.connect()
    // VPNManager.connect('164.92.138.94', '123ZQvboM7aI+PO6dtHsCgXpnX4WxDK0Uz+ho6mY48fh0g=')
    try {
      const result = await VPN.connect('164.92.138.94', '123ZQvboM7aI+PO6dtHsCgXpnX4WxDK0Uz+ho6mY48fh0g=')
      Alert.alert('Connected', result)
    } catch (e) {
      Alert.alert('Connection error', e.message)
    }
    // VPNManager.connect()
  }

  const handleClose = async () => {
    const status = await VPN.getStatus()
    if (status === VPNStatuses.connected) {
      VPN.disconnect()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Button title="Click to invoke your native module!" color="#841584" onPress={onPress} />
        <Button title="Disconnect VPN" color="#841584" onPress={handleClose} />
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
