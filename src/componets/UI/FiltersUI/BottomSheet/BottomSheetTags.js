import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import ExcludeOff from '../../../../image/Svg/ExcludeOff'
import ExcludeOn from '../../../../image/Svg/ExcludeOn'
function BottomSheetTags({
  handleClosePress,
  setTagsList,
  filtersTagsItem,
  tagsList,
  tags,
  tagsFilter,
  setFilters,
  handleSnapPress,
  tagsExclude,
  setTagsExclude,
}) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [excludeStatus, setExcludeStatus] = useState(tagsExclude)
  const [filtersTags, setFilterTags] = useState(tagsFilter)
  const [filtersTagsItemIn, setFilterTagsItem] = useState(filtersTagsItem)
  const [height, setHeight] = useState(1)
  const [marginBottom, setMarginBottom] = useState(34)
  const hendleExcludeStatus = () => {
    setExcludeStatus(prev => !prev)
  }

  const handlePress = () => {
    setFilters(prevState => ({ ...prevState, tags: filtersTags }))
    const result = [...tagsList, ...filtersTagsItemIn.filter(itemB => !tagsList.some(itemA => itemA.id === itemB.id))]
    setTagsList(result)
    setTagsExclude(excludeStatus)
    handleClosePress()
  }

  const handlePressTag = item => {
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
  }
  useEffect(() => {
    setFilterTags(tagsFilter)
  }, [tagsFilter, handleClosePress, handleSnapPress])
  useEffect(() => {
    {
      if (height > 530) {
        handleSnapPress(19)
        setMarginBottom(34)
      } else if (height > 522) {
        handleSnapPress(19)
        setMarginBottom(52)
      } else if (height > 500) {
        handleSnapPress(18)
        setMarginBottom(60)
      } else if (height > 472) {
        handleSnapPress(17)
        setMarginBottom(88)
      } else if (height > 444) {
        handleSnapPress(16)
        setMarginBottom(116)
      } else if (height > 416) {
        handleSnapPress(15)
        setMarginBottom(134)
      } else if (height > 388) {
        handleSnapPress(14)
        setMarginBottom(162)
      } else if (height > 360) {
        handleSnapPress(13)
        setMarginBottom(190)
      } else if (height > 332) {
        handleSnapPress(12)
        setMarginBottom(218)
      } else if (height > 304) {
        handleSnapPress(1)
        setMarginBottom(246)
      } else if (height > 276) {
        handleSnapPress(10)
        setMarginBottom(274)
      } else if (height > 248) {
        handleSnapPress(9)
        setMarginBottom(302)
      } else if (height > 220) {
        handleSnapPress(8)
        setMarginBottom(330)
      } else if (height > 192) {
        handleSnapPress(7)
        setMarginBottom(358)
      } else if (height > 164) {
        handleSnapPress(6)
        setMarginBottom(386)
      } else if (height > 136) {
        handleSnapPress(5)
        setMarginBottom(414)
      } else if (height > 108) {
        handleSnapPress(4)
        setMarginBottom(442)
      } else if (height > 80) {
        handleSnapPress(3)
        setMarginBottom(470)
      } else {
        handleSnapPress(2)
        setMarginBottom(498)
      }
    }
  }, [height, handleSnapPress])
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
          style={styles.tagsConatiner}
          onLayout={event => {
            const { height } = event.nativeEvent.layout
            setHeight(height)
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
                    backgroundColor: filtersTags.includes(item.id) ? '#EC3641' : '#333842',
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
              ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          paddingTop: 18,
          paddingBottom: 18,
          backgroundColor: '#1E2127',
          width: '90%',
          marginBottom: marginBottom,
          borderRadius: 12,
          alignItems: 'center',
          marginTop: 2,
        }}
        onPress={handlePress}
        activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>{text?.buttons?.b1}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  tagsConatiner: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
    marginRight: 20,
    marginTop: 15,
  },
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
    marginBottom: 34,
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
