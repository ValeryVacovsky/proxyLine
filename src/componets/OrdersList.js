import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// import SuperEllipseMaskView from 'react-native-super-ellipse-mask';

import FlagUsaSmall from '../image/Svg/FlagUsaSmall';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  container1: {
    alignItems: 'center',
    width: '100%',
    zIndex: 0,
    marginTop: 11,
  },
  buttonInner: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  buttonInnerText: {
    fontWeight: '700',
    color: '#FAC637',
    paddingTop: 14,
    paddingBottom: 14,
  },
  topContainer: {
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
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    alignItems: 'center',
  },
  IpTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  data: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
  },
  IdNumber: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
    textAlign: 'right',
    marginBottom: 5,
  },
  calenderTime: {
    color: '#CBCBCB',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
    textAlign: 'right',
  },
  blockContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
  },
  leftText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 13,
  },
  rightText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
  },
  centerBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
  },
});

function OrdersList() {
  const [received, setReceived] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.topContainer}>
          <View>
            <Text style={styles.IpTitle}>IPv4 Shared</Text>
            <Text style={styles.data}>
              От 19.03.2022 19:04
            </Text>
          </View>
          <View>
            <Text style={styles.IdNumber}>
              ID 4829002398
            </Text>
            <Text style={styles.calenderTime}>
              Осталось 5 дней 6 часов
            </Text>
          </View>
        </View>
        <View style={{
          backgroundColor: 'rgba(51, 51, 51, 0.3)',
          marginBottom: 1,
          width: '100%',
          borderBottomLeftRadius: (!received && 14),
          borderBottomRightRadius: (!received && 14),
        }}
        >
          <View style={styles.blockContainer}>
            <Text style={styles.leftText}>Страна</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={styles.rightText}>United States of America</Text>
              <FlagUsaSmall
                width={16}
                height={13}
                style={{ top: 2, marginLeft: 5, marginRight: 5 }}
              />
            </View>
          </View>
          <View style={styles.centerBlock}>
            <Text style={styles.leftText}>Дней</Text>
            <Text style={styles.rightText}>90</Text>
          </View>
          <View style={styles.blockContainer}>
            <Text style={styles.leftText}>Количество IP</Text>
            <Text style={styles.rightText}>5</Text>
          </View>
          <View style={styles.blockContainer}>
            <Text style={styles.leftText}>Сумма</Text>
            <Text style={styles.rightText}>$ 10.00</Text>
          </View>
          {!received && (
          <View
            style={styles.blockContainer}
          >
            <Text style={styles.leftText} onPress={() => setReceived(true)}>Получено</Text>
            <Text style={styles.rightText}>20.03.2022</Text>
          </View>
          )}
        </View>
        {received && (
        <TouchableOpacity
          style={styles.buttonInner}
          onPress={() => { setReceived(false); }}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonInnerText}>
            Получить
          </Text>
        </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default OrdersList;
