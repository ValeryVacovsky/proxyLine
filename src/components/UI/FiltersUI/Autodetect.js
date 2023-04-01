import React from 'react'
import { useSelector } from 'react-redux'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

function Autodetect({ autoRenewal, setFilters }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)

  const handlePress = item => {
    setFilters(prevState =>
      prevState.auto_renewal.includes(item)
        ? { ...prevState, auto_renewal: prevState.auto_renewal.filter(active => active !== item) }
        : { ...prevState, auto_renewal: [item] },
    )
  }

  return (
    <View style={styles.Chips}>
      <Text style={styles.text}>{text?.texts?.t17}</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={StyleSheet.flatten([
            styles.autoDetectContainer,
            {
              backgroundColor: autoRenewal.includes('false') ? '#FAC637' : '#333842',
            },
          ])}
          activeOpacity={0.8}
          onPress={() => {
            handlePress('false')
          }}>
          <Text
            style={StyleSheet.flatten([
              styles.autoDetectText,
              {
                color: autoRenewal.includes('false') ? '#0F1218' : 'white',
              },
            ])}>
            {text?.texts?.t18}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={StyleSheet.flatten([
            styles.autoDetectContainer,
            {
              backgroundColor: autoRenewal.includes('true') ? '#FAC637' : '#333842',
            },
          ])}
          activeOpacity={0.8}
          onPress={() => handlePress('true')}>
          <Text
            style={StyleSheet.flatten([
              styles.autoDetectText,
              {
                color: autoRenewal.includes('true') ? '#0F1218' : 'white',
              },
            ])}>
            {text?.texts?.t19}
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
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  autoDetectContainer: {
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
    marginRight: 10,
  },
  autoDetectText: {
    fontWeight: '600',
    fontSize: 13,
    paddingBottom: 6,
    paddingTop: 6,
    paddingRight: 12,
    paddingLeft: 12,
  },
})

export default Autodetect