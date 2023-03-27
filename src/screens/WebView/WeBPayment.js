import React from 'react'
import WebView from 'react-native-webview'
import { View, StyleSheet } from 'react-native'

export default function WebPayment({ route }) {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: route.params.data }} onLoad={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { width: '100%', height: '100%' },
})
