import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  container2: {
    alignItems: 'center',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 11,
  },
  TrackMarkComponent: {
    width: 2,
    height: 14,
    backgroundColor: '#FAC637',
    borderRadius: 2,
    shadowColor: '#FAC637',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  handDesription: {
    backgroundColor: '#FAC637',
    top: '7%',
    position: 'relative',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 14,
    paddingRight: 14,
    shadowColor: '#FAC637',
    shadowOffset: { width: 3, height: 20 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    zIndex: 1,
  },
  handDesriptionText: {
    alignItems: 'center',
    fontWeight: '600',
    fontSize: 12,
    color: '#0F1218',
  },
  topBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 0,
    border: 2,
    borderBottomColor: 'white',
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    marginBottom: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 21,
    paddingBottom: 14,
  },
  proxyTypeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  discriptionText: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
  },
  centerBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 0,
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
    marginBottom: 1,
  },
  daysText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  priceText: {
    color: 'white',
    fontWeight: '700',
  },
  buttomInner: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  buttomInnerText: {
    fontWeight: '600',
    color: '#FAC637',
    paddingTop: 14,
    paddingBottom: 14,
    fontSize: 13,
  },
})

function ProxyTariff({ navigation, proxy }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <SuperEllipseMaskView radius={8} style={styles.handDesription}>
          <Text style={styles.handDesriptionText}>{proxy.handDesription}</Text>
        </SuperEllipseMaskView>
        <SuperEllipseMaskView
          radius={{
            topLeft: 12,
            topRight: 12,
          }}
          style={styles.topBlock}>
          <View>
            <Text style={styles.proxyTypeText}>
              IP
              {proxy.proxyType}
            </Text>
            <Text style={styles.discriptionText}>{proxy.discription}</Text>
          </View>
          <View>{proxy.icon}</View>
        </SuperEllipseMaskView>
        <View style={styles.centerBlock}>
          <View>
            <Text style={styles.daysText}>{proxy.days}</Text>
          </View>
          <View>
            <Text
              style={styles.priceText}
              onPress={() => {
                navigation.navigate('Balance')
              }}>
              $ {proxy.price}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Order', { proxy })}
          style={styles.buttomInner}
          activeOpacity={0.8}>
          <Text style={styles.buttomInnerText}>Подробнее</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProxyTariff
