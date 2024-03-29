import React, { useCallback, useRef, useMemo, useState } from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet, SafeAreaView, Text, TextInput, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

import LayoutMain from '../../componets/LayoutMain'
import BottomSheetForm from '../../componets/BottomSheetForm'
import BottomSheetSelectForm from '../../componets/UI/ProxyUI/BottomSheetSelectForm'
import ProxyItemChange from '../../componets/UI/ProxyUI/ProxyItemChange'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

import ProxiesSearch from '../../image/Svg/ProxiesSearch'

const heightOffScreen = Dimensions.get('window').height

const arryId = []

function ChangeProxies({ navigation }) {
  const [selectedProxies, setSelectedProxies] = useState([])
  const text = useSelector(res => res.textReducer.myproxies.payload)
  const proxyLisStore = useSelector(data => data.proxy.proxyList.data)
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

  const handleGetAll = () => {
    if (selectedProxies.length == 0) {
      setSelectedProxies(arryId)
    } else {
      setSelectedProxies([])
    }
  }

  const onChange = value => {
    const proxyId = Number(value)
    setSelectedProxies(prevState =>
      prevState.includes(proxyId) ? prevState.filter(id => id !== proxyId) : prevState.concat(proxyId),
    )
  }

  proxyLisStore.map(item => arryId.push(item.id))
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.balanceIcon} activeOpacity={0.8} onPress={handleGetAll}>
          <Text style={styles.headerRightText}>{text?.buttons?.b14}</Text>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={styles.headerLeftIcon} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b16}</Text>
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
          style={StyleSheet.flatten([
            styles.scrollViewContainer,
            {
              marginBottom: selectedProxies.length > 0 ? 300 : 90,
            },
          ])}>
          {proxyLisStore?.map(proxy => (
            <ProxyItemChange
              key={proxy.id}
              proxy={proxy.id}
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
  scrollViewContainer: {
    width: '100%',
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
  headerLeftIcon: {
    bottom: 1,
  },
  headerRightText: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 15,
  },
})

export default ChangeProxies
