import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import VectorClose from '../../../image/Svg/VectorClose'
import VectorOpen from '../../../image/Svg/VectorOpen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
})

function AnswerLine({ quest }) {
  const [status, setStatus] = useState(false)
  console.log(quest)

  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#1E2127',
        marginBottom: 1,
      }}>
      <TouchableOpacity style={styles.settingLine} activeOpacity={0.8} onPress={() => setStatus(!status)}>
        <View style={styles.setting}>
          <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>{quest.split('/')[0]}</Text>
          {!status ? <VectorClose /> : <VectorOpen />}
        </View>
      </TouchableOpacity>
      {status && (
        <View
          style={{
            width: '90%',
            paddingBottom: 14,
            paddingRight: 20,
          }}>
          <Text style={{ fontWeight: '400', fontSize: 13, color: 'white' }}>{quest.split('/')[1]}</Text>
        </View>
      )}
    </View>
  )
}

export default AnswerLine
