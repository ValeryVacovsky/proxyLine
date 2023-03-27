import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'
import getListProxies from '../../../api/getListProxies'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BottomSheetPort from './BottomSheet/BottomSheetPort'

function Port({ port, setFilters, setChildrenItem, handleClosePress, handleSnapPress }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [prots, setPorts] = useState([])
  const handlePress = item => {
    setFilters(prevState =>
      prevState.port.includes(item)
        ? { ...prevState, port: prevState.port.filter(active => active !== item) }
        : { ...prevState, port: prevState.port.concat(item) },
    )
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(
      <BottomSheetPort handleClosePress={handleClosePress} setPorts={setPorts} handleSnapPress={handleSnapPress} />,
    )
    handleSnapPress(0)
  }
  useEffect(() => {
    const listProxies = async () => {
      const outData = []
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getListProxies({ token: dataProps, limit: '5', offset: '0', endpoint: 'status=active' })
      data.data.map(item => outData.push(item.port_http))
      setPorts(outData)
    }
    listProxies()
  }, [])
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>{text?.texts?.t5}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleOpenBottomSheet}>
          <Text style={styles.textInfo}>{text?.buttons?.b3}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {prots.map(item => (
          <TouchableOpacity
            key={item}
            style={StyleSheet.flatten([
              styles.portContainer,
              {
                backgroundColor: port.includes(item) ? '#FAC637' : '#333842',
              },
            ])}
            activeOpacity={0.8}
            onPress={() => handlePress(item)}>
            <Text
              style={StyleSheet.flatten([
                styles.portText,
                {
                  color: port.includes(item) ? '#0F1218' : 'white',
                },
              ])}>
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
  portContainer: {
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
    marginRight: 10,
  },
  portText: {
    fontWeight: '600',
    fontSize: 13,
    paddingBottom: 6,
    paddingTop: 6,
    paddingRight: 12,
    paddingLeft: 12,
  },
})

export default Port
