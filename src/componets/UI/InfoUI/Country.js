import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { flagByShortName } from '../../../common/flagByShortName'
import { useSelector } from 'react-redux'

function Country({ countryName, text }) {
  const languageGet = useSelector(res => res.textReducer.languages_get.language)
  const countryDiscription = useSelector(res => res.countryDiscriptionReducer.country)
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.bigText}>{text?.t2}</Text>
        <View style={styles.smallTextContainer}>
          <Text style={styles.smallText}>{countryDiscription[languageGet][countryName]}</Text>
          <View style={styles.flagIcon}>{flagByShortName[countryName]}</View>
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
  bigText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#CBCBCB',
  },
  smallTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallText: {
    fontWeight: '600',
    fontSize: 13,
    color: 'white',
    marginRight: 6,
  },
  flagIcon: {
    width: 16,
    height: 13,
  },
})

export default Country
