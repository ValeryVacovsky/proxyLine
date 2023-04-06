import React, { useCallback, useRef, useMemo, useState } from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet, SafeAreaView, Text, TextInput, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

import LayoutMain from '../../components/LayoutMain'
import BottomSheetForm from '../../components/BottomSheetForm'
import ProxyItemDelete from '../../components/UI/ProxyUI/ProxyItemDelete'
import BottomSheetSelectForm from '../../components/UI/ProxyUI/BottomSheetSelectForm'

import ProxiesSearch from '../../image/Svg/ProxiesSearch'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

const heightOffScreen = Dimensions.get('window').height

function DeleteProxies({ navigation }) {
  const text = useSelector(res => res.textReducer.myproxies.payload)
  const proxyListStore = useSelector(data => data.proxy.proxyList)
  const [selectedProxies, setSelectedProxies] = useState([])
  const [valueProxy, setValueProxy] = useState('')
  const sheetRef = useRef(null)
  const snapPoints = useMemo(() => (heightOffScreen > 850 ? ['30%'] : ['33']), [])

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index)
  }, [])

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close()
  }, [])

  const onChange = value => {
    const proxyId = Number(value)
    setSelectedProxies(prevState =>
      prevState.includes(proxyId) ? prevState.filter(id => id !== proxyId) : prevState.concat(proxyId),
    )
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.balanceIcon} activeOpacity={0.8}>
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
            style={StyleSheet.flatten([
              styles.proxySearch,
              {
                left: heightOffScreen > 850 ? '65%' : '63%',
              },
            ])}
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
          {proxyListStore?.map(proxy => (
            <ProxyItemDelete
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
          handleClosePress={handleClosePress}>
          <BottomSheetSelectForm
            handleClosePress={handleClosePress}
            navigation={navigation}
            setSelectedProxies={setSelectedProxies}
            selected={selectedProxies.length}
            move={text?.buttons?.b10}
            text={text?.texts?.b14}
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
  proxySearch: {
    position: 'absolute',
  },
  scrollViewContainer: {
    width: '100%',
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

export default DeleteProxies
