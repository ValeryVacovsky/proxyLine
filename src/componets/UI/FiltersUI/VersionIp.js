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
  Chips: {
    width: '90%',
    marginBottom: 20,
  },
});

function VersionIp({ version, setFilters }) {
  return (
    <View style={styles.Chips}>
      <Text style={styles.text}>
        Версии IP
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity
          style={{
            backgroundColor: (version.includes('IPv4') ? '#FAC637' : '#333842'),
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters((prevState) => (
              prevState.version.includes('IPv4')
                ? { ...prevState, version: prevState.version.filter((active) => active !== 'IPv4') }
                : { ...prevState, version: prevState.version.concat('IPv4') }
            ));
          }}
        >
          <Text style={{
            fontWeight: '600',
            fontSize: 13,
            color: (version.includes('IPv4') ? '#0F1218' : 'white'),
            paddingBottom: 6,
            paddingTop: 6,
            paddingRight: 12,
            paddingLeft: 12,
          }}
          >
            IPv4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: (version.includes('IPv6') ? '#FAC637' : '#333842'),
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters((prevState) => (
              prevState.version.includes('IPv6')
                ? { ...prevState, version: prevState.version.filter((active) => active !== 'IPv6') }
                : { ...prevState, version: prevState.version.concat('IPv6') }
            ));
          }}
        >
          <Text style={{
            fontWeight: '600',
            fontSize: 13,
            color: (version.includes('IPv6') ? '#0F1218' : 'white'),
            paddingBottom: 6,
            paddingTop: 6,
            paddingRight: 12,
            paddingLeft: 12,
          }}
          >
            IPv6
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default VersionIp;
