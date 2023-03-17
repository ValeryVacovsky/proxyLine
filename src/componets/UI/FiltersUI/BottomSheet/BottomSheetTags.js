import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import ExcludeOff from '../../../../image/Svg/ExcludeOff'
import ExcludeOn from '../../../../image/Svg/ExcludeOn'

function BottomSheetTags({
  handleClosePress,
  setTagsList,
  setTagsListExclude,
  filtersTagsItem,
  filtersTagsItemExcludes,
  tagsList,
  tagsListExclude,
  tags,
  tagsFilter,
  tagsFilterExcludes,
  excludeStatusOut,
  setExcludeStatusOut,
  setFilters,
  handleSnapPress,
}) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [excludeStatus, setExcludeStatus] = useState(excludeStatusOut)
  const [filtersTagsExclude, setFilterTagsExclude] = useState(tagsFilterExcludes)
  const [filtersTagsItemInExclude, setFilterTagsItemExclude] = useState(filtersTagsItemExcludes)
  const [filtersTags, setFilterTags] = useState(tagsFilter)
  const [filtersTagsItemIn, setFilterTagsItem] = useState(filtersTagsItem)

  const handlePress = () => {
    if (!excludeStatus) {
      setFilters(prevState => ({ ...prevState, tags: filtersTags }))
      const result = [...tagsList, ...filtersTagsItemIn.filter(itemB => !tagsList.some(itemA => itemA.id === itemB.id))]
      setTagsList(result)
    } else {
      setFilters(prevState => ({ ...prevState, tags_exclude: filtersTagsExclude }))
      const result = [
        ...tagsListExclude,
        ...filtersTagsItemInExclude.filter(itemB => !tagsListExclude.some(itemA => itemA.id === itemB.id)),
      ]
      setTagsListExclude(result)
    }

    handleClosePress()
  }
  const hendleExcludeStatus = () => {
    if (excludeStatus) {
      setFilters(prevState => ({ ...prevState, tags: [] }))
      setFilterTags([])
    } else {
      setFilters(prevState => ({ ...prevState, tags_exclude: [] }))
      setFilterTagsExclude([])
    }
    setExcludeStatus(prev => !prev)
    setExcludeStatusOut(prev => !prev)
  }

  const handlePressTag = item => {
    if (!excludeStatus) {
      setFilterTags(prevState =>
        prevState.some(prev => prev === item.id)
          ? prevState.filter(active => active !== item.id)
          : prevState.concat(item.id),
      )
      setFilterTagsItem(prevState =>
        prevState.some(prev => prev.id === item.id)
          ? prevState.filter(active => active.id !== item.id)
          : prevState.concat(item),
      )
    } else {
      setFilterTagsExclude(prevState =>
        prevState.some(prev => prev === item.id)
          ? prevState.filter(active => active !== item.id)
          : prevState.concat(item.id),
      )
      setFilterTagsItemExclude(prevState =>
        prevState.some(prev => prev.id === item.id)
          ? prevState.filter(active => active.id !== item.id)
          : prevState.concat(item),
      )
    }
  }
  useEffect(() => {
    setFilterTags(tagsFilter)
    setFilterTagsItemExclude(tagsFilterExcludes)
  }, [tagsFilter, handleClosePress, handleSnapPress, tagsFilterExcludes])
  return (
    <View style={styles.container}>
      <View style={styles.topBar} />
      <View style={styles.topContainer}>
        <Text style={styles.topTextLeft}>{text?.texts?.t14}</Text>
        <TouchableOpacity style={styles.topRightTextContainer} activeOpacity={0.8} onPress={hendleExcludeStatus}>
          {excludeStatus ? <ExcludeOn /> : <ExcludeOff />}
          <Text style={styles.topTextRight}>{text?.buttons?.b2}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginLeft: 10,
            marginRight: 20,
            marginTop: 15,
          }}>
          {!excludeStatus
            ? tags.map(item => (
                <TouchableOpacity
                  onPress={() => handlePressTag(item)}
                  key={item.id}
                  style={{
                    backgroundColor: filtersTags.includes(item.id) ? '#FAC637' : '#333842',
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 30,
                    marginLeft: 10,
                    marginTop: 12,
                  }}>
                  <Text
                    style={{
                      color: filtersTags.includes(item.id) ? '#0F1218' : 'white',
                    }}>
                    {item.value}
                  </Text>
                </TouchableOpacity>
              ))
            : tags.map(item => (
                <TouchableOpacity
                  onPress={() => handlePressTag(item)}
                  key={item.id}
                  style={{
                    backgroundColor: filtersTagsExclude.includes(item.id) ? '#EC3641' : '#333842',
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 30,
                    marginLeft: 10,
                    marginTop: 12,
                  }}>
                  <Text
                    style={{
                      color: filtersTagsExclude.includes(item.id) ? '#0F1218' : 'white',
                    }}>
                    {item.value}
                  </Text>
                </TouchableOpacity>
              ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.bottomButton} onPress={handlePress} activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>{text?.buttons?.b1}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 60,
    height: 3,
    borderRadius: 40,
    marginTop: 10,
  },
  container: {
    height: '100%',
    backgroundColor: '#0F1218',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    alignItems: 'center',
  },
  topContainer: {
    width: '90%',
    marginTop: 33,
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  topTextLeft: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  topTextRight: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
    marginLeft: 5,
  },
  topRightTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollViewContainer: {
    height: '100%',
    width: '100%',
  },
  bottomButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginBottom: 33,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 150,
  },
  bottomButtonText: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  tagsContainerDefault: {
    backgroundColor: '#333842',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 30,
    marginLeft: 10,
    marginTop: 12,
  },
  tagsContainerStandart: {
    backgroundColor: '#FAC637',
  },
  tagsContainerExlude: {
    backgroundColor: '#EC3641',
  },
  tagsTextStandart: {
    color: '#0F1218',
  },
  tagsTextExlude: {
    color: '#0F1218',
  },
})

export default BottomSheetTags
