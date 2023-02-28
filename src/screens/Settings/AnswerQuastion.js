import React, { useState } from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, Text, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

import LayoutMain from '../../componets/LayoutMain'
import AnswerLine from '../../componets/UI/Settings/AnswerLine'
import ProxiesSearch from '../../image/Svg/ProxiesSearch'

function AnswerQuastion({ navigation }) {
  const text = useSelector(res => res.textReducer.settings.payload)
  const general = useSelector(res => res.textReducer.general.payload.texts)

  const [valueProxy, setValueProxy] = useState('')
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Message')}>
            <Text style={styles.headerRightText}>{text?.texts?.t3 && 'Написать нам'}</Text>
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> Настройки</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  const heightOffScreen = Dimensions.get('window').height
  return (
    <LayoutMain>
      <View style={styles.mainContainer}>
        <View style={styles.topInputContianer}>
          <TextInput
            onFocus={() => {}}
            onBlur={() => {}}
            style={styles.topInput}
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
            <View style={styles.answerContainer}>
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
  mainContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  container: {
    flex: 1,
  },
  answerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 120,
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
  headerRightText: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 15,
  },
  topInputContianer: {
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
  },
  topInput: {
    color: 'white',
    width: '80%',
    height: '100%',
    textAlign: 'center',
  },
})

export default AnswerQuastion
