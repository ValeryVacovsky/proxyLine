import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { flagByShortName } from '../../../common/flagByShortName'

function Country({ countryName, text }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>{text?.t2}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontWeight: '600', fontSize: 13, color: 'white', marginRight: 6 }}>{countryName}</Text>
          <View style={{ width: 16, height: 13 }}>{flagByShortName[countryName]}</View>
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
})

export default Country
