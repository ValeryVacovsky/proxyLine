import React from 'react';

import {
  View, TouchableOpacity, Text, StyleSheet,
} from 'react-native';
import VectorYellow from '../../../image/Svg/VectorYellow';
import BottomSheetItem from './BottomSheetItem';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    alignItems: 'center',
    marginBottom: 5,
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '88%',
    flexDirection: 'row',
  },
});

function ProxyItemDelete({
  proxy, selectedProxies, setSelected, setProxyItemPicked,
  handleSnapPress, setChildrenItem, handleClosePress, navigation, childrenItem, onChange,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChange(proxy.id)}
      activeOpacity={0.8}
    >
      <View
        style={styles.mainContainer}
      >
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ top: 13, marginLeft: 0 }}>
            {proxy.flag}
          </View>
          <View style={{ marginLeft: 14 }}>
            <View style={{
              display: 'flex', flexDirection: 'row', alignItems: 'center',
            }}
            >
              <Text style={{
                fontWeight: '600', fontSize: 14, color: 'white', lineHeight: 15,
              }}
              >
                {proxy.name}
              </Text>
              <View style={{
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 6,
                paddingRight: 6,
                backgroundColor: '#333842',
                borderRadius: 4,
                marginLeft: 6,
              }}
              >
                <Text style={{
                  fontWeight: '600',
                  fontSize: 11,
                  color: '#CBCBCB',
                  lineHeight: 15,
                }}
                >
                  {proxy.days}
                  {' '}
                  дней
                </Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{
                paddingBottom: 4,
                paddingTop: 4,
                paddingLeft: 8,
                paddingRight: 8,
                backgroundColor: '#FAC637',
                borderRadius: 20,
              }}
              >
                <Text style={{
                  color: '#0F1218',
                  fontWeight: '700',
                  fontSize: 11,
                  lineHeight: 15,
                }}
                >
                  {proxy.IP}
                </Text>
              </View>
              <Text style={{
                color: 'white',
                fontSize: 13,
                fontWeight: '400',
                marginLeft: 6,
              }}
              >
                {proxy.IpAdress}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              setProxyItemPicked(proxy.id);
              // eslint-disable-next-line no-unused-expressions
              childrenItem && handleSnapPress(0);
              setSelected(null);
              setChildrenItem(
                <BottomSheetItem handleClosePress={handleClosePress} navigation={navigation} />,
              );
            }}
            activeOpacity={0.8}
          />
          {selectedProxies.includes(Number(proxy.id)) && <VectorYellow />}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ProxyItemDelete;
