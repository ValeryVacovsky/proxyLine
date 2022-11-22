import React from 'react';
import {
  View, ScrollView, StyleSheet, SafeAreaView,
} from 'react-native';
import LayoutMain from '../componets/LayoutMain';
import ProxyTariff from '../componets/ProxyTariff';
import UserNavigation from '../componets/UserNavigation';
import CloudProxyIcon from '../image/Svg/CloudProxyIcon';
import PeopleIconProxy from '../image/Svg/PeopleIconProxy';
import ServerProxyIcon from '../image/Svg/ServerProxyIcon';

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
});

function Proxy({ navigation }) {
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
