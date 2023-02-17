import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

function Types({ ip_type, setFilters }) {
  return (
    <View style={styles.Chips}>
      <Text style={styles.text}>Тип</Text>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity
          style={{
            backgroundColor: ip_type.includes('1') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.ip_type.includes('1')
                ? { ...prevState, ip_type: prevState.ip_type.filter(active => active !== '1') }
                : { ...prevState, ip_type: prevState.ip_type.concat('1') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: ip_type.includes('1') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            Индивидуальные
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: ip_type.includes('2') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.ip_type.includes('2')
                ? { ...prevState, ip_type: prevState.ip_type.filter(active => active !== '2') }
                : { ...prevState, ip_type: prevState.ip_type.concat('2') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: ip_type.includes('2') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            Общие
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

export default Types
