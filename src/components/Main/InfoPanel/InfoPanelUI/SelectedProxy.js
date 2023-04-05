import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'

import VectorRight from '../../../../image/Svg/VectorRight'

const SelectedProxy = ({
  flagByShortName,
  statusConnect,
  mainText,
  navigation,
  languageGet,
  countryDiscription,
  selectedProxy,
}) => {
  const handleNavigateToProxies = item => {
    navigation.navigate(item)
  }
  return (
    <View>
      {statusConnect === 'none' ? (
        <SuperEllipseMaskView
          radius={{
            bottomRight: 12,
            bottomLeft: 12,
          }}>
          <TouchableOpacity
            style={styles.selectedProxyContainer}
            onPress={() => handleNavigateToProxies('Proxy')}
            activeOpacity={0.8}>
            <View style={styles.infoContainerNone}>
              <Text style={styles.selectProxyText}>{mainText.buttons.b0}</Text>
            </View>
          </TouchableOpacity>
        </SuperEllipseMaskView>
      ) : (
        <TouchableOpacity activeOpacity={0.8} onPress={() => handleNavigateToProxies('Proxies')}>
          <SuperEllipseMaskView
            radius={{
              bottomRight: 12,
              bottomLeft: 12,
            }}
            style={styles.selectedProxyContainer}>
            <View style={styles.infoContainer}>
              <View style={styles.flagContainer}>{flagByShortName[selectedProxy?.country_id]}</View>
              <View style={styles.proxyInfoContainer}>
                <View>
                  <Text style={styles.countryText}>{countryDiscription[languageGet][selectedProxy?.country_id]}</Text>
                </View>
                <View style={styles.ipTypeContainer}>
                  <View style={styles.IpContainer}>
                    <Text style={styles.IpText}>IPv{selectedProxy?.ip_version}</Text>
                  </View>
                  <Text style={styles.http}>{selectedProxy?.ip}</Text>
                </View>
              </View>
            </View>
            <VectorRight color="#636363" />
          </SuperEllipseMaskView>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  selectedProxyContainer: {
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
    textAlign: 'center',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainerSecond: {
    marginLeft: 14,
  },
  infoContainerNone: {
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },
  flagContainer: {
    width: 32,
    height: 24,
  },
  proxyInfoContainer: {
    marginLeft: 14,
  },
  ipTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IpContainer: {
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FAC637',
    borderRadius: 20,
    marginTop: 2,
  },
  IpText: {
    color: '#0F1218',
    fontWeight: '700',
    fontSize: 11,
    lineHeight: 15,
    textAlign: 'center',
  },
  http: {
    color: 'white',
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 13,
    maxWidth: 170,
  },
  countryText: {
    color: 'white',
    lineHeight: 14,
    fontWeight: '600',
  },
  selectProxyText: {
    display: 'flex',
    justifyContent: 'center',
    color: '#FAC637',
    textAlign: 'center',
    fontWeight: '600',
  },
})

export default SelectedProxy
