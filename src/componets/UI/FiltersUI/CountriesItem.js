import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import VectorRightSmall from '../../../image/Svg/VectorRightSmall'
import BottomSheetDateCountries from './BottomSheet/BottomSheetDateCountries'

const countreisList = [
  {
    code: 'ru',
    name_en: 'Country ru',
    name_ru: 'Страна ru',
    name_local: 'Russian Federation',
    flag_url: 'https://proxydbtest.proxyline.net/media/CACHE/images/flags/ru/16202e2bc1fc5dfa7f5a01caf77f4145.png',
  },
  {
    code: 'us',
    name_en: 'Country us',
    name_ru: 'Страна us',
    name_local: 'United States of America',
    flag_url: 'https://proxydbtest.proxyline.net/media/CACHE/images/flags/us/c1a69567eb6f251be2e71926d4538c03.png',
  },
  {
    code: 'de',
    name_en: 'Country de',
    name_ru: 'Страна de',
    name_local: 'Deutchland',
    flag_url: 'https://proxydbtest.proxyline.net/media/CACHE/images/flags/de/047f6b477648d81364844e269262c1c0.png',
  },
  {
    code: 'fr',
    name_en: 'Country fr',
    name_ru: 'Страна fr',
    name_local: 'France',
    flag_url: 'https://proxydbtest.proxyline.net/media/CACHE/images/flags/fr/7d9ad5199ce3175f46f8fa6e1a4585c9.png',
  },
]

function CountriesItem({ countries, setFilters, setChildrenItem, handleClosePress, handleSnapPress, setIsOpen }) {
  const [country, setPorts] = useState(['ru', 'en', 'ch'])
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>Страны</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            handleSnapPress(1)
            setIsOpen(true)
            setChildrenItem(
              <BottomSheetDateCountries
                countreisList={countreisList}
                handleClosePress={handleClosePress}
                setIsOpen={setIsOpen}
              />,
            )
          }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.textInfo}>Выбрать</Text>
            <VectorRightSmall />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {country.map(item => (
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
            onPress={() => {
              setFilters(prevState =>
                prevState.countries.includes(item)
                  ? {
                      ...prevState,
                      countries: prevState.countries.filter(active => active !== item),
                    }
                  : { ...prevState, countries: prevState.countries.concat(item) },
              )
              handleClosePress()
            }}>
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
              {item}
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
    marginRight: 10,
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
})

export default CountriesItem
