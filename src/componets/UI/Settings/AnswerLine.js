import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import VectorClose from '../../../image/Svg/VectorClose'
import VectorOpen from '../../../image/Svg/VectorOpen'

function AnswerLine({ quest }) {
  const [status, setStatus] = useState(false)
  const handlePress = () => {
    setStatus(!status)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingLine} activeOpacity={0.8} onPress={handlePress}>
        <View style={styles.setting}>
          <Text style={styles.mainText}>{quest.split('/')[0]}</Text>
          {!status ? <VectorClose /> : <VectorOpen />}
        </View>
      </TouchableOpacity>
      {status && (
        <View style={styles.statusContianer}>
          <Text style={styles.statusText}>{quest.split('/')[1]}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#1E2127',
    marginBottom: 1,
  },
  setting: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 17,
    paddingTop: 17,
    alignItems: 'center',
    width: '90%',
  },
  settingLine: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1E2127',
  },
  mainText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#CBCBCB',
  },
  statusContianer: {
    width: '90%',
    paddingBottom: 14,
    paddingRight: 20,
  },
  statusText: {
    fontWeight: '400',
    fontSize: 13,
    color: 'white',
  },
})

export default AnswerLine
