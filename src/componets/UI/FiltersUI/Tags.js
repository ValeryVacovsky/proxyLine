import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import VectorRightSmall from '../../../image/Svg/VectorRightSmall'

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
    marginRight: 10,
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
})

function Tags({ tags, setFilters }) {
  const [prots] = useState(['Тестовые', 'Лучшие прокси', 'Новые', 'Разные'])
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>Теги</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.textInfo}>Выбрать</Text>
            <VectorRightSmall />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {prots.map(item => (
          <TouchableOpacity
            key={item}
            style={{
              backgroundColor: tags.includes(item) ? '#FAC637' : '#333842',
              alignItems: 'center',
              borderRadius: 30,
              marginTop: 10,
              marginRight: 10,
            }}
            activeOpacity={0.8}
            onPress={() => {
              setFilters(prevState =>
                prevState.tags.includes(item)
                  ? {
                      ...prevState,
                      tags: prevState.tags.filter(active => active !== item),
                    }
                  : { ...prevState, tags: prevState.tags.concat(item) },
              )
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 13,
                color: tags.includes(item) ? '#0F1218' : 'white',
                paddingBottom: 6,
                paddingTop: 6,
                paddingRight: 12,
                paddingLeft: 12,
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Tags
