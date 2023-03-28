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
import { useSelector } from 'react-redux'

import LayoutMain from '../../componets/LayoutMain'
import ProxyItem from '../../componets/UI/ProxyUI/ProxyItem'
import BottomSheetForm from '../../componets/BottomSheetForm'
import BottomSheetItem from '../../componets/UI/ProxyUI/BottomSheetItem'
import ProxiesDotts from '../../image/Svg/ProxiesDotts'
import VectorOpen from '../../image/Svg/VectorOpen'
import ProxiesSearch from '../../image/Svg/ProxiesSearch'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

const heightOffScreen = Dimensions.get('window').height

function MyProxies({ navigation }) {
  const text = useSelector(res => res.textReducer.myproxies.payload)
  const proxyLisStore = useSelector(data => data.proxy.proxyList)
  const [selected, setSelected] = useState(null)
  const [childrenItem, setChildrenItem] = useState()
  const [valueProxy, setValueProxy] = useState('')
  const sheetRef = useRef(null)
  const snapPoints = useMemo(() => (heightOffScreen > 800 ? ['48%'] : ['57%']), [heightOffScreen])

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index)
  }, [])

  const handleClosePress = useCallback(() => {
    setChildrenItem(<View style={styles.defaultBottomSheetContainer} />)
    sheetRef.current?.close()
  }, [])

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <Pressable
            style={styles.balanceIconFilter}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Filters')
              setTimeout(() => handleClosePress(), 1000)
            }}
            hitSlop={15}>
            <ProxiesFilter style={styles.headerRightFiltersIcon} />
          </Pressable>
          <Pressable
            activeOpacity={0.8}
            onPress={() => {
              setChildrenItem(
                <BottomSheetItem handleClosePress={handleClosePress} navigation={navigation} text={text} />,
              )
              handleSnapPress(0)
            }}
            hitSlop={15}>
            <ProxiesDotts />
          </Pressable>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={styles.headerLeftIcon} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b17}</Text>
        </TouchableOpacity>
      ),
    })
  }, [handleClosePress, handleSnapPress, navigation, text])
  return (
    <LayoutMain>
      <View style={styles.container}>
        <View style={styles.topInutContainer}>
          <TextInput
            onFocus={() => {}}
            onBlur={() => {}}
            style={styles.topInput}
            onChangeText={setValueProxy}
            value={valueProxy}
            icon={<VectorOpen />}
            iconPosition="right"
            placeholder={text?.texts?.t1}
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
                marginBottom: selected ? 168 : 90,
              },
            ])}>
            {proxyLisStore.data?.map((proxy, index) => (
              <ProxyItem
                key={proxy.id}
                proxyRes={proxy}
                selected={selected}
                setSelected={setSelected}
                handleSnapPress={handleSnapPress}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePress}
                childrenItem={childrenItem}
                navigation={navigation}
                index={index}
                text={text}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </View>
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
            <Text style={styles.buttonText}>{text?.buttons?.b0}</Text>
          </SuperEllipseMaskView>
        </TouchableOpacity>
      )}
      <BottomSheetForm
        navigation={navigation}
        sheetRef={sheetRef}
        snapPoints={snapPoints}
        handleClosePress={handleClosePress}>
        <View style={styles.bottomSheetBackDrop}>{childrenItem}</View>
      </BottomSheetForm>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  balanceIconFilter: {
    marginRight: 30,
  },
  headerRightFiltersIcon: {
    top: 1,
  },
  container: {
    display: 'flex',
  },
  scrollView: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  scrollViewContainer: {
    width: '100%',
  },
  text: {
    fontSize: 42,
  },
  button: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 32,
    position: 'absolute',
    bottom: 4,
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
  bottomSheetBackDrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  topInutContainer: {
    backgroundColor: '#1E2127',
    color: '#CBCBCB',
    height: 44,
    marginHorizontal: 20,
    marginBottom: 14,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
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
  headerLeftIcon: {
    bottom: 1,
  },
  headerLeftTintText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
  headerRightContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  defaultBottomSheetContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0F1218',
  },
})

export default MyProxies
