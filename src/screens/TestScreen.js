import React, { useEffect } from 'react'
import { Platform, View, Text } from 'react-native'
import RNSimpleOpenvpn, { addVpnStateListener, removeVpnStateListener } from 'react-native-simple-openvpn'

const isIPhone = Platform.OS === 'ios'

const TestScreen = () => {
  useEffect(() => {
    async function observeVpn() {
      if (isIPhone) {
        await RNSimpleOpenvpn.observeState()
      }

      addVpnStateListener((e) => {
        // ...
      })
    }

    observeVpn()

    return async () => {
      if (isIPhone) {
        await RNSimpleOpenvpn.stopObserveState()
      }

      removeVpnStateListener()
    };
  });

  async function startOvpn() {
    try {
      await RNSimpleOpenvpn.connect({
        remoteAddress: '192.168.1.1 3000',
        ovpnFileName: 'client',
        assetsPath: 'ovpn/',
        providerBundleIdentifier: 'com.example.RNSimpleOvpnTest.NEOpenVPN',
        localizedDescription: 'RNSimpleOvpn',
      });
      console.log(123)
    } catch (error) {
      // ...
    }

  }

  async function stopOvpn() {
    try {
      await RNSimpleOpenvpn.disconnect()
    } catch (error) {
      // ...
    }
  }

  function printVpnState() {
    console.log(JSON.stringify(RNSimpleOpenvpn.VpnState, undefined, 2))
  }

  return (
    <View>
      <Text style={{  color: "red"}} onPress={startOvpn}>Sasdas</Text>
    </View>
  )
}

export default TestScreen
