import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import CountrySlot from '../componets/CountrySlot'
import LayoutMain from '../componets/LayoutMain'
import HeaderTintBack from '../image/Svg/HeaderTintBack'
import alphavit from '../utils/alphavit'

function Countreis({ navigation, route }) {
  const languageGet = useSelector(res => res.textReducer.languages_get.language)
  const countryDiscription = useSelector(res => res.countryDiscriptionReducer.country)
  const countreisList = useSelector(res => res.countryOrderReducer.country)
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
  const proxyText = useSelector(res => res.textReducer.order?.payload)
  const [selectedCountryShort, setSelectedCountryShort] = useState(route.params.selectedCountryShort)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> {proxyText?.buttons?.b2}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {CountryByAlphavitArray.map(item => {
            let firstRender = true
            return countryMockFullName.map((country, index) => {
              if (country.name_local[0].toLowerCase() == item.toLowerCase()) {
                const countrySlotComponent = (
                  <CountrySlot
                    item={item}
                    key={country.code}
                    country={country}
                    selectedCountryShort={selectedCountryShort}
                    setSelectedCountryShortOff={route.params.setSelectedCountryShort}
                    setSelectedCountryOff={route.params.setSelectedCountry}
                    setSelectedCountryShort={setSelectedCountryShort}
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
      </SafeAreaView>
      <TouchableOpacity onPress={navigation.goBack} style={styles.button} activeOpacity={0.8}>
        <SuperEllipseMaskView
          radius={{
            topLeft: 12,
            topRight: 12,
            bottomRight: 12,
            bottomLeft: 12,
          }}
          style={styles.buttonInner}>
          <Text style={styles.buttonText}>{proxyText?.buttons?.b1}</Text>
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
  headerLeftTintContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftTintText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
})

export default Countreis
