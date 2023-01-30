import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

function BalanceTopTableSystems({ balance }) {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        style={styles.secondContainer}
        colors={['#383e4a', '#191c20', '#191c20']}
        start={{ x: 0.1, y: 0.3 }}
        end={{ x: 0.2, y: 0.9 }}>
        <View style={styles.topBlockContainer}>
          <View style={styles.topBlockInfo}>
            <Text style={styles.topBlockDollarText}>$</Text>
            <Text style={styles.topBlockBalanceText}>{balance / 100}</Text>
          </View>
        </View>
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
    padding: 1,
  },
  topBlockContainer: {
    backgroundColor: '#191c20',
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  topBlockInfo: {
    display: 'flex',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 37,
    paddingBottom: 37,
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

export default BalanceTopTableSystems
