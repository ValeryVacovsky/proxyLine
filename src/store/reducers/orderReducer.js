import React from 'react'
import CloudProxyIcon from '../../image/Svg/CloudProxyIcon'
import PeopleIconProxy from '../../image/Svg/PeopleIconProxy'
import ServerProxyIcon from '../../image/Svg/ServerProxyIcon'

const initialState = {
  ProxyList: [
    {
      id: 1,
      proxyType: 'v4 Shared',
      discription: 'Подходит для любых целей и сайтов',
      days: '5 дней',
      price: 0.6,
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
  ],
}

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_STATUS':
      return { authStatus: action.payload }
    default:
      return state
  }
}
