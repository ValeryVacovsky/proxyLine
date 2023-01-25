import React, { useCallback, useRef, useMemo, useState, useEffect } from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet, SafeAreaView, Text, TextInput, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

import LayoutMain from '../../componets/LayoutMain'
import FlagUseBig from '../../image/Svg/FlagUseBig'
import BottomSheetForm from '../../componets/BottomSheetForm'
import ProxyItemExtend from '../../componets/UI/ProxyUI/ProxyItemExtend'
import BottomSheetSelectForm from '../../componets/UI/ProxyUI/BottomSheetSelectForm'
import ProxiesSearch from '../../image/Svg/ProxiesSearch'

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

function ExtendProxies({ navigation }) {
  const proxyRes = useSelector(data => data?.proxy?.authStatus)
  const heightOffScreen = Dimensions.get('window').height
  const [valueProxy, setValueProxy] = useState('')
  const sheetRef = useRef(null)
  const [, setIsOpen] = useState(false)
  const snapPoints = useMemo(() => (heightOffScreen > 850 ? ['30%'] : ['33']), [])

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
  }, [arryId, navigation])
  return (
    <LayoutMain>
      <View style={{ alignItems: 'center', display: 'flex' }}>
        <View
          style={{
            backgroundColor: '#1E2127',
            color: '#CBCBCB',
            height: 44,
            minWidth: '90%',
            marginBottom: 14,
            borderRadius: 8,
            borderWidth: 1,
            paddingLeft: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
          }}>
          <TextInput
            onFocus={() => {}}
            onBlur={() => {}}
            style={{ color: 'white', width: '80%', height: '100%', textAlign: 'center' }}
            onChangeText={setValueProxy}
            value={valueProxy}
            iconPosition="right"
            placeholder="Найти прокси"
            placeholderTextColor="#CBCBCB"
          />
          {valueProxy.length === 0 && (
            <ProxiesSearch
              style={
                heightOffScreen > 700 ? { position: 'absolute', left: '65%' } : { position: 'absolute', left: '68%' }
              }
            />
          )}
        </View>
        <SafeAreaView>
          <ScrollView
            style={{
              width: selectedProxies.length > 0 ? '90%' : '90%',
              marginBottom: selectedProxies.length > 0 ? 300 : 90,
            }}
            decelerationRate="fast">
            {proxyRes.map((proxy, index) => (
              <ProxyItemExtend
                key={proxy.id}
                proxy={MyProxiesList[index]}
                handleSnapPress={handleSnapPress}
                handleClosePress={handleClosePress}
                onChange={onChange}
                selectedProxies={selectedProxies}
                navigation={navigation}
                proxyRes={proxy}
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

export default ExtendProxies
