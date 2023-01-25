import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

function Autodetect({ autodetect, setFilters }) {
  return (
    <View style={styles.Chips}>
      <Text style={styles.text}>Автопределение</Text>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity
          style={{
            backgroundColor: autodetect.includes('status5') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.autodetect.includes('status5')
                ? { ...prevState, autodetect: prevState.autodetect.filter(active => active !== 'status5') }
                : { ...prevState, autodetect: prevState.autodetect.concat('status5') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: autodetect.includes('status5') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: autodetect.includes('status10') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.autodetect.includes('status10')
                ? { ...prevState, autodetect: prevState.autodetect.filter(active => active !== 'status10') }
                : { ...prevState, autodetect: prevState.autodetect.concat('status10') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: autodetect.includes('status10') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            10
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: autodetect.includes('status20') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.autodetect.includes('status20')
                ? { ...prevState, autodetect: prevState.autodetect.filter(active => active !== 'status20') }
                : { ...prevState, autodetect: prevState.autodetect.concat('status20') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: autodetect.includes('status20') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            20
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: autodetect.includes('status30') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters(prevState =>
              prevState.autodetect.includes('status30')
                ? { ...prevState, autodetect: prevState.autodetect.filter(active => active !== 'status30') }
                : { ...prevState, autodetect: prevState.autodetect.concat('status30') },
            )
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: autodetect.includes('status30') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            30
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
