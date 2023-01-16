import React, { useState } from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, Text, Dimensions } from 'react-native'

import LayoutMain from '../../componets/LayoutMain'
import AnswerLine from '../../componets/UI/Settings/AnswerLine'
import ProxiesSearch from '../../image/Svg/ProxiesSearch'

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

function AnswerQuastion({ navigation }) {
  const [valueProxy, setValueProxy] = useState('')
  const [question, setQuestion] = useState([
    {
      id: 1,
      title: 'что такое прокси словыми словами',
      discripton: 'описание',
      status: false,
    },
    {
      id: 2,
      title: 'В ЧЕМ ОТЛИЧИЕ IPV4 И IPV6 ПРОКСИ? \nЧТО ЛУЧШЕ?',
      discripton: 'описание',
      status: false,
    },
    {
      id: 3,
      title: 'Что такое прокси простыми словами',
      discripton: 'описание',
      status: false,
    },
    {
      id: 4,
      title: 'В ЧЕМ ОТЛИЧИЕ IPV4 И IPV6 ПРОКСИ? \n ЧТО ЛУЧШЕ?',
      discripton:
        'Отличие IPv4 тем что все сайты работают с данным протоколом. А с IPv6 работают не все сайты. Вы можете проверить работу сайта на IPv6 подключение пройдя по этой ссылки: https://proxy-checker.net/site-IPv6 -support/ iPv6 более подвергается банам. В основном все берут IPv4.',
      status: false,
    },
    {
      id: 5,
      title: 'Что такое прокси простыми словами',
      discripton: 'описание',
      status: false,
    },
    {
      id: 6,
      title: 'В ЧЕМ ОТЛИЧИЕ IPV4 И IPV6 ПРОКСИ?\nЧТО ЛУЧШЕ?',
      discripton: 'описание',
      status: false,
    },
    {
      id: 7,
      title: 'Что такое прокси простыми словами',
      discripton: 'описание',
      status: false,
    },
    {
      id: 8,
      title: 'В ЧЕМ ОТЛИЧИЕ IPV4 И IPV6 ПРОКСИ?\nЧТО ЛУЧШЕ?',
      discripton: 'описание',
      status: false,
    },
    {
      id: 9,
      title: 'Что такое прокси простыми словами',
      discripton: 'описание',
      status: false,
    },
    {
      id: 10,
      title: 'В ЧЕМ ОТЛИЧИЕ IPV4 И IPV6 ПРОКСИ? \n ЧТО ЛУЧШЕ?',
      discripton:
        'Отличие IPv4 тем что все сайты работают с данным протоколом. А с IPv6 работают не все сайты. Вы можете проверить работу сайта на IPv6 подключение пройдя по этой ссылки: https://proxy-checker.net/site-IPv6 -support/ iPv6 более подвергается банам. В основном все берут IPv4.',
      status: false,
    },
    {
      id: 11,
      title: 'Что такое прокси простыми словами',
      discripton: 'описание',
      status: false,
    },
    {
      id: 12,
      title: 'В ЧЕМ ОТЛИЧИЕ IPV4 И IPV6 ПРОКСИ?\nЧТО ЛУЧШЕ?',
      discripton: 'описание',
      status: false,
    },
    {
      id: 13,
      title: 'Что такое прокси простыми словами',
      discripton: 'описание',
      status: false,
    },
    {
      id: 14,
      title: 'В ЧЕМ ОТЛИЧИЕ IPV4 И IPV6 ПРОКСИ?\nЧТО ЛУЧШЕ?',
      discripton: 'описание',
      status: false,
    },
  ])
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity
            style={styles.balanceIcon}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Message')}>
            <Text style={{ color: '#FAC637', fontWeight: '600', fontSize: 15 }}>Написать нам</Text>
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
            placeholder="Найти ответы"
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
              {question.map(quest => (
                // eslint-disable-next-line react/jsx-key
                <AnswerLine navigation={navigation} quest={quest} setQuastion={setQuestion} />
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </LayoutMain>
  )
}

export default AnswerQuastion
