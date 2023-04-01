import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import LogoIntroWhite from '../../../image/Svg/LogoIntroWhite'

const MainLogo = ({ heightOffScreen, navigation }) => {
  const handleNAvigate = () => {
    navigation.navigate('Test')
  }
  return (
    <TouchableOpacity style={heightOffScreen > 700 ? styles.header : styles.smallHeader} onPress={handleNAvigate}>
      <LogoIntroWhite width={88} height={16} style={styles.mainLogo} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 132,
    height: 24,
  },
  header: {
    marginBottom: 70,
    paddingTop: 50,
    marginTop: 25,
  },
  smallHeader: {
    marginBottom: 35,
    paddingTop: 50,
    marginTop: 5,
  },
})

export default MainLogo
