import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const QuantityButtons = ({ handlePressAmountButtom }) => {
  return (
    <View style={styles.amountButtonsContainer}>
      <TouchableOpacity style={styles.amountButtonItemContainer} onPress={() => handlePressAmountButtom(50)}>
        <Text style={styles.amountButtonItemText}>50</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.amountButtonItemContainer} onPress={() => handlePressAmountButtom(100)}>
        <Text style={styles.amountButtonItemText}>100</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.amountButtonItemContainer} onPress={() => handlePressAmountButtom(250)}>
        <Text style={styles.amountButtonItemText}>250</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.amountButtonItemContainer} onPress={() => handlePressAmountButtom(500)}>
        <Text style={styles.amountButtonItemText}>500</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.amountButtonItemContainer} onPress={() => handlePressAmountButtom(1000)}>
        <Text style={styles.amountButtonItemText}>1000</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.amountButtonItemContainer} onPress={() => handlePressAmountButtom(2000)}>
        <Text style={styles.amountButtonItemText}>2000</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  amountButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  amountButtonItemContainer: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    backgroundColor: '#1E2127',
    borderRadius: 50,
  },
  amountButtonItemText: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    color: 'white',
  },
})

export default QuantityButtons
