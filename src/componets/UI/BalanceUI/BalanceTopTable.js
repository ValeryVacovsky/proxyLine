import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

function BalanceTopTable({ balance }) {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        style={styles.secondContainer}
        colors={['#383e4a', '#191c20', '#191c20']}
        start={{ x: 0.1, y: 0.2 }}
        end={{ x: 0.2, y: 0.9 }}>
        <View style={styles.topBlockContainer}>
          <View style={styles.topBlockInfo}>
            <Text style={styles.topBlockDollarText}>$</Text>
            <Text style={styles.topBlockBalanceText}>{balance / 100}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bottomBlockContainer} activeOpacity={0.8}>
          <Text style={styles.bottomBlockText}>Пополнить</Text>
        </TouchableOpacity>
      </LinearGradient>
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
    backgroundColor: 'white',
    borderRadius: 14,
    borderWidth: 1,
    padding: 1,
  },
  topBlockContainer: {
    backgroundColor: '#191c20',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    alignItems: 'center',
  },
  bottomBlockContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#191c20',
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

export default BalanceTopTable
