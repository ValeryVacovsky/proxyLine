import React from 'react'
import { useSelector } from 'react-redux'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

function VersionIp({ setFilters, ipVersion }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)

  const handlePress = item => {
    setFilters(prevState =>
      prevState.ip_version.includes(item)
        ? { ...prevState, ip_version: prevState.ip_version.filter(active => active !== item) }
        : { ...prevState, ip_version: [item] },
    )
  }

  return (
    <View style={styles.Chips}>
      <Text style={styles.text}>{text?.texts?.t38}</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={StyleSheet.flatten([
            styles.ipVersionContainer,
            {
              backgroundColor: ipVersion.includes('4') ? '#FAC637' : '#333842',
            },
          ])}
          activeOpacity={0.8}
          onPress={() => handlePress('4')}>
          <Text
            style={StyleSheet.flatten([
              styles.ipVersionText,
              {
                color: ipVersion.includes('4') ? '#0F1218' : 'white',
              },
            ])}>
            IPv4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={StyleSheet.flatten([
            styles.ipVersionContainer,
            {
              backgroundColor: ipVersion.includes('6') ? '#FAC637' : '#333842',
            },
          ])}
          activeOpacity={0.8}
          onPress={() => handlePress('6')}>
          <Text
            style={StyleSheet.flatten([
              styles.ipVersionText,
              {
                color: ipVersion.includes('6') ? '#0F1218' : 'white',
              },
            ])}>
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
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Chips: {
    width: '90%',
    marginBottom: 20,
  },
  ipVersionContainer: {
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
    marginRight: 10,
  },
  ipVersionText: {
    fontWeight: '600',
    fontSize: 13,
    paddingBottom: 6,
    paddingTop: 6,
    paddingRight: 12,
    paddingLeft: 12,
  },
})

export default VersionIp
