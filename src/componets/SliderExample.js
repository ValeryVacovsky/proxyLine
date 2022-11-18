import React, { useState } from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import {
  StyleSheet, View, Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

function SliderExample() {
  const [value, setValue] = useState();
  return (
    <View style={styles.container}>
      <Slider
        trackMarks={[3, 7, 11]}
        value={value}
        onValueChange={setValue}
        maximumValue={365}
        minimumValue={0}
        step={1}
        renderTrackMarkComponent={() => <View style={{ width: 40, height: 40, backgroundColor: 'white' }} />}
      />
      <Text style={{ color: 'white' }}>
        Value:
        {value}
      </Text>
    </View>
  );
}

export default SliderExample;
