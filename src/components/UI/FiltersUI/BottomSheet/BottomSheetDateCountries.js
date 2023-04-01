import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import CountryFilterSlot from '../CountriesUI/CountryFilterSlot'

import ExcludeOff from '../../../../image/Svg/ExcludeOff'
import ExcludeOn from '../../../../image/Svg/ExcludeOn'

import alphavit from '../../../../utils/alphavit'

function BottomSheetDateCountries({
  handleClosePress,
  countreisList,
  countries,
  setFilters,
  excludeStatusOut,
  setExcludeStatusOut,
}) {
  const languageGet = useSelector(res => res.textReducer.languages_get.language)
  const countryDiscription = useSelector(res => res.countryDiscriptionReducer.country)
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [excludeStatus, setExcludeStatus] = useState(excludeStatusOut)
  const [countriesState, setCountriesState] = useState(countries)
  const [countriesStateExlude, setCountriesStateExlude] = useState(countries)

  const handlePress = () => {
    handleClosePress()
  }

  const hendleExcludeStatus = () => {
    setExcludeStatus(prev => !prev)
    setExcludeStatusOut(prev => !prev)
  }

  const countryMockFullName = countreisList.map(item => {
    return {
      code: item.code,
      name_local: countryDiscription[languageGet][item.code],
    }
  })

  const CountryByAlphavit = {}

  alphavit[languageGet].map(item => {
    const arry = []
    countryMockFullName.map(country => {
      if (country.name_local[0].toLowerCase() == item.toLowerCase()) {
        arry.push(country.name_local)
      }
    })
    if (arry.length > 0) {
      CountryByAlphavit[item] = arry
    }
  })

  const CountryByAlphavitArray = Object.keys(CountryByAlphavit)

  return (
    <View style={styles.container}>
      <View style={styles.topBar} />
      <View style={styles.topContainer}>
        <Text style={styles.topTextLeft}>{text?.texts?.t15}</Text>
        <TouchableOpacity style={styles.topRightTextContainer} activeOpacity={0.8} onPress={hendleExcludeStatus}>
          {excludeStatus ? <ExcludeOn /> : <ExcludeOff />}
          <Text style={styles.topTextRight}>{text?.buttons?.b2}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        {CountryByAlphavitArray.map(item => {
          let firstRender = true
          return countryMockFullName.map((country, index) => {
            if (country.name_local[0].toLowerCase() == item.toLowerCase()) {
              const countrySlotComponent = (
                <CountryFilterSlot
                  item={item}
                  key={item.code}
                  countreiItem={country}
                  setFilters={setFilters}
                  excludeStatus={excludeStatus}
                  countriesState={countriesState}
                  setCountriesState={setCountriesState}
                  countriesStateExlude={countriesStateExlude}
                  setCountriesStateExlude={setCountriesStateExlude}
                  firstRender={firstRender}
                  lastRender={index == countryMockFullName.length - 1}
                />
              )
              firstRender = false
              return countrySlotComponent
            }
          })
        })}
      </ScrollView>
      <TouchableOpacity style={styles.bottomButton} onPress={handlePress} activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>{text?.buttons?.b1}</Text>
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
  topBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 60,
    height: 3,
    borderRadius: 40,
    marginTop: 10,
  },
})

export default BottomSheetDateCountries
