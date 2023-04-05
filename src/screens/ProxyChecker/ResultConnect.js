import React from 'react'
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LayoutMain from '../../components/LayoutMain'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

function ResultConnect({ navigation, route }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.navigationLeftContainer}>
          <HeaderTintBack style={styles.headerLeftIcon} />
          <Text style={styles.navigationLeftText}> Назад</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {route.params.objectsArray.map(item => {
            return (
              <View style={styles.resultItemContainer} key={item.type}>
                <View style={styles.resultTopInfo}>
                  <View style={styles.resultTopInfoProxyLeft}>
                    <Text style={styles.resultTopInfoProxyIp}>{route.params.proxyInfo.ip}</Text>
                    <View style={styles.resultTopInfoProxyIdContainer}>
                      <Text style={styles.resultTopInfoProxyId}>{item.id}</Text>
                    </View>
                  </View>
                  <View style={styles.resultTopInfoProxyRight}>
                    <Text style={styles.resultTopInfoProxyRightText}>{item.type.toUpperCase()}</Text>
                  </View>
                </View>
                {item.valid ? (
                  <View style={styles.resultMainInfo}>
                    <View style={styles.resultMainInfoSpeed}>
                      <Text style={styles.textInfoDescription}>Скорость</Text>
                      <Text style={styles.textInfoCount}>{item.connection_time} сек</Text>
                    </View>
                    <View style={styles.resultMainInfoSpeed}>
                      <Text style={styles.textInfoDescription}>Время проверки</Text>
                      <Text style={styles.textInfoCount}>{item.elapsed} сек</Text>
                    </View>
                    <View style={styles.resultMainInfoSpeed}>
                      <Text style={styles.textInfoDescription}>Анонимность</Text>
                      <Text style={styles.textInfoCount}>Высокая</Text>
                    </View>
                  </View>
                ) : (
                  <View style={styles.resultNoneValidContainer}>
                    <Text style={styles.resultNoneValidText}>Невалидный</Text>
                  </View>
                )}
              </View>
            )
          })}
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
    marginBottom: 5,
    marginTop: 20,
  },
  resultItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  resultTopInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.06);',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 1,
  },
  resultTopInfoProxyLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  resultTopInfoProxyIp: {
    fontWeight: '700',
    color: 'white',
    fontSize: 18,
    lineHeight: 17,
    marginRight: 6,
  },
  resultTopInfoProxyIdContainer: {
    backgroundColor: '#333842',
    borderRadius: 20,
  },
  resultTopInfoProxyId: {
    marginHorizontal: 8,
    marginVertical: 4,
    color: 'white',
    fontWeight: '700',
    fontSize: 11,
  },
  resultTopInfoProxyRight: {
    backgroundColor: '#FAC637',
    borderRadius: 20,
  },
  resultTopInfoProxyRightText: {
    color: '#0F1218',
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontWeight: '700',
    fontSize: 11,
  },
  resultMainInfo: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.06);',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  resultMainInfoSpeed: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textInfoDescription: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 13,
  },
  textInfoCount: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  navigationLeftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftIcon: {
    bottom: 1,
  },
  navigationLeftText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
  resultNoneValidContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.06);',
    alignItems: 'center',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  resultNoneValidText: {
    color: '#C14645',
    fontWeight: '600',
    fontSize: 13,
    marginVertical: 14,
    marginHorizontal: 20,
  },
})

export default ResultConnect
