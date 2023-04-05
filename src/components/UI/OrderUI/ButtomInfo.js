import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'

const ButtomInfo = ({
  proxyText,
  totalPrice,
  initialTotalPrice,
  onSubmit,
  onSubmitCoupone,
  focusInput,
  buttonStatus,
}) => {
  return (
    <View style={styles.bottomContainer}>
      <View
        style={StyleSheet.flatten([
          styles.priceFullAmountContainer,
          {
            marginTop: focusInput ? -13 : 0,
          },
        ])}>
        <Text style={styles.priceFullAmountDescriptionText}>{proxyText?.texts?.t5}</Text>
        {totalPrice === initialTotalPrice ? (
          <Text style={styles.priceFullAmountText}>$ {totalPrice}</Text>
        ) : (
          <View style={styles.priceInitionAmountContainer}>
            <Text style={styles.priceInitionAmountText}>$ {initialTotalPrice}</Text>
            <Text style={styles.priceFullAmountText}>$ {totalPrice}</Text>
          </View>
        )}
      </View>
      {!buttonStatus ? (
        <TouchableOpacity onPress={onSubmit} style={styles.buttonContainer} activeOpacity={0.8}>
          <SuperEllipseMaskView
            radius={12}
            style={StyleSheet.flatten([
              styles.buttonInner,
              {
                backgroundColor: '#FAC637',
              },
            ])}>
            <Text style={styles.buttonText}>{proxyText.buttons.b0}</Text>
          </SuperEllipseMaskView>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onSubmitCoupone} style={styles.buttonContainer} activeOpacity={0.8}>
          <SuperEllipseMaskView
            radius={12}
            style={StyleSheet.flatten([
              styles.buttonInner,
              {
                backgroundColor: '#6FCF97',
              },
            ])}>
            <Text style={styles.buttonText}>{proxyText.buttons.b4 || 'Применить купон'}</Text>
          </SuperEllipseMaskView>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  priceFullAmountContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingBottom: 13,
    alignItems: 'center',
  },
  priceFullAmountDescriptionText: {
    color: '#CBCBCB',
    fontWeight: '600',
  },
  priceFullAmountText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  priceInitionAmountContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceInitionAmountText: {
    color: '#CBCBCB',
    fontWeight: '700',
    fontSize: 18,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
  buttonInner: {
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

export default ButtomInfo
