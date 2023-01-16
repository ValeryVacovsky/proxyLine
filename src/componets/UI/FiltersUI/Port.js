import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

import BottomSheetPort from './BottomSheet/BottomSheetPort'

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
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

function Port({ port, setFilters, setChildrenItem, handleClosePress, handleSnapPress, setIsOpen }) {
  const [prots, setPorts] = useState(['58654', '23234', '67956'])
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>Порт</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setChildrenItem(
              <BottomSheetPort handleClosePress={handleClosePress} setIsOpen={setIsOpen} setPorts={setPorts} />,
            )
            handleSnapPress(0)
            setIsOpen(true)
          }}>
          <Text style={styles.textInfo}>Выбрать</Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {prots.map(item => (
          <TouchableOpacity
            key={item}
            style={{
              backgroundColor: port.includes(item) ? '#FAC637' : '#333842',
              alignItems: 'center',
              borderRadius: 30,
              marginTop: 10,
              marginRight: 10,
            }}
            activeOpacity={0.8}
            onPress={() => {
              setFilters(prevState =>
                prevState.port.includes(item)
                  ? { ...prevState, port: prevState.port.filter(active => active !== item) }
                  : { ...prevState, port: prevState.port.concat(item) },
              )
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 13,
                color: port.includes(item) ? '#0F1218' : 'white',
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

export default Port