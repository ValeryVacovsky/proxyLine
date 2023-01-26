import React, { useState } from 'react'
import { ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import CountrySlot from '../componets/CountrySlot'
import LayoutMain from '../componets/LayoutMain'

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

function Countreis({ navigation, route }) {
  console.log(route.params.setSelectedCountry)
  const [selectedCountryShort, setSelectedCountryShort] = useState(route.params.selectedCountryShort)
  const [selectedCountry, setSelectedCountry] = useState(route.params.selectedCountry)
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {countreisList.map(country => {
            return (
              <CountrySlot
                key={country.code}
                country={country}
                selectedCountryShort={selectedCountryShort}
                setSelectedCountryShortOff={route.params.setSelectedCountryShort}
                selectedCountry={selectedCountry}
                setSelectedCountryOff={route.params.setSelectedCountry}
                setSelectedCountryShort={setSelectedCountryShort}
                setSelectedCountry={setSelectedCountry}
              />
            )
          })}
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('Order')} style={styles.button} activeOpacity={0.8}>
        <SuperEllipseMaskView
          radius={{
            topLeft: 12,
            topRight: 12,
            bottomRight: 12,
            bottomLeft: 12,
          }}
          style={styles.buttonInner}>
          <Text style={styles.buttonText}>Подтвердить</Text>
        </SuperEllipseMaskView>
      </TouchableOpacity>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: {
    marginTop: 20,
    width: '100%',
  },
  text: {
    fontSize: 42,
  },
  button: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
    position: 'absolute',
    bottom: '8%',
    zIndex: 1,
  },
  buttonInner: {
    backgroundColor: '#FAC637',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '90%',
    position: 'absolute',
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 13,
  },
})

export default Countreis
