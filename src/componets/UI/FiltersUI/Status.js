import React from 'react';
import {
  View, TouchableOpacity, StyleSheet, Text,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  textInfo: {
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
  },
  topMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Chips: {
    width: '100%',
    marginBottom: 20,
  },
});

function Status({ status, setFilters }) {
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>
          Статус
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.textInfo}>
            Показать все
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity
          style={{
            backgroundColor: (status.includes('active') ? '#FAC637' : '#333842'),
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters((prevState) => (
              prevState.status.includes('active')
                ? { ...prevState, status: prevState.status.filter((active) => active !== 'active') }
                : { ...prevState, status: prevState.status.concat('active') }
            ));
          }}
        >
          <Text style={{
            fontWeight: '600',
            fontSize: 13,
            color: (status.includes('active') ? '#0F1218' : 'white'),
            paddingBottom: 6,
            paddingTop: 6,
            paddingRight: 12,
            paddingLeft: 12,
          }}
          >
            Активные
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: (status.includes('expired') ? '#FAC637' : '#333842'),
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters((prevState) => (
              prevState.status.includes('expired')
                ? { ...prevState, status: prevState.status.filter((active) => active !== 'expired') }
                : { ...prevState, status: prevState.status.concat('expired') }
            ));
          }}
        >
          <Text style={{
            fontWeight: '600',
            fontSize: 13,
            color: (status.includes('expired') ? '#0F1218' : 'white'),
            paddingBottom: 6,
            paddingTop: 6,
            paddingRight: 12,
            paddingLeft: 12,
          }}
          >
            Истекшие
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: (status.includes('deleted') ? '#FAC637' : '#333842'),
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters((prevState) => (
              prevState.status.includes('deleted')
                ? { ...prevState, status: prevState.status.filter((active) => active !== 'deleted') }
                : { ...prevState, status: prevState.status.concat('deleted') }
            ));
          }}
        >
          <Text style={{
            fontWeight: '600',
            fontSize: 13,
            color: (status.includes('deleted') ? '#0F1218' : 'white'),
            paddingBottom: 6,
            paddingTop: 6,
            paddingRight: 12,
            paddingLeft: 12,
          }}
          >
            Удаленные
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Status;
