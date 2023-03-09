import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import BottomSheetId from './BottomSheet/BottomSheetId'
import { useSelector } from 'react-redux'

function IdProxy({ id, setFilters, setChildrenItem, handleClosePress, handleSnapPress }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [idDefault, setIdDefault] = useState(['58654', '23234', '67956'])
  const handlePress = item => {
    setFilters(prevState =>
      prevState.id.includes(item)
        ? { ...prevState, id: prevState.id.filter(active => active !== item) }
        : { ...prevState, id: prevState.id.concat(item) },
    )
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(<BottomSheetId handleClosePress={handleClosePress} setIdDefault={setIdDefault} />)
    handleSnapPress(0)
  }
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>{text?.texts?.t27}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleOpenBottomSheet}>
          <Text style={styles.textInfo}>{text?.buttons?.b3}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {idDefault.map(item => (
          <TouchableOpacity
            key={item}
            style={{
              backgroundColor: id.includes(item) ? '#FAC637' : '#333842',
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
                color: id.includes(item) ? '#0F1218' : 'white',
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

export default IdProxy
