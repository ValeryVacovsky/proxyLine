import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import LayoutMain from '../../componets/LayoutMain'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const Colors = {
  danger: {
    back: 'rgba(236, 54, 65, 0.1)',
    color: '#EC3641',
  },
  warning: {
    back: 'rgba(246, 186, 64, 0.1)',
    color: '#F6BA40',
  },
  success: {
    back: 'rgba(97, 198, 123, 0.1)',
    color: '#61C67B',
  },
  primary: {
    back: 'rgba(35, 107, 246, 0.1)',
    color: '#236BF6',
  },
}

function Tags({ navigation }) {
  const [text, setText] = useState({})
  const balanceText = useSelector(res => res.textReducer.settings)
  useEffect(() => {
    setText(balanceText.payload)
  }, [balanceText])
  return (
    <LayoutMain style={{ width: '100%', height: '100%' }}>
      <View
        style={{
          display: 'flex',
          marginHorizontal: 20,
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <ScrollView
          style={{
            width: '100%',
            marginTop: 24,
          }}>
          <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <View
              style={{
                paddingTop: 6,
                paddingBottom: 7,
                paddingLeft: 12,
                paddingRight: 12,
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: Colors.danger.back,
                borderRadius: 30,
                marginRight: 5,
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontWeight: '400', fontSize: 13, lineHeight: 15, marginRight: 5 }}>x</Text>
              <Text style={{ color: Colors.danger.color, fontWeight: '400', fontSize: 13, lineHeight: 15 }}>
                Тестовое
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ width: '100%', marginBottom: 24 }}>
          <TextInput
            style={{
              backgroundColor: '#1E2127',
              paddingHorizontal: 10,
              paddingVertical: 15,
              color: 'white',
              fontWeight: '600',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#333842',
              marginTop: 14,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#FAC637',
              width: '100%',
              height: 50,
              borderRadius: 12,
              marginTop: 14,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: '#0F1218', fontWeight: '600', fontSize: 13, lineHeight: 15 }}>
              {text?.buttons?.b1}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({})

export default Tags
