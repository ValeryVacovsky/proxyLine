/* eslint-disable max-len */
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'

import HeaderTintBack from '../../image/Svg/HeaderTintBack'

import LayoutAuth from '../../components/LayoutAuth'

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
          <HeaderTintBack style={styles.headerLeftIcon} />
          <Text style={styles.headerLeftTintText}> {authText?.buttons?.b4}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutAuth>
      <View>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.scrollViewItemsContainer}>
              {Object.values(agreement)?.map(ofert => {
                return (
                  <Text style={styles.agreementText} key={ofert}>
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
            <Text style={styles.buttonText}>{authText?.buttons?.b5}</Text>
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
  scrollViewItemsContainer: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  agreementText: {
    color: 'white',
    marginBottom: 15,
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
  headerLeftIcon: {
    bottom: 1,
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

export default Agreement
