import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

function Status({ status, setFilters }) {
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
        <Text style={styles.text}>Статус</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.textInfo}>Показать все</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            backgroundColor: status.includes('active') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => handlePress('active')}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: status.includes('active') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            Активные
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: status.includes('inactive') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => handlePress('inactive')}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: status.includes('inactive') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            Неактивный
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: status.includes('expired') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => handlePress('expired')}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: status.includes('expired') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            Истекшие
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: status.includes('deleted') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => handlePress('deleted')}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: status.includes('deleted') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            Удаленные
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
})

export default Status
