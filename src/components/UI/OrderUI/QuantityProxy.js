import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'

const QuantityProxy = ({
  proxyText,
  handlePressAmountMinus,
  startTimerMinus,
  stopTimerMinus,
  handlePressAmountPlus,
  startTimerPlus,
  stopTimerPlus,
  amount,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.quantityDescription}>{proxyText?.texts?.t1}</Text>
      <View style={styles.quantityToggleContainer}>
        <TouchableWithoutFeedback
          onPress={handlePressAmountMinus}
          onPressIn={startTimerMinus}
          onPressOut={stopTimerMinus}
          activeOpacity={0.8}>
          <View style={styles.quantityToggleMinusCOntainer}>
            <Text style={styles.quantityToggleMinusText}>-</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.quantityToggleCenterContainer}>
          <Text style={styles.quantityToggleCenterText}>{amount}</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={handlePressAmountPlus}
          onPressIn={startTimerPlus}
          onPressOut={stopTimerPlus}
          activeOpacity={0.8}>
          <View style={styles.quantityTogglePlusContainer}>
            <Text style={styles.quantityTogglePlusText}>+</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  quantityDescription: {
    color: '#CBCBCB',
    fontWeight: '600',
  },
  quantityToggleContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 4,
    borderRadius: 40,
    left: 5,
    alignItems: 'center',
  },
  quantityToggleMinusCOntainer: {
    backgroundColor: '#1E2127',
    borderBottomLeftRadius: 44,
    borderTopLeftRadius: 44,
  },
  quantityToggleMinusText: {
    color: '#CBCBCB',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 22,
    paddingRight: 18,
    fontSize: 14,
    fontWeight: '600',
  },
  quantityToggleCenterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E2127',
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 1,
    marginLeft: 1,
    width: 60,
  },
  quantityToggleCenterText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  quantityTogglePlusContainer: {
    backgroundColor: '#1E2127',
    borderBottomRightRadius: 44,
    borderTopRightRadius: 44,
  },
  quantityTogglePlusText: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 22,
    fontSize: 14,
    fontWeight: '600',
  },
})

export default QuantityProxy
