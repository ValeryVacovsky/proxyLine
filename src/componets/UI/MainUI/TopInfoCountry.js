import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const TopInfoCountry = ({ statusConect, flagByShortName, langugeMain, countryDiscription, languageGet }) => {
  return (
    <View style={styles.country}>
      {statusConect === 'on' && <Text style={styles.countryText}>{countryDiscription[languageGet][langugeMain]}</Text>}
      {statusConect === 'off' && <Text style={styles.countryText}>{countryDiscription[languageGet][langugeMain]}</Text>}
      {statusConect === 'none' && (
        <Text style={styles.countryText}>{countryDiscription[languageGet][langugeMain]}</Text>
      )}
      {statusConect === 'on' && <View style={styles.flagIconContainer}>{flagByShortName[langugeMain]}</View>}
      {statusConect === 'off' && <View style={styles.flagIconContainer}>{flagByShortName[langugeMain]}</View>}
      {statusConect === 'none' && <View style={styles.flagIconContainer}>{flagByShortName[langugeMain]}</View>}
    </View>
  )
}

const styles = StyleSheet.create({
  country: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryText: {
    paddingBottom: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    marginRight: 5,
    alignItems: 'center',
  },
  flagIconContainer: {
    bottom: 7,
    left: 5,
    width: 16,
    height: 13,
  },
})

export default TopInfoCountry
