import React, { useEffect, useState } from 'react';
import {
  View, ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LayoutMain from '../componets/LayoutMain';
import ProxyTariff from '../componets/ProxyTariff';
import UserNavigation from '../componets/UserNavigation';
import CloudProxyIcon from '../image/Svg/CloudProxyIcon';
import HeaderProxy from '../image/Svg/HeaderProxy';
import PeopleIconProxy from '../image/Svg/PeopleIconProxy';
import ServerProxyIcon from '../image/Svg/ServerProxyIcon';
import getBalance from '../api/getBalance';

const ProxyList = [
  {
    id: 1,
    proxyType: 'v4 Shared',
    discription: 'Подходит для любых целей и сайтов',
    days: '5 дней',
    price: 0.60,
    handDesription: 'Используется до 3-х человек',
    icon: <PeopleIconProxy />,
  },
  {
    id: 2,
    proxyType: 'v4 Индвидуальные',
    discription: 'Подходит для любых целей и сайтов',
    days: '5 дней',
    price: 0.88,
    handDesription: 'Выдается в одни руки',
    icon: <CloudProxyIcon />,
  },
  {
    id: 3,
    proxyType: 'v6 / 32',
    discription: 'Подходит для любых целей и сайтов',
    days: '5 дней',
    price: 1.22,
    handDesription: 'Выдается в одни руки',
    icon: <ServerProxyIcon />,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  navContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  balanceIcon: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 15,
    alignItems: 'center',
  },
});

function Proxy({ navigation }) {
  const [balance, setBalance] = useState({ balance: null });
  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('@token');
      const id = await AsyncStorage.getItem('@id');
      const data = await getBalance(`${id}_${token}`);
      await setBalance(data.data);
    };
    fetchData();
  }, []);
  console.log(123, balance);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity
            style={styles.balanceIcon}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Balance')}
          >
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 15 }}>
              $
              {' '}
              {balance.balance}
            </Text>
            <HeaderProxy style={{ bottom: 1, marginLeft: 3 }} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, balance]);
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {ProxyList.map(
            (proxy) => (
              <ProxyTariff
                key={proxy.id}
                proxy={proxy}
                ProxyList={ProxyList}
                navigation={navigation}
              />
            ),
          )}
        </ScrollView>
      </SafeAreaView>
      <View style={styles.navContainer}>
        <UserNavigation status="Proxy" navigation={navigation} />
      </View>
    </LayoutMain>

  );
}

export default Proxy;
