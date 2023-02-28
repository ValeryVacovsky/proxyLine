/* eslint-disable max-len */
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

import { useForm } from 'react-hook-form'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import LayoutAuth from '../../componets/LayoutAuth'

function Agreement({ navigation }) {
  const authText = useSelector(res => res.textReducer.auth.payload)
  const agreement = useSelector(res => res.textReducer.privacy_policy.payload.texts)
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
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> Назад</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutAuth>
      <View>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
              {Object.values(agreement)?.map(ofert => {
                return (
                  <Text style={{ color: 'white', marginBottom: 15 }} key={ofert}>
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
          style={{
            marginBottom: 25,
            alignItems: 'center',
            borderRadius: 12,
          }}
          activeOpacity={0.8}>
          <SuperEllipseMaskView
            radius={{
              topLeft: 12,
              topRight: 12,
              bottomLeft: 12,
              bottomRight: 12,
            }}
            style={styles.buttonInner}>
            <Text style={{ color: '#0F1218', fontWeight: '600', fontSize: 13 }}>{authText?.texts?.b5}</Text>
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
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
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
})

export default Agreement
