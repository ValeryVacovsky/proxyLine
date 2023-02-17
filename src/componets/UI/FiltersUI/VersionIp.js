import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

function VersionIp({ version, setFilters, ip_version }) {
  return (
    <View style={styles.Chips}>
      <Text style={styles.text}>Версии IP</Text>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity
          style={{
            backgroundColor: ip_version.includes('4') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.ip_version.includes('4')
                ? { ...prevState, ip_version: prevState.ip_version.filter(active => active !== '4') }
                : { ...prevState, ip_version: prevState.ip_version.concat('4') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: ip_version.includes('4') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            IPv4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: ip_version.includes('6') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.ip_version.includes('6')
                ? { ...prevState, ip_version: prevState.ip_version.filter(active => active !== '6') }
                : { ...prevState, ip_version: prevState.ip_version.concat('6') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: ip_version.includes('6') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            IPv6
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  Chips: {
    width: '90%',
    marginBottom: 20,
  },
})

export default VersionIp
