/* eslint-disable max-len */
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

import { useForm } from 'react-hook-form'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import LayoutAuth from '../../componets/LayoutAuth'

function Ofert({ navigation }) {
  const authText = useSelector(res => res.textReducer.auth.payload)
  const ofertText = useSelector(res => res.textReducer.public_ofert.payload.texts)

  const { handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const onSubmit = () => {
    navigation.navigate('Main')
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftContainer}>
          <HeaderTintBack style={styles.headerLeftIcon} />
          <Text style={styles.headerLeftText}>{authText?.buttons?.b4}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutAuth>
      <View style={styles.mainContainer}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.scrollViewItems}>
              {Object.values(ofertText)?.map(ofert => {
                return (
                  <Text style={styles.scrollViewText} key={ofert}>
                    {ofert}
                  </Text>
                )
              })}
            </View>
          </ScrollView>
        </SafeAreaView>
        <TouchableOpacity
          onPress={data => {
            handleSubmit(onSubmit(data))
          }}
          style={styles.buttonContainer}
          activeOpacity={0.8}>
          <SuperEllipseMaskView
            radius={{
              topLeft: 12,
              topRight: 12,
              bottomLeft: 12,
              bottomRight: 12,
            }}
            style={styles.buttonInner}>
            <Text style={styles.buttonText}>{authText?.texts?.b5}</Text>
          </SuperEllipseMaskView>
        </TouchableOpacity>
      </View>
    </LayoutAuth>
  )
}

const styles = StyleSheet.create({
  buttonInner: {
    backgroundColor: '#FAC637',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '88%',
    borderRadius: 12,
  },
  mainContainer: {
    marginTop: 25,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  scrollViewItems: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  scrollViewText: {
    color: 'white',
    marginBottom: 15,
  },
  text: {
    fontSize: 42,
  },
  headerLeftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftIcon: {
    bottom: 1,
  },
  headerLeftText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
  buttonContainer: {
    marginBottom: 25,
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: '#0F1218',
    fontWeight: '600',
    fontSize: 13,
  },
})

export default Ofert
