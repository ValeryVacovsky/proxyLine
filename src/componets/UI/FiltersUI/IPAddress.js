import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import BottomSheetIP from './BottomSheet/BottomSheetIP'
import { useSelector } from 'react-redux'
import getListProxies from '../../../api/getListProxies'
import AsyncStorage from '@react-native-async-storage/async-storage'

function IPAddress({ ip, setFilters, setChildrenItem, handleClosePress, handleSnapPress }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [Ipaddress, setIpaddress] = useState([])
  const handlePress = item => {
    setFilters(prevState =>
      prevState.ip.includes(item)
        ? { ...prevState, ip: prevState.ip.filter(active => active !== item) }
        : { ...prevState, ip: prevState.ip.concat(item) },
    )
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(
      <BottomSheetIP
        handleClosePress={handleClosePress}
        setIpaddress={setIpaddress}
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
      data.data.map(item => outData.push(item.ip))
      setIpaddress(outData)
    }
    listProxies()
  }, [])
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>{text?.texts?.t4}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleOpenBottomSheet}>
          <Text style={styles.textInfo}>{text?.buttons?.b3}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {Ipaddress.map(item => (
          <TouchableOpacity
            key={item}
            style={StyleSheet.flatten([
              styles.ipContainer,
              {
                backgroundColor: ip.includes(item) ? '#FAC637' : '#333842',
              },
            ])}
            activeOpacity={0.8}
            onPress={() => {
              handlePress(item)
            }}>
            <Text
              style={StyleSheet.flatten([
                styles.ipText,
                {
                  color: ip.includes(item) ? '#0F1218' : 'white',
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
  ipContainer: {
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
    marginRight: 10,
  },
  ipText: {
    fontWeight: '600',
    fontSize: 13,
    paddingBottom: 6,
    paddingTop: 6,
    paddingRight: 12,
    paddingLeft: 12,
  },
})

export default IPAddress
