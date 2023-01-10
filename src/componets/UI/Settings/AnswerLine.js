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

function AnswerLine({ navigation, quest }) {
  const [status, setStatus] = useState(false)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity
            style={styles.balanceIcon}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Balance')}>
            <Text style={{ color: '#FAC637', fontWeight: '600', fontSize: 15 }}>Аккаунт</Text>
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation])

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
          <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>{quest.title}</Text>
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
          <Text style={{ fontWeight: '400', fontSize: 13, color: 'white' }}>{quest.discripton}</Text>
        </View>
      )}
    </View>
  )
}

export default AnswerLine
