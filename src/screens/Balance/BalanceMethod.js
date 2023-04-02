import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
} from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

import LayoutMain from '../../components/LayoutMain'
import BalanceTopTableSystems from '../../components/UI/BalanceUI/BalanceTopTableSystems'

import LightRadioUncheked from '../../image/Svg/LightRadioUncheked'
import DarkRadioUncheked from '../../image/Svg/DarkRadioUncheked'
import ProxiesSearch from '../../image/Svg/ProxiesSearch'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

import postCreatePayment from '../../api/postCreatePayment'

const heightOffScreen = Dimensions.get('window').height

function BalanceMethod({ navigation, route }) {
  const text = useSelector(res => res.textReducer.balance.payload)
  const [valueProxy, setValueProxy] = useState('')
  const amount = route.params?.dataNav.amount
  const balance = useSelector(data => data.balanceReducer)
  const [methods] = useState(route.params?.dataNav?.methods)
  const [filtredMethods, setFiltredMethods] = useState(route.params?.dataNav?.methods)
  const [selectedMethod, setSelectedMethod] = useState('')
  const [selectedMethodId, setSelectedMethodId] = useState('')
  const [selectedStatus, setSelectedStatus] = useState(false)
  useEffect(() => {
    if (selectedMethod.length > 0) {
      setSelectedStatus(true)
    } else {
      setSelectedStatus(false)
    }
  }, [selectedMethod])

  useEffect(() => {
    setFiltredMethods(methods?.filter(meth => meth?.name_en.toLowerCase()?.includes(valueProxy?.toLowerCase())))
  }, [valueProxy])
  const handelPayment = async () => {
    async function paymentTake() {
      try {
        const userToken = await AsyncStorage.getItem('@token')
        const id = await AsyncStorage.getItem('@id')
        const token = `${id}_${userToken}`
        const data = { amount: amount, payment_method: selectedMethodId }
        const res = await postCreatePayment(token, data)
        await navigation.navigate('WebPayment', { data: res.data.redirect_url })
        setSelectedStatus(false)
      } catch (error) {
        console.log(error)
      }
    }
    paymentTake()
  }
  const handleChooseItem = data => {
    setSelectedMethod(data.name_en)
    setSelectedMethodId(data.id)
    selectedMethod === data.name_en && setSelectedMethod('')
    selectedMethod === data.name_en && setSelectedMethodId('')
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={styles.headerLeftIcon} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b2}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <BalanceTopTableSystems balance={balance.balance} navigation={navigation} />
        <Text style={styles.text}>{route.params?.dataNav?.name}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputTop}
            onChangeText={setValueProxy}
            value={valueProxy}
            iconPosition="right"
            placeholder={text?.texts?.t9}
            placeholderTextColor="#CBCBCB"
          />
          {valueProxy.length === 0 && (
            <ProxiesSearch
              style={
                heightOffScreen > 850 ? { position: 'absolute', left: '20%' } : { position: 'absolute', right: '25%' }
              }
            />
          )}
        </View>
        <ScrollView style={styles.scrollView}>
          {filtredMethods.map(data => (
            <View key={data.id} style={styles.methodContainer}>
              <View style={styles.methodItem}>
                <View style={styles.nameContainer}>
                  <Image style={styles.nameLogo} source={{ uri: data.icon_path_2 }} />
                  <Text style={styles.nameText}>{data.name_en}</Text>
                </View>
                <Pressable hitSlop={25} activeOpacity={1} onPress={() => handleChooseItem(data)}>
                  {selectedMethod !== data.name_en ? <DarkRadioUncheked /> : <LightRadioUncheked />}
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
        {selectedStatus && (
          <TouchableOpacity style={styles.paymentButtonContiner} onPress={handelPayment}>
            <SuperEllipseMaskView
              radius={{
                topLeft: 12,
                topRight: 12,
                bottomRight: 12,
                bottomLeft: 12,
              }}
              style={styles.paymentButtonItem}>
              <Text style={styles.paymentButtonText}>{text?.buttons?.b1}</Text>
            </SuperEllipseMaskView>
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 20,
    marginTop: 18,
    marginBottom: 10,
  },
  circleGradient: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  scrollView: {
    marginBottom: -30,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#008f68',
    fontSize: 12,
  },
  button: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
    position: 'absolute',
    bottom: 100,
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
  inputContainer: {
    backgroundColor: '#1E2127',
    color: '#CBCBCB',
    height: 44,
    minWidth: '90%',
    marginBottom: 14,
    borderRadius: 8,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginHorizontal: 20,
  },
  inputTop: {
    color: 'white',
    width: '80%',
    height: '100%',
    textAlign: 'center',
  },
  methodContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    marginBottom: 4,
  },
  methodItem: {
    marginHorizontal: 20,
    paddingBottom: 16,
    paddingTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameLogo: {
    marginRight: 24,
    marginLeft: 10,
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  nameText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 14,
    lineHeight: 15,
    maxWidth: '80%',
  },
  paymentButtonContiner: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
  },
  paymentButtonItem: {
    width: '90%',
    height: 50,
    backgroundColor: '#FAC637',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentButtonText: {
    color: '#0F1218',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
  },
})

export default BalanceMethod
