import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import LightRadioUncheked from '../../../image/Svg/LightRadioUncheked'
import RadioUncheked from '../../../image/Svg/RadioUncheked'

function OrderRenew({ text, renewStatus }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.bigText}>{text?.t17}</Text>
        {renewStatus ? <LightRadioUncheked /> : <RadioUncheked width={21} height={20} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1E2127',
    marginBottom: 1,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 17,
    paddingTop: 17,
    alignItems: 'center',
    width: '90%',
  },
  bigText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#CBCBCB',
  },
  smallText: {
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
})

export default OrderRenew
