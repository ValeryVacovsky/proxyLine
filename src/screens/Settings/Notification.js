import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View, Pressable } from 'react-native'
import LayoutMain from '../../componets/LayoutMain'
import DarkRadioUncheked from '../../image/Svg/DarkRadioUncheked'
import LightRadioUncheked from '../../image/Svg/LightRadioUncheked'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'
import NotificationIcon from '../../image/Svg/NotificationIcon'

function Notification({ navigation }) {
  const [notification, setNotification] = useState(false)
  const text = useSelector(res => res.textReducer.settings.payload)
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
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainInfo}>
          <View style={styles.descriptionContainer}>
            <View style={styles.notificationContainer}>
              <NotificationIcon />
            </View>
            <Text style={styles.descriptionText}>{text?.texts?.t34 || 'Push-уведомлений'}</Text>
          </View>
          <View style={styles.radioButtonContainer}>
            {notification ? (
              <Pressable hitSlop={25} onPress={() => setNotification(false)}>
                <DarkRadioUncheked />
              </Pressable>
            ) : (
              <Pressable hitSlop={25} onPress={() => setNotification(true)}>
                <LightRadioUncheked />
              </Pressable>
            )}
          </View>
        </View>
      </SafeAreaView>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  mainInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 17,
    marginLeft: 33,
  },
  notificationContainer: {
    marginRight: 23,
  },
  radioButtonContainer: {
    marginRight: 20,
  },
  descriptionText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
    top: 2,
  },
})

export default Notification
