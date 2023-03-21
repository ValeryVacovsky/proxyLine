import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import BottomSheetDateCountries from './BottomSheet/BottomSheetDateCountries'
import { useSelector } from 'react-redux'

function CountriesItem({
  countries,
  setFilters,
  setChildrenItem,
  handleClosePress,
  handleSnapPress,
  countriesExclude,
  setCountryExclude,
}) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const languageGet = useSelector(res => res.textReducer.languages_get.language)
  const countryDiscription = useSelector(res => res.countryDiscriptionReducer.country)
  const countreisList = useSelector(res => res.countryOrderReducer.country)
  const [country, setCountry] = useState(['ru', 'us', 'fr', 'de'])
  const handlePress = item => {
    if (countries.includes(item) && !countriesExclude) {
      setCountryExclude(true)
    } else if (countries.includes(item) && countriesExclude) {
      setCountryExclude(false)
      setFilters(prevState =>
        prevState.countries.includes(item)
          ? {
              ...prevState,
              countries: prevState.countries.filter(active => active !== item),
            }
          : { ...prevState, countries: prevState.countries.concat(item) },
      )
    } else {
      setFilters(prevState =>
        prevState.countries.includes(item)
          ? {
              ...prevState,
              countries: prevState.countries.filter(active => active !== item),
            }
          : { ...prevState, countries: prevState.countries.concat(item) },
      )
    }
  }
  const handleOpenBottomSheet = () => {
    handleSnapPress(2)
    setChildrenItem(
      <BottomSheetDateCountries
        countreisList={countreisList}
        handleClosePress={handleClosePress}
        countries={countries}
        setCountry={setCountry}
        setFilters={setFilters}
        excludeStatusOut={countriesExclude}
        setExcludeStatusOut={setCountryExclude}
      />,
    )
  }
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>{text?.texts?.t15}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleOpenBottomSheet}>
          <View style={styles.textInfpContainer}>
            <Text style={styles.textInfo}>{text?.buttons?.b3}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.conuntryContainer}>
        {!countriesExclude
          ? country.map(item => (
              <TouchableOpacity
                key={item}
                style={{
                  backgroundColor: countries.includes(item) ? '#FAC637' : '#333842',
                  alignItems: 'center',
                  borderRadius: 30,
                  marginTop: 10,
                  marginRight: 10,
                }}
                activeOpacity={0.8}
                onPress={() => handlePress(item)}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 13,
                    color: countries.includes(item) ? '#0F1218' : 'white',
                    paddingBottom: 6,
                    paddingTop: 6,
                    paddingRight: 12,
                    paddingLeft: 12,
                  }}>
                  {countryDiscription[languageGet][item]}
                </Text>
              </TouchableOpacity>
            ))
          : country.map(item => (
              <TouchableOpacity
                key={item}
                style={{
                  backgroundColor: countries.includes(item) ? '#EC3641' : '#333842',
                  alignItems: 'center',
                  borderRadius: 30,
                  marginTop: 10,
                  marginRight: 10,
                }}
                activeOpacity={0.8}
                onPress={() => handlePress(item)}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 13,
                    color: countries.includes(item) ? '#0F1218' : 'white',
                    paddingBottom: 6,
                    paddingTop: 6,
                    paddingRight: 12,
                    paddingLeft: 12,
                  }}>
                  {countryDiscription[languageGet][item]}
                </Text>
              </TouchableOpacity>
            ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  textInfo: {
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
  },
  textInfpContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Chips: {
    width: '100%',
    marginBottom: 20,
  },
  conuntryContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default CountriesItem
