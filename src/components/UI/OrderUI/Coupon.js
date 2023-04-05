import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

const Coupon = ({ proxyText, coupon, handleOnFocus, handleOnBlur, setCouponValue, percent }) => {
  return (
    <View style={styles.center}>
      <Text style={styles.priceAmountDescriptionText}>{proxyText?.texts?.t8 || 'Купон'}</Text>
      {coupon.length === 0 ? (
        <TextInput
          style={styles.cuponInput}
          autoCapitalize="characters"
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChangeText={setCouponValue}
        />
      ) : (
        <Text style={styles.couponText}>
          {proxyText?.texts?.t9 || 'Скидка'} {percent} %
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingBottom: 13,
    alignItems: 'center',
  },
  priceAmountDescriptionText: {
    color: '#CBCBCB',
    fontWeight: '600',
  },
  cuponInput: {
    backgroundColor: '#1E2127',
    paddingHorizontal: 15,
    paddingTop: 12,
    color: 'white',
    fontWeight: '400',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333842',
    width: 157,
    fontSize: 14,
    lineHeight: 15,
    paddingBottom: 10,
  },
  couponText: {
    fontWeight: '700',
    fontSize: 13,
    color: 'white',
  },
})

export default Coupon
