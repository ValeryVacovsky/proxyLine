import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import SliderExample from './SliderExample'
// import SliderExample from '../componets/SliderExample';
import FlagUsaSmall from '../image/Svg/FlagUsaSmall'
import VectorRightSmall from '../image/Svg/VectorRightSmall'

const styles = StyleSheet.create({
  buttonInner: {
    backgroundColor: '#FAC637',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '90%',
  },
})

function OrderItem({ navigation, order, setScrolling }) {
  const [amount, setAmount] = useState(0)
  const { price } = order
  const totalPrice = Math.floor(amount * price * 100) / 100
  const [days, setDays] = useState(90)
  const [country, setCountry] = useState('United States of America')
  const [typeServer, setTypeServer] = useState({ SOCKS5: true, 'HTTP(S)': false })
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          paddingLeft: 20,
          paddingRight: 20,
          zIndex: 0,
          marginTop: 11,
          flex: 1,
        }}>
        <View
          style={{
            backgroundColor: '#FAC637',
            top: 12,
            borderRadius: 8,
            position: 'relative',
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 14,
            paddingRight: 14,
            shadowColor: '#FAC637',
            shadowOffset: { width: 3, height: 20 },
            shadowOpacity: 0.15,
            shadowRadius: 10,
            zIndex: 1,
          }}>
          <Text
            style={{
              alignItems: 'center',
              fontWeight: '600',
              fontSize: 12,
              color: '#0F1218',
            }}>
            {order.handDesription}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 0,
            border: 2,
            borderBottomColor: 'white',
            backgroundColor: 'rgba(51, 51, 51, 0.3)',
            marginBottom: 1,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 21,
            paddingBottom: 14,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
            borderBottomLeftRadius: 14,
            borderBottomRightRadius: 14,
          }}>
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
              IP
              {order.proxyType}
            </Text>
            <Text style={{ color: '#CBCBCB', fontSize: 12, fontWeight: '400' }}>Подходят для любых целей и сайтов</Text>
          </View>
          <View>{order.icon}</View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: 13,
            paddingBottom: 13,
          }}
          onPress={() => navigation.navigate('Countries', { params: setCountry() })}
          activeOpacity={0.8}>
          <View>
            <Text style={{ color: '#CBCBCB', fontSize: 15, fontWeight: '600' }}>Страна</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                fontSize: 13,
              }}>
              {country}
            </Text>
            <FlagUsaSmall width={16} height={13} style={{ top: 2, marginLeft: 5, marginRight: 5 }} />
            <VectorRightSmall width={6} height={12} style={{ top: 5, marginLeft: 10 }} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingTop: 10,
          }}>
          <Text style={{ color: '#CBCBCB', fontWeight: '600' }}>5 дней</Text>
          <Text style={{ color: '#CBCBCB', fontWeight: '600' }}>360 дней</Text>
        </View>
        <SliderExample days={days} setDays={setDays} setScrolling={setScrolling} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingTop: 13,
            paddingBottom: 13,
          }}>
          <Text style={{ color: '#CBCBCB', fontWeight: '600' }}>Период</Text>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>{days} дней</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{ color: '#CBCBCB', fontWeight: '600' }}>Тип</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: '#1E2127',
              padding: 4,
              borderRadius: 40,
              left: 5,
            }}>
            <TouchableOpacity
              style={
                typeServer['HTTP(S)'] === false ? {} : { backgroundColor: 'rgba(51, 51, 51, 0.5)', borderRadius: 20 }
              }
              onPress={() =>
                setTypeServer(prevState => ({
                  ...prevState,
                  'HTTP(S)': !prevState['HTTP(S)'],
                  SOCKS5: prevState['HTTP(S)'],
                }))
              }
              activeOpacity={0.8}>
              <Text
                style={
                  typeServer['HTTP(S)'] === true
                    ? {
                        color: 'white',
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 14,
                        paddingRight: 14,
                        fontSize: 12,
                        fontWeight: '600',
                      }
                    : {
                        color: '#CBCBCB',
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 14,
                        paddingRight: 14,
                        fontSize: 12,
                        fontWeight: '600',
                      }
                }>
                {Object.keys(typeServer)[1]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                typeServer.SOCKS5 === false
                  ? { marginLeft: 10 }
                  : { marginLeft: 10, backgroundColor: 'rgba(51, 51, 51, 0.5)', borderRadius: 50 }
              }
              // eslint-disable-next-line no-return-assign
              onPress={() =>
                setTypeServer(prevState => ({
                  ...prevState,
                  SOCKS5: !prevState.SOCKS5,
                  'HTTP(S)': prevState.SOCKS5,
                }))
              }
              activeOpacity={0.8}>
              <Text
                style={
                  typeServer.SOCKS5 === true
                    ? {
                        color: 'white',
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 14,
                        paddingRight: 14,
                        fontSize: 12,
                        fontWeight: '600',
                      }
                    : {
                        color: '#CBCBCB',
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 14,
                        paddingRight: 14,
                        fontSize: 12,
                        fontWeight: '600',
                      }
                }>
                {Object.keys(typeServer)[0]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{ color: '#CBCBCB', fontWeight: '600' }}>Колличество</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 4,
              borderRadius: 40,
              left: 5,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#1E2127',
                borderBottomLeftRadius: 44,
                borderTopLeftRadius: 44,
              }}
              onPress={() => setAmount(amount + 1)}
              activeOpacity={0.8}>
              <Text
                style={{
                  color: '#CBCBCB',
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 14,
                  paddingRight: 14,
                  fontSize: 14,
                  fontWeight: '600',
                }}>
                +
              </Text>
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1E2127',
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 14,
                paddingRight: 14,
                marginRight: 1,
                marginLeft: 1,
              }}>
              <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>{amount}</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#1E2127',
                borderBottomRightRadius: 44,
                borderTopRightRadius: 44,
              }}
              onPress={() => {
                amount > 1 && setAmount(amount - 1)
              }}
              activeOpacity={0.8}>
              <Text
                style={{
                  color: 'white',
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 14,
                  paddingRight: 14,
                  fontSize: 14,
                  fontWeight: '600',
                }}>
                -
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingTop: 13,
            paddingBottom: 13,
          }}>
          <Text style={{ color: '#CBCBCB', fontWeight: '600' }}>Цена за штуку</Text>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>$ {price}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 25 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
            paddingTop: 13,
            paddingBottom: 13,
          }}>
          <Text style={{ color: '#CBCBCB', fontWeight: '600' }}>Итого к оплате</Text>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>$ {totalPrice}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={{ alignItems: 'center', width: '100%', marginBottom: 20 }}
          activeOpacity={0.8}>
          <SuperEllipseMaskView radius={12} style={styles.buttonInner}>
            <Text style={{ color: 'black', fontWeight: '600', fontSize: 13 }}>Купить прокси</Text>
          </SuperEllipseMaskView>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderItem
