import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function BalanceClearTable({ text }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <View style={styles.calendarBlock}>
          <View style={styles.calendarCenter}>
            <Text style={styles.mainText}>{text?.texts?.t1}</Text>
            <Text style={styles.smallText}>{text?.texts?.t2}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  secondContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '90%',
    zIndex: 0,
    marginTop: 11,
  },
  calendarBlock: {
    backgroundColor: 'rgba(250, 198, 55, 0.2)',
    marginBottom: 1,
    width: '100%',
    borderRadius: 14,
    alignItems: 'center',
  },
  calendarCenter: {
    display: 'flex',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'column',
  },
  mainText: {
    color: '#FAC637',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 6,
  },
  smallText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 12,
  },
})

export default BalanceClearTable
