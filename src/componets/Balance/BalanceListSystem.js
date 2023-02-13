import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

function BalanceListSystem({ name, data, navigation, amount, handelOpenCopy, mayGo }) {
  const dataNav = { ...data, amount: amount }
  const handlePress = () => {
    mayGo ? navigation.navigate('BalanceMethod', { dataNav }) : handelOpenCopy()
  }
  return (
    <TouchableOpacity style={styles.mainContainer} activeOpacity={0.8} onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.summeContainer}>
          <View style={styles.summe}>
            <Text style={{ color: '#CBCBCB', fontWeight: '600', fontSize: 13 }}>{name}</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>{name}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    width: '100%',
    zIndex: 0,
    marginTop: 11,
  },
  summeContainer: {
    borderRadius: 14,
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    marginBottom: 1,
    width: '100%',
  },
  summe: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
})

export default BalanceListSystem
