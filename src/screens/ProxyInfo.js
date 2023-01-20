import React, { useMemo, useRef, useState, useCallback } from 'react'
import { ScrollView, StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Pressable } from 'react-native'
import LayoutMain from '../componets/LayoutMain'
import InfoCopyIcon from '../image/Svg/InfoCopyIcon'
import ProxyInfoChange from '../image/Svg/ProxyInfoChange'
import ReadTrash from '../image/Svg/ReadTrash'
import FlagUsaSmall from '../image/Svg/FlagUsaSmall'
import BottomSheetForm from '../componets/BottomSheetForm'
import BottomSheetCopy from '../componets/UI/ProxyUI/BottomSheetCopy'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 20,
  },
  Chips: {
    width: '90%',
    marginLeft: 20,
  },
})

function ProxyInfo({ navigation }) {
  const sheetRef = useRef(null)
  const [, setIsOpen] = useState(false)
  const snapPoints = useMemo(() => ['15%'], [])
  const [copy] = useState(false)

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index)
    setIsOpen(false)
  }, [])
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close()
  }, [])
  const handelOpenCopy = text => {
    // eslint-disable-next-line react/no-unescaped-entities
    setChildrenItem(<BottomSheetCopy handleClosePress={handleClosePress}>Скопировано "{text}"</BottomSheetCopy>)
    handleSnapPress(0)
    setTimeout(() => {
      handleClosePress()
    }, 3000)
  }
  const [childrenItem, setChildrenItem] = useState(
    <BottomSheetCopy handleClosePress={handleClosePress}>Скопировано</BottomSheetCopy>,
  )
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <Pressable activeOpacity={0.7} hitSlop={50}>
          <ReadTrash />
        </Pressable>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain style={{ width: '100%' }}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.text}>Данные прокси</Text>
            <View style={styles.dataProxyes}>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: '#1E2127',
                  marginBottom: 1,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 17,
                    paddingTop: 17,
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>ID заказа</Text>
                  <Text style={{ fontWeight: '700', fontSize: 14, color: 'white' }}>4829002398</Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: '#1E2127',
                  marginBottom: 1,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 17,
                    paddingTop: 17,
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Страна</Text>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '600', fontSize: 13, color: 'white', marginRight: 6 }}>
                      United States of America
                    </Text>
                    <FlagUsaSmall width={16} height={13} />
                  </View>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: '#1E2127',
                  marginBottom: 1,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 17,
                    paddingTop: 17,
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Версия</Text>
                  <Text style={{ fontWeight: '700', fontSize: 14, color: 'white' }}>IPv6</Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: '#1E2127',
                  marginBottom: 1,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 17,
                    paddingTop: 17,
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>IP</Text>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '700', fontSize: 14, color: 'white', marginRight: 10 }}>192.0.0.1</Text>
                    <Pressable
                      activeOpacity={0.8}
                      hitSlop={15}
                      onPress={() => {
                        handelOpenCopy('192.0.0.1')
                      }}>
                      <InfoCopyIcon />
                    </Pressable>
                  </View>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: '#1E2127',
                  marginBottom: 1,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 17,
                    paddingTop: 17,
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Port</Text>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '700', fontSize: 14, color: 'white', marginRight: 10 }}>11594</Text>
                    <Pressable
                      activeOpacity={0.8}
                      hitSlop={15}
                      onPress={() => {
                        handelOpenCopy('11594')
                      }}>
                      <InfoCopyIcon />
                    </Pressable>
                  </View>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: '#1E2127',
                  marginBottom: 1,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 17,
                    paddingTop: 17,
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Логин</Text>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '700', fontSize: 14, color: 'white', marginRight: 10 }}>gJgsaH</Text>
                    <Pressable
                      activeOpacity={0.8}
                      hitSlop={15}
                      onPress={() => {
                        handelOpenCopy('gJgsaH')
                      }}>
                      <InfoCopyIcon />
                    </Pressable>
                  </View>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: '#1E2127',
                  marginBottom: 1,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 17,
                    paddingTop: 17,
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Пароль</Text>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '700', fontSize: 14, color: 'white', marginRight: 10 }}>MsUpsas62</Text>
                    <Pressable
                      activeOpacity={0.8}
                      hitSlop={15}
                      onPress={() => {
                        handelOpenCopy('MsUpsas62')
                      }}>
                      <InfoCopyIcon />
                    </Pressable>
                  </View>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: '#1E2127',
                  marginBottom: 1,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 17,
                    paddingTop: 17,
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Тип</Text>
                  <Text style={{ fontWeight: '700', fontSize: 14, color: 'white' }}>HTTP</Text>
                </View>
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
                activeOpacity={0.8}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 13,
                    color: '#FAC637',
                    paddingBottom: 18,
                    paddingTop: 18,
                  }}>
                  Проверить прокси
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>Дата</Text>
            <View styles={styles.Data}>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: '#1E2127',
                  marginBottom: 1,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 17,
                    paddingTop: 17,
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Заказ от</Text>
                  <Text style={{ fontWeight: '700', fontSize: 14, color: 'white' }}>09.09.2022, 12:33</Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: '#1E2127',
                  marginBottom: 1,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 17,
                    paddingTop: 17,
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Окончание</Text>
                  <Text style={{ fontWeight: '700', fontSize: 14, color: 'white' }}>09.12.2022, 12:33</Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: '#1E2127',
                  marginBottom: 1,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 17,
                    paddingTop: 17,
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Осталось</Text>
                  <Text style={{ fontWeight: '700', fontSize: 14, color: 'white' }}>1 месяц 10 дней</Text>
                </View>
              </View>
            </View>
            <View style={styles.chipsContainer}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginRight: 20,
                }}>
                <Text style={styles.text}>Разрешенные IP</Text>
                <ProxyInfoChange />
              </View>
              <View style={styles.Chips}>
                <View>
                  <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#333842',
                        alignItems: 'center',
                        borderRadius: 30,
                        marginTop: 20,
                        marginRight: 10,
                      }}
                      activeOpacity={0.8}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 13,
                          color: 'white',
                          paddingBottom: 6,
                          paddingTop: 6,
                          paddingRight: 12,
                          paddingLeft: 12,
                        }}>
                        192.168.0.1
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#333842',
                        alignItems: 'center',
                        borderRadius: 30,
                        marginTop: 20,
                        marginRight: 10,
                      }}
                      activeOpacity={0.8}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 13,
                          color: 'white',
                          paddingBottom: 6,
                          paddingTop: 6,
                          paddingRight: 12,
                          paddingLeft: 12,
                        }}>
                        192.168.0.1
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#333842',
                        alignItems: 'center',
                        borderRadius: 30,
                        marginTop: 20,
                        marginRight: 10,
                      }}
                      activeOpacity={0.8}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 13,
                          color: 'white',
                          paddingBottom: 6,
                          paddingTop: 6,
                          paddingRight: 12,
                          paddingLeft: 12,
                        }}>
                        192.168.0.1
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginRight: 20,
                }}>
                <Text style={styles.text}>Теги</Text>
                <ProxyInfoChange />
              </View>
              <View style={styles.Chips}>
                <View>
                  <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'rgba(61, 204, 58, 0.1)',
                        alignItems: 'center',
                        borderRadius: 30,
                        marginTop: 20,
                        marginRight: 10,
                      }}
                      activeOpacity={0.8}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 13,
                          color: '#3FA53D',
                          paddingBottom: 6,
                          paddingTop: 6,
                          paddingRight: 12,
                          paddingLeft: 12,
                        }}>
                        Тестовые
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'rgba(222, 168, 30, 0.1)',
                        alignItems: 'center',
                        borderRadius: 30,
                        marginTop: 20,
                        marginRight: 10,
                      }}
                      activeOpacity={0.8}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 13,
                          color: '#FAC637',
                          paddingBottom: 6,
                          paddingTop: 6,
                          paddingRight: 12,
                          paddingLeft: 12,
                        }}>
                        Лучшие прокси
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'rgba(61, 204, 58, 0.1)',
                        alignItems: 'center',
                        borderRadius: 30,
                        marginTop: 20,
                        marginRight: 10,
                      }}
                      activeOpacity={0.8}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 13,
                          color: '#3FA53D',
                          paddingBottom: 6,
                          paddingTop: 6,
                          paddingRight: 12,
                          paddingLeft: 12,
                        }}>
                        Тестовые
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'rgba(61, 204, 58, 0.1)',
                        alignItems: 'center',
                        borderRadius: 30,
                        marginTop: 20,
                        marginRight: 10,
                      }}
                      activeOpacity={0.8}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 13,
                          color: '#3FA53D',
                          paddingBottom: 6,
                          paddingTop: 6,
                          paddingRight: 12,
                          paddingLeft: 12,
                        }}>
                        Тестовые
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {copy && (
        <BottomSheetForm
          navigation={navigation}
          sheetRef={sheetRef}
          snapPoints={snapPoints}
          setIsOpen={setIsOpen}
          handleClosePress={handleClosePress}>
          {childrenItem}
        </BottomSheetForm>
      )}
    </LayoutMain>
  )
}

export default ProxyInfo
