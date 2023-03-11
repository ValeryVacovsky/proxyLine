import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import LayoutMain from '../../componets/LayoutMain'
import { ScrollView } from 'react-native-gesture-handler'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import DarkRadioUncheked from '../../image/Svg/DarkRadioUncheked'
import LightRadioUncheked from '../../image/Svg/LightRadioUncheked'
import { flagByShortName } from '../../common/flagByShortName'
import { addLanguageStatus } from '../../store/reducers/textReducer'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'
import getAllTexts from '../../common/getAllTexts'

function ChangeLanguage({ navigation }) {
  const text = useSelector(res => res.textReducer.settings.payload)
  const languageGet = useSelector(res => res.textReducer.languages_get.language)
  const countryDiscription = useSelector(res => res.countryDiscriptionReducer.country)
  const dispatch = useDispatch()
  const [countriesShort, setCountriesShort] = useState([])
  const balanceText = useSelector(res => res.textReducer.languages)
  const countrySelected = useSelector(res => res.textReducer.languages_get.language)
  useEffect(() => {
    setCountriesShort(balanceText.payload.languages)
  }, [balanceText])
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b2}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  const handleChange = country => {
    dispatch(addLanguageStatus(country))
    getAllTexts(dispatch, country)
  }
  return (
    <LayoutMain style={{ width: '100%' }}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ marginTop: 25 }}>
          {countriesShort?.map(country => {
            return (
              <View style={styles.countryContianer} key={country}>
                <View style={styles.countryItem}>
                  <View style={styles.countryItemInfo}>
                    <View style={styles.countryItemFlag}>{flagByShortName[country]}</View>
                    <Text style={styles.countryItemText}>{countryDiscription[languageGet][country]}</Text>
                  </View>
                  <Pressable hitSlop={25} activeOpacity={1} onPress={() => handleChange(country)}>
                    {countrySelected !== country ? <DarkRadioUncheked /> : <LightRadioUncheked />}
                  </Pressable>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  countryContianer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    marginBottom: 4,
  },
  countryItem: {
    marginHorizontal: 20,
    paddingBottom: 16,
    paddingTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countryItemInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryItemFlag: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  countryItemText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 14,
    lineHeight: 15,
  },
})

export default ChangeLanguage
