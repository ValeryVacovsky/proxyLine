import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import BottomSheetTags from './BottomSheet/BottomSheetTags'
import { useSelector } from 'react-redux'

function Tags({
  tagsFilter,
  tagsFilterExcludes,
  tags,
  setFilters,
  setChildrenItem,
  handleClosePress,
  handleSnapPress,
}) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [excludeStatusOut, setExcludeStatusOut] = useState(false)
  const [filtersTagsItem, setFilterTagsItem] = useState([])
  const [filtersTagsItemExcludes, setFiltersTagsItemExcludes] = useState([])
  const shortTagsList = tags.slice(0, 5)
  const [tagsList, setTagsList] = useState(shortTagsList)
  const [tagsListExclude, setTagsListExclude] = useState(shortTagsList)
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
  const handlePressExcludes = item => {
    setFilters(prevState =>
      prevState.tags_exclude.includes(item)
        ? {
            ...prevState,
            tags_exclude: prevState.tags_exclude.filter(active => active !== item),
          }
        : { ...prevState, tags_exclude: prevState.tags_exclude.concat(item) },
    )
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(
      <BottomSheetTags
        handleClosePress={handleClosePress}
        setTagsList={setTagsList}
        setTagsListExclude={setTagsListExclude}
        tagsList={tagsList}
        tagsListExclude={tagsListExclude}
        filtersTagsItem={filtersTagsItem}
        filtersTagsItemExcludes={filtersTagsItemExcludes}
        setFilters={setFilters}
        excludeStatusOut={excludeStatusOut}
        setExcludeStatusOut={setExcludeStatusOut}
        tagsFilter={tagsFilter}
        tagsFilterExcludes={tagsFilterExcludes}
        handleSnapPress={handleSnapPress}
        tags={tags}
      />,
    )
    handleSnapPress(1)
  }
  useEffect(() => {
    if (!excludeStatusOut) {
      const result = tags.filter(item => tagsFilter.includes(item.id))
      const data = [...tagsList, ...result.filter(itemB => !tagsList.some(itemA => itemA.id === itemB.id))]
      setFilterTagsItem(data)
    } else {
      const result = tags.filter(item => tagsFilterExcludes.includes(item.id))

      const data = [
        ...tagsListExclude,
        ...result.filter(itemB => !tagsListExclude.some(itemA => itemA.id === itemB.id)),
      ]
      setFiltersTagsItemExcludes(data)
    }
  }, [excludeStatusOut, tags, tagsFilter, tagsFilterExcludes, tagsList, tagsListExclude])
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
        {!excludeStatusOut
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
          : filtersTagsItemExcludes.map(item => (
              <TouchableOpacity
                key={item.id}
                style={{
                  backgroundColor: tagsFilterExcludes.includes(item.id) ? '#EC3641' : '#333842',
                  alignItems: 'center',
                  borderRadius: 30,
                  marginTop: 10,
                  marginRight: 10,
                }}
                activeOpacity={0.8}
                onPress={() => handlePressExcludes(item.id)}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 13,
                    color: tagsFilterExcludes.includes(item.id) ? '#0F1218' : 'white',
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
