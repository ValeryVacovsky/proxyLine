import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import LayoutAuth from '../componets/LayoutAuth';
import FlagUsaSmall from '../image/Svg/FlagUsaSmall';
import FlagUseBig from '../image/Svg/FlagUseBig';
import FrameGreen from '../image/Svg/FrameGreen';
import FrameRed from '../image/Svg/FrameRed';
import FrameYellow from '../image/Svg/FrameYellow';
import FlagRusSmall from '../image/Svg/FlagRusSmall';

import LogoIntroWhite from '../image/Svg/LogoIntroWhite';
import VectorRight from '../image/Svg/VectorRight';
import UserNavigation from '../componets/UserNavigation';

import ButtonOff from '../image/Svg/ButtonOff';
// import postAuth from "../api";

function Main({ navigation }) {
  const [statusConect, setStatusConect] = useState('off');
  // postUserAuth.then((reuest) => {
  //     console.log(reuest)
  // })
  // postAuth.then((response) => {
  //     console.log(response.data);
  //   });
  const styles = StyleSheet.create({
    sectionContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#0F1218',
    },
    backgroundImage: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    mainLogo: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 132,
      height: 24,
    },
    header: {
      marginBottom: 70,
      paddingTop: 20,
      marginTop: 25,
    },
    authForm: {
      flex: 1,
      paddingLeft: 30,
      paddingRight: 30,
      justifyContent: 'space-between',
      width: '100%',
    },
    label: {
      color: 'white',
      marginBottom: 8,
      fontSize: 16,
      lineHeight: 15,
      fontWeight: '500',
    },
    buttonInner: {
      backgroundColor: '#FAC637',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
    },
    authLogo: {
      paddingBottom: 30,
      textAlign: 'center',
      color: 'white',
      fontWeight: '600',
      fontSize: 22,
    },
  });
  return (
    <LayoutAuth>
      <View style={styles.header}>
        <LogoIntroWhite width={88} height={16} style={styles.mainLogo} />
      </View>
      <View style={styles.authForm}>
        <View style={{ marginBottom: 40, display: 'flex' }}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                paddingBottom: 5, textAlign: 'center', color: 'white', fontWeight: '400', fontSize: 15,
              }}
              onPress={() => navigation.navigate('Auth')}
            >
              Ваш IP
            </Text>
            {statusConect === 'on' && (
            <Text style={{
              paddingBottom: 5, textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 24,
            }}
            >
              136.117.121.183
            </Text>
            )}
            {statusConect === 'off' && (
            <Text style={{
              paddingBottom: 5, textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 24,
            }}
            >
              192.0.0.1
            </Text>
            )}
            {statusConect === 'none' && (
            <Text style={{
              paddingBottom: 5, textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 24,
            }}
            >
              192.0.0.1
            </Text>
            )}
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              {statusConect === 'on' && (
              <Text style={{
                paddingBottom: 15, textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 24,
              }}
              >
                <Text
                  style={{
                    textAlign: 'center', color: 'white', fontWeight: '600', fontSize: 14, marginRight: 5, alignItems: 'center',
                  }}
                  onPress={() => navigation.navigate('Auth')}
                >
                  United States of America
                </Text>
              </Text>
              )}
              {statusConect === 'off' && (
              <Text style={{
                paddingBottom: 15, textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 24,
              }}
              >
                <Text
                  style={{
                    textAlign: 'center', color: 'white', fontWeight: '600', fontSize: 14, marginRight: 5, alignItems: 'center',
                  }}
                  onPress={() => navigation.navigate('Auth')}
                >
                  Россия
                </Text>
              </Text>
              )}
              {statusConect === 'none' && (
              <Text
                style={{
                  paddingBottom: 15, textAlign: 'center', color: 'white', fontWeight: '600', fontSize: 14, marginRight: 5, alignItems: 'center',
                }}
                onPress={() => navigation.navigate('Auth')}
              >
                Россия
              </Text>
              )}
              {statusConect === 'on' && <FlagUsaSmall width={16} height={13} style={{ bottom: 5, left: 5 }} />}
              {statusConect === 'off' && <FlagRusSmall width={16} height={13} style={{ bottom: 5, left: 5 }} />}
              {statusConect === 'none' && <FlagRusSmall width={16} height={13} style={{ bottom: 5, left: 5 }} />}
            </View>
          </View>
          <View style={{ marginBottom: 50, alignItems: 'center' }}>
            {statusConect === 'on' && (
              <TouchableOpacity onPress={() => setStatusConect('off')}>
                <Image
                  source={require('../image/ButtonOn.png')}
                  style={{ width: 160, height: 160, alignItems: 'center' }}
                  onPress={() => setStatusConect('on')}
                />
              </TouchableOpacity>
            )}
            {statusConect === 'off' && (
              <TouchableOpacity onPress={() => setStatusConect('on')}>
                <ButtonOff />
              </TouchableOpacity>
            )}
            {statusConect === 'none' && (
              <TouchableOpacity onPress={() => setStatusConect('on')}>

                <Image
                  source={require('../image/ButtonNone.png')}
                  style={{
                    width: 160,
                    height: 160,
                    alignItems: 'center',
                    padding: 40,
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#1E2127',
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 20,
                paddingRight: 14,
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,

              }}
              onPress={() => setStatusConect('none')}
            >
              <View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  {statusConect === 'on' && <FrameGreen />}
                  {statusConect === 'off' && <FrameRed />}
                  {statusConect === 'none' && <FrameYellow />}
                  {statusConect === 'on' && (
                    <Text style={{
                      color: 'white', marginLeft: 10, fontWeight: '600', fontSize: 15,
                    }}
                    >
                      Подключено
                    </Text>
                  )}
                  {statusConect === 'off' && (
                    <Text style={{
                      color: 'white', marginLeft: 10, fontWeight: '600', fontSize: 15,
                    }}
                    >
                      Не подключено
                    </Text>
                  )}
                  {statusConect === 'none' && (
                    <Text style={{
                      color: 'white', marginLeft: 10, fontWeight: '600', fontSize: 15,
                    }}
                    >
                      Нет подключения
                    </Text>
                  )}
                </View>
                {statusConect === 'on' && <Text style={{ color: '#CBCBCB', fontWeight: '400', fontSize: 12 }}>Скорость подключения</Text>}
                {statusConect === 'off' && <Text style={{ color: '#CBCBCB', fontWeight: '400', fontSize: 12 }}>Нажмите на кнопку чтобы подключить</Text>}
                {statusConect === 'none' && <Text style={{ color: '#CBCBCB', fontWeight: '400', fontSize: 12 }}>Нажмите на кнопку чтобы подключить</Text>}
              </View>
              {statusConect === 'on' && (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>12.18 </Text>
                <Text style={{ color: 'white', fontSize: 13, fontWeight: '600' }}>Mbit/s</Text>
              </View>
              )}

            </TouchableOpacity>
            <View>
              {statusConect === 'off' && (
              <TouchableOpacity
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  backgroundColor: '#1E2127',
                  paddingTop: 15,
                  paddingBottom: 15,
                  paddingLeft: 20,
                  paddingRight: 14,
                  marginTop: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomRightRadius: 14,
                  borderBottomStartRadius: 14,
                }}
                onPress={() => navigation.navigate('Proxy')}
              >
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                >
                  <FlagUseBig />
                  <View style={{ marginLeft: 14 }}>
                    <View>
                      <Text style={{ color: 'white', lineHeight: 14, fontWeight: '600' }}>United States of America</Text>
                    </View>
                    <View style={{
                      display: 'flex', flexDirection: 'row', fontWeight: '400', fontSize: 13, alignItems: 'center',
                    }}
                    >
                      <Text style={{
                        color: '#0F1218',
                        paddingBottom: 4,
                        paddingTop: 4,
                        paddingLeft: 8,
                        paddingRight: 8,
                        backgroundColor: '#FAC637',
                        borderRadius: 20,
                        fontWeight: '700',
                        fontSize: 11,
                        marginBottom: 6,
                      }}
                      >
                        IPv4
                      </Text>
                      <Text style={{
                        color: 'white', marginLeft: 6, fontWeight: '400', fontSize: 13,
                      }}
                      >
                        136.117.121.183
                      </Text>
                    </View>
                  </View>
                </View>
                <VectorRight color="#636363" />
              </TouchableOpacity>
              )}
              {statusConect === 'on' && (
              <TouchableOpacity
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  backgroundColor: '#1E2127',
                  paddingTop: 15,
                  paddingBottom: 15,
                  paddingLeft: 20,
                  paddingRight: 14,
                  marginTop: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomRightRadius: 14,
                  borderBottomStartRadius: 14,
                }}
                onPress={() => navigation.navigate('Proxy')}
              >
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                >
                  <FlagUseBig />
                  <View style={{ marginLeft: 14 }}>
                    <View>
                      <Text style={{ color: 'white', lineHeight: 14, fontWeight: '600' }}>United States of America</Text>
                    </View>
                    <View style={{
                      display: 'flex', flexDirection: 'row', fontWeight: '400', fontSize: 13, alignItems: 'center',
                    }}
                    >
                      <Text style={{
                        color: '#0F1218',
                        paddingBottom: 4,
                        paddingTop: 4,
                        paddingLeft: 8,
                        paddingRight: 8,
                        backgroundColor: '#FAC637',
                        borderRadius: 20,
                        fontWeight: '700',
                        fontSize: 11,
                        marginBottom: 6,
                      }}
                      >
                        IPv4
                      </Text>
                      <Text style={{
                        color: 'white', marginLeft: 6, fontWeight: '400', fontSize: 13,
                      }}
                      >
                        136.117.121.183
                      </Text>
                    </View>
                  </View>
                </View>
                <VectorRight color="#636363" />
              </TouchableOpacity>
              )}
              {statusConect === 'none' && (
              <TouchableOpacity
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  backgroundColor: '#1E2127',
                  paddingTop: 15,
                  paddingBottom: 15,
                  paddingLeft: 20,
                  paddingRight: 14,
                  marginTop: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomRightRadius: 14,
                  borderBottomStartRadius: 14,
                }}
                onPress={() => setStatusConect('on')}
              >
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                >
                  <Text style={{ display: 'flex', justifyContent: 'center', color: '#FAC637' }}>Купить прокси</Text>
                </View>
                {statusConect === 'on' && <VectorRight color="#636363" />}
                {statusConect === 'off' && <VectorRight color="#636363" />}
              </TouchableOpacity>
              )}
            </View>
            {statusConect === 'on' && (
              <View style={{
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 3,
                paddingBottom: 4,
                backgroundColor: 'rgba(99, 99, 99, 0.30)',
                width: '40%',
                left: '30%',
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}
              >
                <Text style={{ fontWeight: '600', fontSize: 12, color: '#F5F5F5' }}>
                  5 дней 6 часов
                </Text>
              </View>
            )}
            {statusConect === 'off' && (
              <View style={{
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 3,
                paddingBottom: 4,
                backgroundColor: 'rgba(99, 99, 99, 0.30)',
                width: '40%',
                left: '30%',
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}
              >
                <Text style={{ fontWeight: '600', fontSize: 12, color: '#F5F5F5' }}>
                  5 дней 6 часов
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 25, width: '90%', alignItems: 'center' }}>
        <UserNavigation style={{ marginBottom: 25 }} />
      </View>
    </LayoutAuth>

  );
}

export default Main;
