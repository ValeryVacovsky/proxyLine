import React from 'react'
import { useSelector } from 'react-redux'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Dimensions } from 'react-native'
import LayoutMain from '../../componets/LayoutMain'
import UserNavigation from '../../componets/UserNavigation'
import CheckProxy from '../../image/Svg/CheckProxy'
import CheckSpeed from '../../image/Svg/CheckSpeed'
import SettingsVector from '../../image/Svg/SettingsVector'
import SettingsVector2 from '../../image/Svg/SettingsVector2'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

function Settgings({ navigation }) {
  const text = useSelector(res => res.textReducer.settings.payload)
  const handleNavigate = item => {
    navigation.navigate(item)
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity style={styles.balanceIcon} activeOpacity={0.8} onPress={() => handleNavigate('Account')}>
            <Text style={{ color: '#FAC637', fontWeight: '600', fontSize: 14 }}>{text?.texts?.t0}</Text>
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b1}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  const heightOffScreen = Dimensions.get('window').height
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container} activeOpacity={0.8}>
        <View style={styles.checker}>
          <TouchableOpacity style={styles.check} activeOpacity={0.8}>
            <View>
              <Text style={styles.textTop}>{text?.texts?.t1 && 'проверка'}</Text>
              <Text style={styles.textTop}>{text?.texts?.t1_1 && 'скорости'}</Text>
            </View>
            <CheckSpeed />
          </TouchableOpacity>
          <TouchableOpacity style={styles.check} activeOpacity={0.8}>
            <View>
              <Text style={styles.textTop}>{text?.texts?.t1 && 'проверка'}</Text>
              <Text style={styles.textTop}>{text?.texts?.t1_2 && 'прокси'}</Text>
            </View>
            <CheckProxy />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.settingLine} activeOpacity={0.8} onPress={() => handleNavigate('Confirm')}>
          <View style={styles.setting}>
            <Text style={styles.settingText}>{text?.texts?.t24}</Text>
            <SettingsVector />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingLine} activeOpacity={0.8} onPress={() => handleNavigate('Tags')}>
          <View style={styles.setting}>
            <Text style={styles.settingText}>{text?.texts?.t25}</Text>
            <SettingsVector />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingLine}
          activeOpacity={0.8}
          onPress={() => handleNavigate('AnwserQuaction')}>
          <View style={styles.setting}>
            <Text style={styles.settingText}>{text?.texts?.t2}</Text>
            <SettingsVector />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingLine} activeOpacity={0.8} onPress={() => handleNavigate('Message')}>
          <View style={styles.setting}>
            <Text style={styles.settingText}>{text?.texts?.t3 && 'Написать нам'}</Text>
            <SettingsVector />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingLine} activeOpacity={0.8} onPress={() => handleNavigate('Language')}>
          <View style={styles.setting}>
            <Text style={styles.settingText}>{text?.texts?.t6 && 'Язык'}</Text>
            <SettingsVector />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingLine} activeOpacity={0.8} onPress={() => {}}>
          <View style={styles.setting}>
            <Text style={styles.settingText}>{text?.texts?.t4 && 'Больше возможностей'}</Text>
            <SettingsVector2 />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingLineBottom} activeOpacity={0.8}>
          <View style={styles.setting}>
            <Text style={styles.settingText}>{text?.texts?.t5 && 'Версия'} Proxy Line</Text>
            <Text style={styles.settingTextVersion}>1.0.1</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={heightOffScreen > 700 ? styles.navContainer : styles.s_navContainer}>
        <UserNavigation status="Settings" navigation={navigation} />
      </View>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
  scrollContainer: {
    alignItems: 'center',
    top: '35%',
  },
  navContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  checker: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  check: {
    display: 'flex',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    width: '47%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 14,
  },
  textTop: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 14,
  },
  settingLine: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1E2127',
    marginBottom: 1,
  },
  settingLineBottom: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1E2127',
    marginTop: 10,
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
  settingText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#CBCBCB',
  },
  settingTextVersion: {
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
  s_navContainer: {
    alignItems: 'center',
    width: '95%',
    left: 10,
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

export default Settgings
