import React from 'react'
import WebView from 'react-native-webview'
import { View } from 'react-native'

export default function WebPayment({ route }) {
  console.log('url', route.params.data)
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <WebView source={{ uri: route.params.data }} onLoad={console.log('load')} />
    </View>
  )
}
