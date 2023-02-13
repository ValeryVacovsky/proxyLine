import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import LayoutMain from '../../componets/LayoutMain'
import { ScrollView } from 'react-native-gesture-handler'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import DarkRadioUncheked from '../../image/Svg/DarkRadioUncheked'
import LightRadioUncheked from '../../image/Svg/LightRadioUncheked'
import { flagByShortName } from '../../common/flagByShortName'
import { addLanguageStatus } from '../../store/reducers/textReducer'
import getAllTexts from '../../common/getAllTexts'

function ChangeLanguage() {
  const dispatch = useDispatch()
  const [countriesShort, setCountriesShort] = useState([])
  const balanceText = useSelector(res => res.textReducer.languages)
  const countrySelected = useSelector(res => res.textReducer.languages_get.language)
  useSelector(res => console.log(res.textReducer.languages_get))
  useEffect(() => {
    setCountriesShort(balanceText.payload.languages)
  }, [balanceText])
  // console.log('set', countriesShort, countrySelected)
  return (
    <LayoutMain style={{ width: '100%' }}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ marginTop: 25 }}>
          {countriesShort?.map(country => {
            return (
              <View
                style={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.06)', marginBottom: 4 }}
                key={country}>
                <View
                  style={{
                    marginHorizontal: 20,
                    paddingBottom: 16,
                    paddingTop: 16,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 20, height: 20, marginRight: 10 }}>{flagByShortName[country]}</View>
                    <Text style={{ fontWeight: '600', color: 'white', fontSize: 14, lineHeight: 15, maxWidth: '80%' }}>
                      {country}
                    </Text>
                  </View>
                  <Pressable
                    hitSlop={25}
                    activeOpacity={1}
                    onPress={() => {
                      dispatch(addLanguageStatus(country))
                      getAllTexts(dispatch, country)
                    }}>
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
})

export default ChangeLanguage
