import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

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
  topBlockContainer: {
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    marginBottom: 1,
    width: '100%',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    alignItems: 'center',
  },
  bottomBlockContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  bottomBlockText: {
    fontWeight: '600',
    color: '#FAC637',
    paddingTop: 14,
    paddingBottom: 14,
    fontSize: 13,
  },
  topBlockInfo: {
    display: 'flex',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  topBlockDollarText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 20,
  },
  topBlockBalanceText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 40,
    marginLeft: 10,
  },
})

function BalanceTopTable({ balance }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <View style={styles.topBlockContainer}>
          <View style={styles.topBlockInfo}>
            <Text style={styles.topBlockDollarText}>$</Text>
            <Text style={styles.topBlockBalanceText}>{balance}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bottomBlockContainer} activeOpacity={0.8}>
          <Text style={styles.bottomBlockText}>Пополнить</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BalanceTopTable
