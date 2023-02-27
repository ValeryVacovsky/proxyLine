import React, { useCallback, useRef, useMemo, useState, useEffect } from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet, SafeAreaView, Text, TextInput, Dimensions } from 'react-native'

import LayoutMain from '../../componets/LayoutMain'
import FlagUseBig from '../../image/Svg/FlagUseBig'
import BottomSheetForm from '../../componets/BottomSheetForm'
import BottomSheetSelectForm from '../../componets/UI/ProxyUI/BottomSheetSelectForm'
import ProxiesSearch from '../../image/Svg/ProxiesSearch'
import { useSelector } from 'react-redux'
import ProxyItemChange from '../../componets/UI/ProxyUI/ProxyItemChange'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

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

function ChangeProxies({ navigation }) {
  const [text, setText] = useState({})
  const balanceText = useSelector(res => res.textReducer.myproxies)
  useEffect(() => {
    setText(balanceText.payload)
  }, [balanceText])
  const proxyLisStore = useSelector(data => data.proxy.proxyList.data)
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
          <Text style={{ color: '#FAC637', fontWeight: '600', fontSize: 15 }}>{text?.buttons?.b14}</Text>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={{ color: '#CBCBCB', fontWeight: '600', fontSize: 14, lineHeight: 15 }}> Мои прокси</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain>
      <View style={styles.topInputContainer}>
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
              heightOffScreen > 850 ? { position: 'absolute', left: '65%' } : { position: 'absolute', left: '68%' }
            }
          />
        )}
      </View>
      <SafeAreaView>
        <ScrollView
          style={{
            width: '100%',
            marginBottom: selectedProxies.length > 0 ? 300 : 90,
          }}>
          {proxyLisStore?.map((proxy, index) => (
            <ProxyItemChange
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
            move={text?.buttons?.b15}
            text={text?.buttons?.b10}
          />
        </BottomSheetForm>
      )}
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
  topInputContainer: {
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
    marginHorizontal: 20,
  },
})

export default ChangeProxies
