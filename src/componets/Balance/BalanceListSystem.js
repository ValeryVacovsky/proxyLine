import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StyleSheet } from 'react-native'

function BalanceListSystem({ name, data, navigation, amount, handelOpenCopy, mayGo, setAmount }) {
  const dataNav = { ...data, amount: amount }
  const handleMove = () => {
    navigation.navigate('BalanceMethod', { dataNav })
    setTimeout(() => {
      setAmount('')
    }, 400)
  }
  const handlePress = () => {
    mayGo ? handleMove() : handelOpenCopy()
  }
  return (
    <TouchableOpacity style={styles.mainContainer} activeOpacity={0.8} onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.summeContainer}>
          <View style={styles.summe}>
            <Text style={styles.rightText}>{name}</Text>
            <View style={styles.rightTextCOntainer}>
              <Image style={{ width: 110, height: 24 }} source={{ uri: data.logo_path_2 }} />
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
    marginBottom: 20,
  },
  container: {
    alignItems: 'center',
    width: '100%',
    zIndex: 0,
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
    alignItems: 'center',
  },
  leftText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 13,
  },
  rightTextCOntainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  rightText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
})

export default BalanceListSystem
