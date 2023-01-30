import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, SafeAreaView, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LayoutMain from '../../componets/LayoutMain'
import getBalance from '../../api/getBalance'
import BalanceTopTableSystems from '../../componets/UI/BalanceUI/BalanceTopTableSystems'

const methods = [
  {
    id: 40,
    name_en: 'Select a payment method on the aggregator page',
    name_ru: 'Выбрать способ платежа на странице агрегатора',
    icon_path: null,
    base: true,
  },
  {
    id: 41,
    name_en: 'VISA RUB',
    name_ru: 'VISA RUB',
    icon_path: 'https:///static/paymentmethods/card.svg',
    base: false,
  },
  {
    id: 42,
    name_en: 'VISA UAH',
    name_ru: 'VISA UAH',
    icon_path: 'https:///static/paymentmethods/card.svg',
    base: false,
  },
  {
    id: 43,
    name_en: 'MasterCard RUB',
    name_ru: 'MasterCard RUB',
    icon_path: 'https:///static/paymentmethods/card.svg',
    base: false,
  },
  {
    id: 44,
    name_en: 'MasterCard UAH',
    name_ru: 'MasterCard UAH',
    icon_path: 'https:///static/paymentmethods/card.svg',
    base: false,
  },
  {
    id: 45,
    name_en: 'MIR',
    name_ru: 'MIR',
    icon_path: 'https:///static/paymentmethods/card.svg',
    base: false,
  },
  {
    id: 46,
    name_en: 'QIWI Wallet',
    name_ru: 'QIWI Wallet',
    icon_path: 'https:///static/paymentmethods/qiwi.svg',
    base: false,
  },
  {
    id: 47,
    name_en: 'YooMoney',
    name_ru: 'YooMoney',
    icon_path: 'https:///static/paymentmethods/yoomoney.svg',
    base: false,
  },
  {
    id: 48,
    name_en: 'Steam Pay',
    name_ru: 'Steam Pay',
    icon_path: 'https:///static/paymentmethods/steampay.svg',
    base: false,
  },
  {
    id: 49,
    name_en: 'Perfect Money USD',
    name_ru: 'Perfect Money USD',
    icon_path: 'https:///static/paymentmethods/perfectmoney.svg',
    base: false,
  },
  {
    id: 50,
    name_en: 'Bitcoin',
    name_ru: 'Bitcoin',
    icon_path: 'https:///static/paymentmethods/bitcoin.svg',
    base: false,
  },
  {
    id: 51,
    name_en: 'Ethereum',
    name_ru: 'Ethereum',
    icon_path: 'https:///static/paymentmethods/ethereum.svg',
    base: false,
  },
  {
    id: 52,
    name_en: 'Litecoin',
    name_ru: 'Litecoin',
    icon_path: 'https:///static/paymentmethods/litecoin.svg',
    base: false,
  },
  {
    id: 53,
    name_en: 'USDT (ERC20)',
    name_ru: 'USDT (ERC20)',
    icon_path: 'https:///static/paymentmethods/usdt_erc.svg',
    base: false,
  },
  {
    id: 54,
    name_en: 'USDT (TRC20)',
    name_ru: 'USDT (TRC20)',
    icon_path: 'https:///static/paymentmethods/ustd_trc.svg',
    base: false,
  },
  {
    id: 55,
    name_en: 'Bitcoin Cash',
    name_ru: 'Bitcoin Cash',
    icon_path: 'https:///static/paymentmethods/bitcoincash.svg',
    base: false,
  },
  {
    id: 56,
    name_en: 'BNB',
    name_ru: 'BNB',
    icon_path: 'https:///static/paymentmethods/bnb.svg',
    base: false,
  },
  {
    id: 57,
    name_en: 'DASH',
    name_ru: 'DASH',
    icon_path: 'https:///static/paymentmethods/dash.svg',
    base: false,
  },
  {
    id: 58,
    name_en: 'Dogecoin',
    name_ru: 'Dogecoin',
    icon_path: 'https:///static/paymentmethods/dogecoin.svg',
    base: false,
  },
  {
    id: 59,
    name_en: 'Zcash',
    name_ru: 'Zcash',
    icon_path: 'https:///static/paymentmethods/zcash.svg',
    base: false,
  },
  {
    id: 60,
    name_en: 'Monero',
    name_ru: 'Monero',
    icon_path: 'https:///static/paymentmethods/monero.svg',
    base: false,
  },
  {
    id: 61,
    name_en: 'Ripple',
    name_ru: 'Ripple',
    icon_path: 'https:///static/paymentmethods/ripple.svg',
    base: false,
  },
  {
    id: 62,
    name_en: 'Shiba Inu',
    name_ru: 'Shiba Inu',
    icon_path: 'https:///static/paymentmethods/shibainu.svg',
    base: false,
  },
  {
    id: 63,
    name_en: 'Tron',
    name_ru: 'Tron',
    icon_path: 'https:///static/paymentmethods/tron.svg',
    base: false,
  },
  {
    id: 64,
    name_en: 'FKWallet RUB',
    name_ru: 'FKWallet RUB',
    icon_path: 'https:///static/paymentmethods/fkwallet.svg',
    base: false,
  },
  {
    id: 65,
    name_en: 'FKWallet USD',
    name_ru: 'FKWallet USD',
    icon_path: 'https:///static/paymentmethods/fkwallet.svg',
    base: false,
  },
  {
    id: 66,
    name_en: 'Online bank',
    name_ru: 'Online bank',
    icon_path: 'https:///static/paymentmethods/onlinebank.svg',
    base: false,
  },
]

function BalanceMethod({ navigation }) {
  const [balance, setBalance] = useState({ balance: null })
  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getBalance(dataProps)
      await setBalance(data.data)
    }
    fetchData()
  }, [])
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <BalanceTopTableSystems balance={balance.balance} navigation={navigation} />
        <Text style={styles.text}>Платежные системы</Text>
        <ScrollView style={styles.scrollView}>
          {methods.map(data => (
            <View key={data.id}>
              <Text>{data.name_en}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 20,
    marginTop: 18,
    marginBottom: 10,
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
})

export default BalanceMethod
