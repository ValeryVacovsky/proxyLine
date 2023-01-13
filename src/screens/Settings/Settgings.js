import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Dimensions } from 'react-native'
import LayoutMain from '../../componets/LayoutMain'
import UserNavigation from '../../componets/UserNavigation'
import CheckProxy from '../../image/Svg/CheckProxy'
import CheckSpeed from '../../image/Svg/CheckSpeed'
import SettingsVector from '../../image/Svg/SettingsVector'
import SettingsVector2 from '../../image/Svg/SettingsVector2'

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
  s_navContainer: {
    alignItems: 'center',
    width: '95%',
    left: 10,
  },
})

function Settgings({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity
            style={styles.balanceIcon}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Account')}>
            <Text style={{ color: '#FAC637', fontWeight: '600', fontSize: 15 }}>Аккаунт</Text>
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation])
  let heightOffScreen = Dimensions.get('window').height
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container} activeOpacity={0.8}>
        <View style={styles.checker}>
          <TouchableOpacity style={styles.check} activeOpacity={0.8}>
            <View>
              <Text style={styles.textTop}>Проверка</Text>
              <Text style={styles.textTop}>скорости</Text>
            </View>
            <CheckSpeed />
          </TouchableOpacity>
          <TouchableOpacity style={styles.check} activeOpacity={0.8}>
            <View>
              <Text style={styles.textTop}>Проверка</Text>
              <Text style={styles.textTop}>прокси</Text>
            </View>
            <CheckProxy />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.settingLine}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AnwserQuaction')}>
          <View style={styles.setting}>
            <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Вопросы и ответы</Text>
            <SettingsVector />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingLine} activeOpacity={0.8} onPress={() => navigation.navigate('Message')}>
          <View style={styles.setting}>
            <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Написать нам</Text>
            <SettingsVector />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingLine} activeOpacity={0.8} onPress={() => {}}>
          <View style={styles.setting}>
            <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Больше возможностей</Text>
            <SettingsVector2 />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingLineBottom} activeOpacity={0.8}>
          <View style={styles.setting}>
            <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Версия Proxy Line</Text>
            <Text style={{ fontWeight: '700', fontSize: 14, color: 'white' }}>1.0.1</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={heightOffScreen > 700 ? styles.navContainer : styles.s_navContainer}>
        <UserNavigation status="Settings" navigation={navigation} />
      </View>
    </LayoutMain>
  )
}

export default Settgings
