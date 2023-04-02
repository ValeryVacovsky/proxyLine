import React from 'react'
import { View, StyleSheet } from 'react-native'
import TopInfoCountry from '../UI/MainUI/TopInfoCountry'
import TopInfoIp from '../UI/MainUI/TopInfoIp'

const TopInfo = ({ mainText, Ip, statusConnect, flagByShortName, langugeMain, countryDiscription, languageGet }) => {
  return (
    <View style={styles.container}>
      <TopInfoIp mainText={mainText} Ip={Ip} statusConnect={statusConnect} />
      <TopInfoCountry
        statusConnect={statusConnect}
        flagByShortName={flagByShortName}
        langugeMain={langugeMain}
        countryDiscription={countryDiscription}
        languageGet={languageGet}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})

export default TopInfo
