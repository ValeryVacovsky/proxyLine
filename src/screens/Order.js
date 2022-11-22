import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import LayoutMain from '../componets/LayoutMain';
import OrderItem from '../componets/OrderItem';
import CloudProxyIcon from '../image/Svg/CloudProxyIcon';
import PeopleIconProxy from '../image/Svg/PeopleIconProxy';
import ServerProxyIcon from '../image/Svg/ServerProxyIcon';

function Order({ navigation, route }) {
  const [currentProxyId, setCurrentProxyId] = useState(390);
  console.log(route.params.proxy.id);
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
  const startPos = (currentProxyId * (route.params.proxy.id - 1));
  return (
    <LayoutMain>
      <ScrollView
        horizontal
        contentContainerStyle={{ width: `${ProxyList.length * 100}%` }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={100}
        // decelerationRate="fast"
        pagingEnabled
        contentOffset={{ x: startPos }}
        disableIntervalMomentum
        onLayout={(event) => {
          const { layout } = event.nativeEvent;
          setCurrentProxyId(layout.width);
          console.log(currentProxyId);
        }}
      >
        {ProxyList.map((order) => <OrderItem navigation={navigation} order={order} />)}
      </ScrollView>
    </LayoutMain>

  );
}

export default Order;
