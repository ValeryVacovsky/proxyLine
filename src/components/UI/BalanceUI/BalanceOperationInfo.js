import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BalanceOperationInfo = ({ text, date, data }) => {
  return (
    <View style={styles.dateStart}>
      <Text style={styles.dateStartOperation}>
        {data.action == 0 && text?.texts?.t10}
        {data.action == 1 && text?.texts?.t11}
        {data.action == 2 && text?.texts?.t11}
        {data.action == 3 && text?.texts?.t12}
        {data.action == 4 && text?.texts?.t13}
        {data.action == 5 && text?.texts?.t13}
        {data.action == 6 && text?.texts?.t14}
        {data.action == 7 && text?.texts?.t14}
        {data.action == 8 && text?.texts?.t14}
        {data.action == 9 && text?.texts?.t15}
        {data.action == 11 && text?.texts?.t16}
      </Text>
      <Text style={styles.dateStartText}>
        {text?.texts?.t3} {date}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  dateStart: {
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
    alignItems: 'center',
  },
  dateStartOperation: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 15,
    color: 'white',
  },
  dateStartText: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
  },
})

export default BalanceOperationInfo
