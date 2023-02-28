import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import VectorRightSmall from '../../../image/Svg/VectorRightSmall'
import BottomSheetTags from './BottomSheet/BottomSheetTags'

function Tags({ tags, setFilters, setChildrenItem, handleClosePress, handleSnapPress, setIsOpen }) {
  const [tagsList, setTagsList] = useState(['Тестовые', 'Лучшие прокси', 'Новые', 'Разные'])
  const handlePress = item => {
    setFilters(prevState =>
      prevState.tags.includes(item)
        ? {
            ...prevState,
            tags: prevState.tags.filter(active => active !== item),
          }
        : { ...prevState, tags: prevState.tags.concat(item) },
    )
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(
      <BottomSheetTags handleClosePress={handleClosePress} setIsOpen={setIsOpen} setTagsList={setTagsList} />,
    )
    setTimeout(() => {
      handleSnapPress(1)
    }, 500)

    setIsOpen(true)
  }
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>Теги</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleOpenBottomSheet}>
          <View style={styles.topContainer}>
            <Text style={styles.textInfo}>Выбрать</Text>
            <VectorRightSmall />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {tagsList.map(item => (
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
            onPress={() => handlePress(item)}>
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

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
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

export default Tags
