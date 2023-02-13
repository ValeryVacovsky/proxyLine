import React, { useState, useEffect } from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, Text, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

import LayoutMain from '../../componets/LayoutMain'
import AnswerLine from '../../componets/UI/Settings/AnswerLine'
import ProxiesSearch from '../../image/Svg/ProxiesSearch'

function AnswerQuastion({ navigation }) {
  const [text, setText] = useState({})
  const balanceText = useSelector(res => res.textReducer.settings)
  const general = useSelector(res => res.textReducer.general.payload.texts)
  useEffect(() => {
    setText(balanceText.payload)
  }, [balanceText])
  const [valueProxy, setValueProxy] = useState('')
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity
            style={styles.balanceIcon}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Message')}>
            <Text style={{ color: '#FAC637', fontWeight: '600', fontSize: 15 }}>
              {text?.texts?.t3 && 'Написать нам'}
            </Text>
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation])
  const heightOffScreen = Dimensions.get('window').height
  return (
    <LayoutMain>
      <View style={{ alignItems: 'center', display: 'flex' }}>
        <View
          style={{
            backgroundColor: '#1E2127',
            color: '#CBCBCB',
            height: 44,
            minWidth: '90%',
            marginBottom: 14,
            borderRadius: 8,
            borderWidth: 1,
            paddingLeft: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
          }}>
          <TextInput
            onFocus={() => {}}
            onBlur={() => {}}
            style={{ color: 'white', width: '80%', height: '100%', textAlign: 'center' }}
            onChangeText={setValueProxy}
            value={valueProxy}
            iconPosition="right"
            placeholder={text?.texts?.t8 && 'Найти ответ'}
            placeholderTextColor="#CBCBCB"
          />
          {valueProxy.length === 0 && (
            <ProxiesSearch
              style={
                heightOffScreen > 700 ? { position: 'absolute', left: '65%' } : { position: 'absolute', left: '68%' }
              }
            />
          )}
        </View>
        <SafeAreaView>
          <ScrollView style={styles.container}>
            <View style={{ width: '100%', alignItems: 'center', marginBottom: 120 }}>
              {Object.values(general).map(quest => (
                // eslint-disable-next-line react/jsx-key
                <AnswerLine navigation={navigation} quest={quest} />
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  setting: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 17,
    paddingTop: 17,
    alignItems: 'center',
    width: '90%',
  },
  settingLine: {
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#1E2127',
    marginBottom: 1,
  },
})

export default AnswerQuastion
