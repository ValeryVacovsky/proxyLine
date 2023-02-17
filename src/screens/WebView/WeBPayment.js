import React from 'react'
import WebView from 'react-native-webview'
import { View } from 'react-native'

export default function WebPayment({ route }) {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <WebView source={{ uri: route.params.data }} onLoad={() => {}} />
    </View>
  )
}
