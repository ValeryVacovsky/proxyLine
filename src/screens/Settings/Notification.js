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
          <HeaderTintBack style={{ bottom: 1 }} />
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
            <View style={{ marginRight: 23 }}>
              <NotificationIcon />
            </View>
            <Text style={styles.descriptionText}>{text?.texts?.t34 || 'Push-уведомлений'}</Text>
          </View>
          <View style={{ marginRight: 20 }}>
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
  descriptionText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
    top: 2,
  },
})

export default Notification
