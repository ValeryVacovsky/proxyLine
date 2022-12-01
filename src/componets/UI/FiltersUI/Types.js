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

function Types({ typesIP, setFilters }) {
  return (
    <View style={styles.Chips}>
      <Text style={styles.text}>
        Тип
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity
          style={{
            backgroundColor: (typesIP.includes('individual') ? '#FAC637' : '#333842'),
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters((prevState) => (
              prevState.typesIP.includes('individual')
                ? { ...prevState, typesIP: prevState.typesIP.filter((active) => active !== 'individual') }
                : { ...prevState, typesIP: prevState.typesIP.concat('individual') }
            ));
          }}
        >
          <Text style={{
            fontWeight: '600',
            fontSize: 13,
            color: (typesIP.includes('individual') ? '#0F1218' : 'white'),
            paddingBottom: 6,
            paddingTop: 6,
            paddingRight: 12,
            paddingLeft: 12,
          }}
          >
            Индивидуальные
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: (typesIP.includes('general') ? '#FAC637' : '#333842'),
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            setFilters((prevState) => (
              prevState.typesIP.includes('general')
                ? { ...prevState, typesIP: prevState.typesIP.filter((active) => active !== 'general') }
                : { ...prevState, typesIP: prevState.typesIP.concat('general') }
            ));
          }}
        >
          <Text style={{
            fontWeight: '600',
            fontSize: 13,
            color: (typesIP.includes('general') ? '#0F1218' : 'white'),
            paddingBottom: 6,
            paddingTop: 6,
            paddingRight: 12,
            paddingLeft: 12,
          }}
          >
            Общие
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Types;
