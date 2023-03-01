import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import BottomSheetIP from './BottomSheet/BottomSheetIP'

function IPAddress({ ip, setFilters, setChildrenItem, handleClosePress, handleSnapPress }) {
  const [Ipaddress, setIpaddress] = useState(['209.139.71.222', '192.168.0.3', '192.168.0.4'])
  const handlePress = item => {
    setFilters(prevState =>
      prevState.ip.includes(item)
        ? { ...prevState, ip: prevState.ip.filter(active => active !== item) }
        : { ...prevState, ip: prevState.ip.concat(item) },
    )
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(<BottomSheetIP handleClosePress={handleClosePress} setIpaddress={setIpaddress} />)
    handleSnapPress(0)
  }
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text
          style={styles.text}
          onPress={() => {
            setIpaddress(prev => prev.concat('2342342'))
          }}>
          IP
        </Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleOpenBottomSheet}>
          <Text style={styles.textInfo}>Выбрать</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {Ipaddress.map(item => (
          <TouchableOpacity
            key={item}
            style={{
              backgroundColor: ip.includes(item) ? '#FAC637' : '#333842',
              alignItems: 'center',
              borderRadius: 30,
              marginTop: 10,
              marginRight: 10,
            }}
            activeOpacity={0.8}
            onPress={() => {
              handlePress(item)
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 13,
                color: ip.includes(item) ? '#0F1218' : 'white',
                paddingBottom: 6,
                paddingTop: 6,
                paddingRight: 12,
                paddingLeft: 12,
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
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

export default IPAddress
