import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { flagByShortName } from '../common/flagByShortName'
import Sceleton from '../components/Sceleton/Sceleton'

function TestScreen() {
  const countryDiscription = useSelector(res => res.countryDiscriptionReducer.country)
  return (
    <View style={{ flex: 1, backgroundColor: 'grey', alignItems: 'center' }}>
      <Sceleton height={40} width={40} style={{ backgroundColor: 'red' }} />
      <ScrollView style={{ width: '100%' }}>
        {Object.keys(countryDiscription['ru']).map((item, index) => {
          return (
            <View key={item} style={{ width: '100%', height: 60, backgroundColor: 'black' }}>
              <View style={{ width: 48, height: 32 }}>{flagByShortName[item]}</View>
              <Text style={{ color: 'white' }}>
                {countryDiscription['ru'][item]} {index}
              </Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default TestScreen
