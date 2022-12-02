import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import LayoutMain from '../../componets/LayoutMain'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  scrollView: {
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  textSmallh1: {
    color: '#CBCBCB',
    fontSize: 15,
    fontWeight: '600',
    paddingLeft: 20,
    marginTop: 40,
  },
  textSmall: {
    color: '#CBCBCB',
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 20,
    marginTop: 20,
  },
  circleGradient: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#008f68',
    fontSize: 12,
  },
  dataProxyes: {
    width: '100%',
    alignItems: 'center',
  },
  dataProxyesButton: {
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    padding: 20,
    flex: 1,
    backgroundColor: '#1E2127',
    borderWidth: 1,
    borderColor: '#333842',
    borderRadius: 8,
    color: 'white',
    fontWeight: '400',
    fontSize: 14,
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

function MessageForm({ navigation }) {
  const [textValue, setTextValue] = useState('')
  return (
    <LayoutMain style={{ width: '100%' }}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>Тема</Text>
          <View style={styles.dataProxyes}>
            <View
              style={{
                width: '90%',
              }}>
              <TextInput
                style={{
                  backgroundColor: '#1E2127',
                  color: 'white',
                  height: 44,
                  minWidth: '90%',
                  borderRadius: 8,
                  borderWidth: 1,
                  paddingLeft: 20,
                  paddingTop: 14,
                  paddingBottom: 14,
                  borderColor: '#333842',
                }}
              />
            </View>
          </View>
          <Text style={styles.text}>Сообщение</Text>
          <View style={styles.dataProxyes}>
            <View
              style={{
                alignItems: 'center',
                width: '100%',
              }}>
              <TextInput
                style={{
                  backgroundColor: '#1E2127',
                  color: 'white',
                  minWidth: '90%',
                  borderRadius: 8,
                  borderWidth: 1,
                  paddingLeft: 20,
                  paddingTop: 14,
                  paddingBottom: 14,
                  borderColor: '#333842',
                  height: 200,
                }}
                multiline
                numberOfLines={4}
                onChangeText={event => setTextValue(event)}
                value={textValue}
              />
            </View>
          </View>
          <Text style={styles.textSmallh1}>Требования к паролю:</Text>
          <Text style={styles.textSmall}>
            1. 8 и более символов.
            {'\n'}
            2. Непохож на email.
            {'\n'}
            3. Прописные и строчые буквы.
            {'\n'}
            4. Хотя бы одна цифра.
          </Text>
        </View>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={styles.button}
        activeOpacity={0.8}
        onLongPress={() => {}}>
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

export default MessageForm
