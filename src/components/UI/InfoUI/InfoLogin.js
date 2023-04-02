import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import InfoCopyIcon from '../../../image/Svg/InfoCopyIcon'

function InfoLogin({ login, text, handelOpenCopy }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.bitText}>{text?.t6}</Text>
        <View style={styles.smallTextConatiner}>
          <Text style={styles.smallText}>{login}</Text>
          <Pressable
            activeOpacity={0.8}
            hitSlop={15}
            onPress={() => {
              handelOpenCopy(login)
            }}>
            <InfoCopyIcon />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1E2127',
    marginBottom: 1,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 17,
    paddingTop: 17,
    alignItems: 'center',
    width: '90%',
  },
  bitText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#CBCBCB',
  },
  smallTextConatiner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallText: {
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
    marginRight: 10,
  },
})

export default InfoLogin
