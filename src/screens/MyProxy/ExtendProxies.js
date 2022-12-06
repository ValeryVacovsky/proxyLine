import React, { useCallback, useRef, useMemo, useState, useEffect } from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet, SafeAreaView, Text, TextInput } from 'react-native'

import LayoutMain from '../../componets/LayoutMain'
import FlagUseBig from '../../image/Svg/FlagUseBig'
import BottomSheetForm from '../../componets/BottomSheetForm'
import ProxyItemDelete from '../../componets/UI/ProxyUI/ProxyItemDelete'
import BottomSheetSelectForm from '../../componets/UI/ProxyUI/BottomSheetSelectForm'

const MyProxiesList = [
  {
    id: 1,
    name: 'United states of America',
    days: 5,
    IP: 'IPv4',
    IpAdress: '136.117.121.183',
    flag: <FlagUseBig />,
  },
  {
    id: 2,
    name: 'United states of America',
    days: 5,
    IP: 'IPv4',
    IpAdress: '136.117.121.183',
    flag: <FlagUseBig />,
  },
  {
    id: 3,
    name: 'United states of America',
    days: 5,
    IP: 'IPv4',
    IpAdress: '136.117.121.183',
    flag: <FlagUseBig />,
  },
  {
    id: 4,
    name: 'United states of America',
    days: 5,
    IP: 'IPv4',
    IpAdress: '136.117.121.183',
    flag: <FlagUseBig />,
  },
  {
    id: 5,
    name: 'United states of America',
    days: 5,
    IP: 'IPv4',
    IpAdress: '136.117.121.183',
    flag: <FlagUseBig />,
  },
  {
    id: 6,
    name: 'United states of America',
    days: 5,
    IP: 'IPv4',
    IpAdress: '136.117.121.183',
    flag: <FlagUseBig />,
  },
  {
    id: 8,
    name: 'United states of America',
    days: 5,
    IP: 'IPv4',
    IpAdress: '136.117.121.183',
    flag: <FlagUseBig />,
  },
  {
    id: 9,
    name: 'United states of America',
    days: 5,
    IP: 'IPv4',
    IpAdress: '136.117.121.183',
    flag: <FlagUseBig />,
  },
  {
    id: 10,
    name: 'United states of America',
    days: 5,
    IP: 'IPv4',
    IpAdress: '136.117.121.183',
    flag: <FlagUseBig />,
  },
  {
    id: 11,
    name: 'United states of America',
    days: 5,
    IP: 'IPv4',
    IpAdress: '136.117.121.183',
    flag: <FlagUseBig />,
  },
  {
    id: 12,
    name: 'United states of America',
    days: 5,
    IP: 'IPv4',
    IpAdress: '136.117.121.183',
    flag: <FlagUseBig />,
  },
  {
    id: 13,
    name: 'United states of America',
    days: 5,
    IP: 'IPv4',
    IpAdress: '136.117.121.183',
    flag: <FlagUseBig />,
  },
]

const styles = StyleSheet.create({
  balanceIconFilter: {
    marginRight: 15,
  },
  balanceIconFilterDotts: {},
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 42,
  },
  button: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
    position: 'absolute',
    bottom: '8%',
    zIndex: 1,
  },
  buttonInner: {
    backgroundColor: '#FAC637',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '90%',
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 13,
  },
})

function ExtendProxies({ navigation }) {
  const sheetRef = useRef(null)
  const [, setIsOpen] = useState(false)
  const snapPoints = useMemo(() => ['30%'], [])

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index)
    setIsOpen(false)
  }, [])

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close()
  }, [])

  const [selectedProxies, setSelectedProxies] = useState([])
  const onChange = value => {
    const proxyId = Number(value)
    setSelectedProxies(prevState =>
      prevState.includes(proxyId) ? prevState.filter(id => id !== proxyId) : prevState.concat(proxyId),
    )
  }
  const arryId = []
  useEffect(() => {
    MyProxiesList.map(item => arryId.push(item.id))
  }, [])
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <TouchableOpacity style={styles.balanceIcon} activeOpacity={0.8} onPress={() => setSelectedProxies(arryId)}>
          <Text style={{ color: '#FAC637', fontWeight: '600', fontSize: 15 }}>Выбрать все</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain>
      <View style={{ alignItems: 'center', display: 'flex' }}>
        <TextInput
          style={{
            backgroundColor: '#1E2127',
            color: '#CBCBCB',
            height: 44,
            width: '90%',
            marginBottom: 14,
            borderRadius: 8,
            paddingLeft: 20,
            paddingTop: 15,
            paddingBottom: 15,
            textAlign: 'center',
            marginTop: 10,
          }}
          placeholder="Найти прокси"
          placeholderTextColor="#CBCBCB"
        />
        <SafeAreaView>
          <ScrollView
            style={{
              width: selectedProxies.length > 0 ? '90%' : '90%',
              marginBottom: selectedProxies.length > 0 && 300,
            }}
            decelerationRate="fast">
            {MyProxiesList.map(proxy => (
              <ProxyItemDelete
                key={proxy.id}
                proxy={proxy}
                handleSnapPress={handleSnapPress}
                handleClosePress={handleClosePress}
                onChange={onChange}
                selectedProxies={selectedProxies}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
        {selectedProxies.length > 0 && (
          <BottomSheetForm
            navigation={navigation}
            sheetRef={sheetRef}
            snapPoints={snapPoints}
            setIsOpen={setIsOpen}
            handleClosePress={handleClosePress}>
            <BottomSheetSelectForm
              handleClosePress={handleClosePress}
              navigation={navigation}
              setSelectedProxies={setSelectedProxies}
              selected={selectedProxies.length}
              move="Удалить"
            />
          </BottomSheetForm>
        )}
      </View>
    </LayoutMain>
  )
}

export default ExtendProxies
