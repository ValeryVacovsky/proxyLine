import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import BottomSheetTags from './BottomSheet/BottomSheetTags'
import { useSelector } from 'react-redux'

function Tags({
  tagsFilter,
  tags,
  setFilters,
  setChildrenItem,
  handleClosePress,
  handleSnapPress,
  tagsExclude,
  setTagsExclude,
}) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [filtersTagsItem, setFilterTagsItem] = useState([])
  const shortTagsList = tags.slice(0, 5)
  const [tagsList, setTagsList] = useState(shortTagsList)
  const handlePress = item => {
    if (tagsFilter.includes(item) && !tagsExclude) {
      setTagsExclude(true)
    } else if (tagsFilter.includes(item) && tagsExclude) {
      setTagsExclude(false)
      setFilters(prevState =>
        prevState.tags.includes(item)
          ? {
              ...prevState,
              tags: prevState.tags.filter(active => active !== item),
            }
          : { ...prevState, tags: prevState.tags.concat(item) },
      )
    } else {
      setFilters(prevState =>
        prevState.tags.includes(item)
          ? {
              ...prevState,
              tags: prevState.tags.filter(active => active !== item),
            }
          : { ...prevState, tags: prevState.tags.concat(item) },
      )
    }
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(
      <BottomSheetTags
        handleClosePress={handleClosePress}
        setTagsList={setTagsList}
        tagsList={tagsList}
        filtersTagsItem={filtersTagsItem}
        setFilters={setFilters}
        tagsFilter={tagsFilter}
        handleSnapPress={handleSnapPress}
        tagsExclude={tagsExclude}
        setTagsExclude={setTagsExclude}
        tags={tags}
      />,
    )
    handleSnapPress(1)
  }
  useEffect(() => {
    const result = tags.filter(item => tagsFilter.includes(item.id))
    const data = [...tagsList, ...result.filter(itemB => !tagsList.some(itemA => itemA.id === itemB.id))]
    setFilterTagsItem(data)
  }, [tags, tagsFilter, tagsList])
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>{text?.texts?.t14}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleOpenBottomSheet}>
          <View style={styles.topContainer}>
            <Text style={styles.textInfo}>{text?.buttons?.b3}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {!tagsExclude
          ? filtersTagsItem.map(item => (
              <TouchableOpacity
                key={item.id}
                style={{
                  backgroundColor: tagsFilter.includes(item.id) ? '#FAC637' : '#333842',
                  alignItems: 'center',
                  borderRadius: 30,
                  marginTop: 10,
                  marginRight: 10,
                }}
                activeOpacity={0.8}
                onPress={() => handlePress(item.id)}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 13,
                    color: tagsFilter.includes(item.id) ? '#0F1218' : 'white',
                    paddingBottom: 6,
                    paddingTop: 6,
                    paddingRight: 12,
                    paddingLeft: 12,
                  }}>
                  {item.value}
                </Text>
              </TouchableOpacity>
            ))
          : filtersTagsItem.map(item => (
              <TouchableOpacity
                key={item.id}
                style={{
                  backgroundColor: tagsFilter.includes(item.id) ? '#EC3641' : '#333842',
                  alignItems: 'center',
                  borderRadius: 30,
                  marginTop: 10,
                  marginRight: 10,
                }}
                activeOpacity={0.8}
                onPress={() => handlePress(item.id)}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 13,
                    color: tagsFilter.includes(item.id) ? '#0F1218' : 'white',
                    paddingBottom: 6,
                    paddingTop: 6,
                    paddingRight: 12,
                    paddingLeft: 12,
                  }}>
                  {item.value}
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
