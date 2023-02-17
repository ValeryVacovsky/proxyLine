import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import CountryFilterSlot from '../CountriesUI/CountryFilterSlot'

function BottomSheetDateCountries({ handleClosePress, setIsOpen, countreisList }) {
  const [selectedCountryShort, setSelectedCountryShort] = useState('ru')
  const handlePress = () => {
    handleClosePress()
    setIsOpen(false)
  }
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topTextLeft}>Страны</Text>
        <Text style={styles.topTextRight}>Исключить</Text>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        {countreisList.map(item => {
          return (
            <CountryFilterSlot
              key={item.code}
              country={item}
              selectedCountryShort={selectedCountryShort}
              setSelectedCountryShort={setSelectedCountryShort}
            />
          )
        })}
      </ScrollView>
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
    fontWeight: '400',
    fontSize: 14,
  },
  scrollViewContainer: {
    height: '100%',
    width: '100%',
    marginBottom: 140,
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

export default BottomSheetDateCountries
