import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import ExcludeOff from '../../../../image/Svg/ExcludeOff'
import ExcludeOn from '../../../../image/Svg/ExcludeOn'

function BottomSheetIps({ handleClosePress, setIps, allowedIP }) {
  const [excludeStatus, setExcludeStatus] = useState(false)
  const handlePress = () => {
    handleClosePress()
  }
  const hendleExcludeStatus = () => {
    setExcludeStatus(prev => !prev)
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topTextLeft}>Разрешенные IP</Text>
        <TouchableOpacity style={styles.topRightTextContainer} activeOpacity={0.8} onPress={hendleExcludeStatus}>
          {excludeStatus ? <ExcludeOn /> : <ExcludeOff />}
          <Text style={styles.topTextRight}>Исключить</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollViewContainer}></ScrollView>
      <TouchableOpacity style={styles.bottomButton} onPress={handlePress} activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>Добавить</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0F1218',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topContainer: {
    width: '90%',
    marginTop: 33,
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  topTextLeft: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  topTextRight: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
    marginLeft: 5,
  },
  topRightTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollViewContainer: {
    height: '100%',
    width: '100%',
  },
  bottomButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginBottom: 33,
    borderRadius: 12,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
})

export default BottomSheetIps
