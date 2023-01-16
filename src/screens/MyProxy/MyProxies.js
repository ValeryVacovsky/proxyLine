import React, { useCallback, useRef, useMemo, useState } from 'react'
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
  Dimensions,
} from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import ProxiesFilter from '../../image/Svg/ProxiesFilter'

import LayoutMain from '../../componets/LayoutMain'
import ProxiesDotts from '../../image/Svg/ProxiesDotts'
import ProxyItem from '../../componets/UI/ProxyUI/ProxyItem'
import FlagUseBig from '../../image/Svg/FlagUseBig'
import BottomSheetForm from '../../componets/BottomSheetForm'
import VectorOpen from '../../image/Svg/VectorOpen'
import ProxiesSearch from '../../image/Svg/ProxiesSearch'
import BottomSheetItem from '../../componets/UI/ProxyUI/BottomSheetItem'

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
    marginRight: 30,
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

function MyProxies({ navigation }) {
  let heightOffScreen = Dimensions.get('window').height
  const [valueProxy, setValueProxy] = useState('')
  const sheetRef = useRef(null)
  const [, setIsOpen] = useState(false)
  const snapPoints = useMemo(() => (heightOffScreen > 800 ? ['52%'] : ['61%']), [])

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index)
    setIsOpen(false)
  }, [])

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close()
  }, [])

  const [selected, setSelected] = useState(null)
  const [proxyItemPicked, setProxyItemPicked] = useState(null)
  const [childrenItem, setChildrenItem] = useState()
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Pressable
            style={styles.balanceIconFilter}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Filters')}
            hitSlop={15}>
            <ProxiesFilter />
          </Pressable>
          <Pressable
            style={styles.balanceIconFilterDotts}
            activeOpacity={0.8}
            onPress={() => {
              setChildrenItem(<BottomSheetItem handleClosePress={handleClosePress} navigation={navigation} />)
              handleSnapPress(0)
              setProxyItemPicked(true)
            }}
            hitSlop={15}>
            <ProxiesDotts />
          </Pressable>
        </View>
      ),
    })
  }, [handleClosePress, handleSnapPress, navigation])
  return (
    <LayoutMain>
      {/* <View
        style={{
          position: 'absolute',
          width: 5000,
          height: 5000,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      /> */}
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
            icon={<VectorOpen />}
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
          <ScrollView style={{ width: '100%', marginBottom: 90 }}>
            {MyProxiesList.map(proxy => (
              <ProxyItem
                key={proxy.id}
                proxy={proxy}
                selected={selected}
                setSelected={setSelected}
                setProxyItemPicked={setProxyItemPicked}
                handleSnapPress={handleSnapPress}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePress}
                childrenItem={childrenItem}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
        {selected && (
          <TouchableOpacity
            onPress={() => {}}
            style={styles.button}
            activeOpacity={0.8}
            onLongPress={() => {
              navigation.navigate('Test')
            }}>
            <SuperEllipseMaskView
              radius={{
                topLeft: 12,
                topRight: 12,
                bottomRight: 12,
                bottomLeft: 12,
              }}
              style={styles.buttonInner}>
              <Text style={styles.buttonText}>Купить прокси</Text>
            </SuperEllipseMaskView>
          </TouchableOpacity>
        )}
        {proxyItemPicked && (
          <BottomSheetForm
            navigation={navigation}
            sheetRef={sheetRef}
            snapPoints={snapPoints}
            setIsOpen={setIsOpen}
            handleClosePress={handleClosePress}>
            {childrenItem}
          </BottomSheetForm>
        )}
      </View>
    </LayoutMain>
  )
}

export default MyProxies
