import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

function Autodetect({ auto_renewal, setFilters }) {
  return (
    <View style={styles.Chips}>
      <Text style={styles.text}>Автопределение</Text>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity
          style={{
            backgroundColor: auto_renewal.includes('true') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.auto_renewal.includes('true')
                ? { ...prevState, auto_renewal: prevState.auto_renewal.filter(active => active !== 'true') }
                : { ...prevState, auto_renewal: prevState.auto_renewal.concat('true') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: auto_renewal.includes('true') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            Нет
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: auto_renewal.includes('false') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.auto_renewal.includes('false')
                ? { ...prevState, auto_renewal: prevState.auto_renewal.filter(active => active !== 'false') }
                : { ...prevState, auto_renewal: prevState.auto_renewal.concat('false') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: auto_renewal.includes('false') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            Да
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

export default Autodetect
