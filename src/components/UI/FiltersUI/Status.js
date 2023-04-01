import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'

function Status({ status, setFilters }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)

  const handlePress = item => {
    setFilters(prevState =>
      prevState.status.includes(item)
        ? { ...prevState, status: prevState.status.filter(active => active !== item) }
        : { ...prevState, status: prevState.status.concat(item) },
    )
  }

  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>{text?.texts?.t31}</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.textInfo}></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={StyleSheet.flatten([
            styles.statusContainer,
            {
              backgroundColor: status.includes('active') ? '#FAC637' : '#333842',
            },
          ])}
          activeOpacity={0.8}
          onPress={() => handlePress('active')}>
          <Text
            style={StyleSheet.flatten([
              styles.statusText,
              {
                color: status.includes('active') ? '#0F1218' : 'white',
              },
            ])}>
            {text?.texts?.t32}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={StyleSheet.flatten([
            styles.statusContainer,
            {
              backgroundColor: status.includes('expired') ? '#FAC637' : '#333842',
            },
          ])}
          activeOpacity={0.8}
          onPress={() => handlePress('expired')}>
          <Text
            style={StyleSheet.flatten([
              styles.statusText,
              {
                color: status.includes('expired') ? '#0F1218' : 'white',
              },
            ])}>
            {text?.texts?.t34}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={StyleSheet.flatten([
            styles.statusContainer,
            {
              backgroundColor: status.includes('deleted') ? '#FAC637' : '#333842',
            },
          ])}
          activeOpacity={0.8}
          onPress={() => handlePress('deleted')}>
          <Text
            style={StyleSheet.flatten([
              styles.statusText,
              {
                color: status.includes('deleted') ? '#0F1218' : 'white',
              },
            ])}>
            {text?.texts?.t35}
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
  textInfo: {
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
  },
  topMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Chips: {
    width: '100%',
    marginBottom: 20,
  },
  statusContainer: {
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
    marginRight: 10,
  },
  statusText: {
    fontWeight: '600',
    fontSize: 13,
    paddingBottom: 6,
    paddingTop: 6,
    paddingRight: 12,
    paddingLeft: 12,
  },
})

export default Status