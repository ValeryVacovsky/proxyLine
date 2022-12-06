import React from 'react'
import { ScrollView, StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
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
})

function ChangePassword({ navigation }) {
  return (
    <LayoutMain style={{ width: '100%' }}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.text}>Новый пароль</Text>
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
                    height: 44,
                    minWidth: '90%',
                    marginBottom: 14,
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
            <Text style={styles.text}>Повторить новый пароль</Text>
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
            <View style={styles.dataProxyesButton}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#1E2127',
                  width: '90%',
                  alignItems: 'center',
                  borderRadius: 12,
                  marginTop: 20,
                }}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Settings')}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 13,
                    color: '#FAC637',
                    paddingBottom: 18,
                    paddingTop: 18,
                  }}>
                  Применить
                </Text>
              </TouchableOpacity>
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
        </ScrollView>
      </SafeAreaView>
    </LayoutMain>
  )
}

export default ChangePassword
