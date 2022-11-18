import React from 'react';
import {
  View, ScrollView, StyleSheet, SafeAreaView, Text, TouchableOpacity,
} from 'react-native';
import LayoutMain from '../componets/LayoutMain';
import UserNavigation from '../componets/UserNavigation';
import OrdersList from '../componets/OrdersList';

const OrdersListTotal = [];

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
});

function Orders({ navigation }) {
  return (
    <LayoutMain style={{ display: 'flex', alignItems: 'center' }}>
      <SafeAreaView style={styles.container}>
        {OrdersListTotal.length > 0
        && (
        <ScrollView style={styles.scrollView}>
          {OrdersListTotal.map((key) => <OrdersList key={key} navigation={navigation} />)}
        </ScrollView>
        )}
        <View style={{
          alignItems: 'center',
          top: '35%',
        }}
        >
          {OrdersListTotal.length === 0 && (
          <View style={{
            display: 'flex',
            alignItems: 'center',
            width: '80%',
            zIndex: 0,
            marginTop: 11,
          }}
          >
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              zIndex: 0,
              border: 2,
              borderBottomColor: 'white',
              backgroundColor: 'rgba(51, 51, 51, 0.3)',
              marginBottom: 1,
              alignItems: 'center',
            }}
            />
            <View style={{
              backgroundColor: 'rgba(51, 51, 51, 0.3)',
              marginBottom: 1,
              width: '100%',
              borderTopLeftRadius: 14,
              borderTopRightRadius: 14,
              alignItems: 'center',
            }}
            >
              <View style={{
                display: 'flex',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 40,
                paddingBottom: 20,
                alignItems: 'center',
              }}
              >
                <Text style={{
                  color: 'white', fontWeight: '700', fontSize: 18, marginBottom: 6,
                }}
                >
                  Нет ни одного заказа
                </Text>
                <Text style={{
                  color: 'white', fontWeight: '400', fontSize: 12, textAlign: 'center', paddingLeft: 20, paddingRight: 20,
                }}
                >
                  На данный момент вы не совершали
                  ни одного заказа
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: '100%',
                alignItems: 'center',
                backgroundColor: 'rgba(51, 51, 51, 0.3)',
                paddingLeft: 20,
                paddingRight: 20,
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
              }}
            >
              <Text style={{
                fontWeight: '700',
                color: '#FAC637',
                paddingTop: 14,
                paddingBottom: 14,
              }}
              >
                Получить
              </Text>
            </TouchableOpacity>
          </View>
          )}
        </View>
      </SafeAreaView>
      <View style={{ alignItems: 'center', marginBottom: 25 }}>
        <UserNavigation status="Orders" navigation={navigation} />
      </View>
    </LayoutMain>

  );
}

export default Orders;
