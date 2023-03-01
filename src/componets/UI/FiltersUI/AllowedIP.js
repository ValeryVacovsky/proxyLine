import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import BottomSheetIps from './BottomSheet/BottomSheetIps'

function AllowedIP({ allowedIP, setFilters, setChildrenItem, handleClosePress, handleSnapPress }) {
  //позже добавлю хандлер
  const [ips, setIps] = useState(['192.168.0.1', '192.168.0.2', '192.168.0.3'])
  const handlePress = item => {
    setFilters(prevState =>
      prevState.allowedIP.includes(item)
        ? {
            ...prevState,
            allowedIP: prevState.allowedIP.filter(active => active !== item),
          }
        : { ...prevState, allowedIP: prevState.allowedIP.concat(item) },
    )
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(
      <BottomSheetIps
        handleClosePress={handleClosePress}
        setIps={setIps}
        setFilters={setFilters}
        allowedIP={allowedIP}
      />,
    )
    handleSnapPress(1)
  }
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>Разрешенные IP</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleOpenBottomSheet}>
          <View style={styles.topContainer}>
            <Text style={styles.textInfo}>Выбрать</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {ips.map(item => (
          <TouchableOpacity
            key={item}
            style={{
              backgroundColor: allowedIP.includes(item) ? '#FAC637' : '#333842',
              alignItems: 'center',
              borderRadius: 30,
              marginTop: 10,
              marginRight: 10,
            }}
            activeOpacity={0.8}
            onPress={() => handlePress(item)}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 13,
                color: allowedIP.includes(item) ? '#0F1218' : 'white',
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
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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

export default AllowedIP
