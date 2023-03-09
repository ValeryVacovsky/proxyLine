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
}) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const languageGet = useSelector(res => res.textReducer.languages_get.language)
  const countryDiscription = useSelector(res => res.countryDiscriptionReducer.country)
  const [excludeStatusOut, setExcludeStatusOut] = useState(false)
  const countreisList = useSelector(res => res.countryOrderReducer.country)
  const country = ['ru', 'us', 'fr', 'de']
  const countryExclude = ['ru', 'us', 'fr', 'de']
  const handlePress = item => {
    setFilters(prevState =>
      prevState.countries.includes(item)
        ? {
            ...prevState,
            countries: prevState.countries.filter(active => active !== item),
          }
        : { ...prevState, countries: prevState.countries.concat(item) },
    )
    handleClosePress()
  }
  const handlePressExclude = item => {
    setFilters(prevState =>
      prevState.countries_exclude.includes(item)
        ? {
            ...prevState,
            countries_exclude: prevState.countries_exclude.filter(active => active !== item),
          }
        : { ...prevState, countries_exclude: prevState.countries_exclude.concat(item) },
    )
    handleClosePress()
  }
  const handleOpenBottomSheet = () => {
    handleSnapPress(2)
    setChildrenItem(
      <BottomSheetDateCountries
        countreisList={countreisList}
        handleClosePress={handleClosePress}
        countries={countries}
        setFilters={setFilters}
        excludeStatusOut={excludeStatusOut}
        setExcludeStatusOut={setExcludeStatusOut}
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
        {!excludeStatusOut
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
          : countryExclude.map(item => (
              <TouchableOpacity
                key={item}
                style={{
                  backgroundColor: countriesExclude.includes(item) ? '#EC3641' : 'rgba(236, 54, 65, 0.1)',
                  alignItems: 'center',
                  borderRadius: 30,
                  marginTop: 10,
                  marginRight: 10,
                }}
                activeOpacity={0.8}
                onPress={() => handlePressExclude(item)}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 13,
                    color: countriesExclude.includes(item) ? '#0F1218' : '#EC3641',
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
