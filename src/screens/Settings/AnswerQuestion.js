import React, { useState } from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, Text, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

import HeaderTintBack from '../../image/Svg/HeaderTintBack'
import ProxiesSearch from '../../image/Svg/ProxiesSearch'

import LayoutMain from '../../components/LayoutMain'
import AnswerLine from '../../components/UI/Settings/AnswerLine'

const heightOffScreen = Dimensions.get('window').height

function AnswerQuestion({ navigation }) {
  const text = useSelector(res => res.textReducer.settings.payload)
  const general = useSelector(res => res.textReducer.faq.payload.texts)

  const [valueProxy, setValueProxy] = useState('')
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Message')}>
            <Text style={styles.headerRightText}>{text?.texts?.t3 && 'Написать нам'}</Text>
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={styles.headerLeftIcon} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b2}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
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
              {Object.keys(general).map(key => (
                <AnswerLine quest={general[key]} key={key} />
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
  headerLeftIcon: {
    bottom: 1,
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
    fontSize: 14,
  },
  headerRightContainer: {
    marginLeft: 15,
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

export default AnswerQuestion
