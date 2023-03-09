import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'

function Types({ ipType, setFilters }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const handlePress = item => {
    setFilters(prevState =>
      prevState.ip_type.includes(item)
        ? { ...prevState, ip_type: prevState.ip_type.filter(active => active !== item) }
        : { ...prevState, ip_type: prevState.ip_type.concat(item) },
    )
  }
  return (
    <View style={styles.Chips}>
      <Text style={styles.text}>{text?.texts?.t8}</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            backgroundColor: ipType.includes('1') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => handlePress('1')}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: ipType.includes('1') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            {text?.texts?.t36}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: ipType.includes('2') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => handlePress('2')}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: ipType.includes('2') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            {text?.texts?.t37}
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
})

export default Types
