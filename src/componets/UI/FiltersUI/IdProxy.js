import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'

import AsyncStorage from '@react-native-async-storage/async-storage'

import BottomSheetId from './BottomSheet/BottomSheetId'

import getListProxies from '../../../api/getListProxies'

function IdProxy({ id, setFilters, setChildrenItem, handleClosePress, handleSnapPress }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [idDefault, setIdDefault] = useState([])

  const handlePress = item => {
    setFilters(prevState =>
      prevState.id.includes(item)
        ? { ...prevState, id: prevState.id.filter(active => active !== item) }
        : { ...prevState, id: prevState.id.concat(item) },
    )
  }

  const handleOpenBottomSheet = () => {
    setChildrenItem(
      <BottomSheetId
        handleClosePress={handleClosePress}
        setIdDefault={setIdDefault}
        handleSnapPress={handleSnapPress}
      />,
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
      data.data.map(item => outData.push(item.id))
      setIdDefault(outData)
    }
    listProxies()
  }, [])

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
            style={StyleSheet.flatten([
              styles.idContainer,
              {
                backgroundColor: id.includes(item) ? '#FAC637' : '#333842',
              },
            ])}
            activeOpacity={0.8}
            onPress={() => handlePress(item)}>
            <Text
              style={StyleSheet.flatten([
                styles.idText,
                {
                  color: id.includes(item) ? '#0F1218' : 'white',
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
  idContainer: {
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
    marginRight: 10,
  },
  idText: {
    fontWeight: '600',
    fontSize: 13,
    paddingBottom: 6,
    paddingTop: 6,
    paddingRight: 12,
    paddingLeft: 12,
  },
})

export default IdProxy
