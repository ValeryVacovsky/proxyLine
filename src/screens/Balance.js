import React from 'react';
import {
  ScrollView, StyleSheet, SafeAreaView, Text,
} from 'react-native';
import LayoutMain from '../componets/LayoutMain';
import BalanceList from '../componets/BalanceList';
import BalanceTopTable from '../componets/UI/BalanceUI/BalanceTopTable';
import BalanceClearTable from '../componets/UI/BalanceUI/BalanceClearTable';

const BalanceListTotal = [1, 2, 3, 4];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
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
});

function Balance({ navigation }) {
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <BalanceTopTable />
        <Text style={styles.text
        }>
          Операции
        </Text>
        {BalanceListTotal.length > 0 && (
        <ScrollView style={styles.scrollView}>
          {BalanceListTotal.map((key) => <BalanceList key={key} navigation={navigation} />)}
        </ScrollView>
        )}
        {BalanceListTotal.length === 0 && <BalanceClearTable />}
      </SafeAreaView>
    </LayoutMain>

  );
}

export default Balance;
