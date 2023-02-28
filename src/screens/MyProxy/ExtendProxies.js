import React, { useCallback, useRef, useMemo, useState, useEffect } from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet, SafeAreaView, Text, TextInput, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

import LayoutMain from '../../componets/LayoutMain'
import BottomSheetForm from '../../componets/BottomSheetForm'
import ProxyItemExtend from '../../componets/UI/ProxyUI/ProxyItemExtend'
import BottomSheetSelectForm from '../../componets/UI/ProxyUI/BottomSheetSelectForm'
import ProxiesSearch from '../../image/Svg/ProxiesSearch'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

function ExtendProxies({ navigation }) {
  const text = useSelector(res => res.textReducer.myproxies.payload)
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
  // console.log('1', arryId)
  useEffect(() => {
    proxyLisStore.map(item => arryId.push(item.id))
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
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> Мои прокси</Text>
        </TouchableOpacity>
      ),
    })
  }, [arryId, navigation])
  return (
    <LayoutMain>
      <View style={styles.topInputContainer}>
        <TextInput
          onFocus={() => {}}
          onBlur={() => {}}
          style={styles.topInput}
          onChangeText={setValueProxy}
          value={valueProxy}
          iconPosition="right"
          placeholder="Найти прокси"
          placeholderTextColor="#CBCBCB"
        />
        {valueProxy.length === 0 && (
          <ProxiesSearch
            style={
              heightOffScreen > 850 ? { position: 'absolute', left: '65%' } : { position: 'absolute', left: '63%' }
            }
          />
        )}
      </View>
      <SafeAreaView>
        <ScrollView
          style={{
            width: '100%',
            marginBottom: selectedProxies.length > 0 ? 300 : 90,
          }}
          decelerationRate="fast">
          {proxyLisStore?.map(proxy => (
            <ProxyItemExtend
              key={proxy.id}
              proxy={proxy}
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
            move={text?.buttons?.b10}
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
  topInput: {
    color: 'white',
    width: '80%',
    height: '100%',
    textAlign: 'center',
  },
  headerLeftTintContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftTintText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
})

export default ExtendProxies
