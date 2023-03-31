import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import { useWindowDimensions } from 'react-native'
import RenderHtml from 'react-native-render-html'

import LayoutMain from '../../componets/LayoutMain'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

const heightOffScreen = Dimensions.get('window').height

function MessageForm({ navigation }) {
  const text = useSelector(res => res.textReducer.settings.payload)
  const [textValue, setTextValue] = useState('')
  const { width } = useWindowDimensions()

  const source = {
    html: `${text?.texts?.t10}`,
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={styles.headerLeftIcon} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b2}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain style={styles.layoutContainer}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>{text?.texts?.t11 || 'Тема'}</Text>
          <View style={styles.dataProxyes}>
            <View style={styles.inputThemeContianer}>
              <TextInput style={styles.inputTheme} />
            </View>
          </View>
          <Text style={styles.text}>{text?.texts?.t9 || 'Сообщение'}</Text>
          <View style={styles.dataProxyes}>
            <View style={styles.inputMessageContainer}>
              <TextInput
                style={StyleSheet.flatten([
                  styles.inputMessage,
                  {
                    height: heightOffScreen > 700 ? 200 : 150,
                  },
                ])}
                multiline
                numberOfLines={4}
                onChangeText={event => setTextValue(event)}
                value={textValue}
              />
            </View>
          </View>
          <ScrollView style={styles.scrollViewContainer}>
            <RenderHtml contentWidth={width} source={source} />
          </ScrollView>
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
          <Text style={styles.buttonText}>{text?.texts?.t15 && 'Отправить'}</Text>
        </SuperEllipseMaskView>
      </TouchableOpacity>
    </LayoutMain>
  )
}
const styles = StyleSheet.create({
  layoutContainer: {
    width: '100%',
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    paddingLeft: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  textSmall2: {
    color: '#CBCBCB',
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 20,
    marginTop: 20,
  },
  scrollViewContainer: {
    marginBottom: 400,
    marginHorizontal: 20,
  },
  dataProxyes: {
    width: '100%',
    alignItems: 'center',
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
  headerLeftIcon: {
    bottom: 1,
  },
  headerLeftTintText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
  inputThemeContianer: {
    width: '90%',
  },
  inputTheme: {
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
  },
  inputMessageContainer: {
    alignItems: 'center',
    width: '100%',
  },
  inputMessage: {
    backgroundColor: '#1E2127',
    color: 'white',
    minWidth: '90%',
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 14,
    paddingBottom: 14,
    borderColor: '#333842',
  },
})

export default MessageForm
