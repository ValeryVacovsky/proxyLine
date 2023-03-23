import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import ExcludeOff from '../../../../image/Svg/ExcludeOff'
import ExcludeOn from '../../../../image/Svg/ExcludeOn'

function BottomSheetIps({
  handleClosePress,
  setIpsList,
  filtersIpsItem,
  ipsList,
  ips,
  ipsFilter,
  ipsExclude,
  setIpsExclude,
  setFilters,
  handleSnapPress,
}) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [excludeStatus, setExcludeStatus] = useState(ipsExclude)
  const [filtersIps, setFilterIps] = useState(ipsFilter)
  const [filtersIpsItemIn, setFilterIpsItem] = useState(filtersIpsItem)
  const [height, setHeight] = useState(1)
  const [marginBottom, setMarginBottom] = useState(34)

  const handlePress = () => {
    setFilters(prevState => ({ ...prevState, access_ips: filtersIps }))
    const result = [...ipsList, ...filtersIpsItemIn.filter(itemB => !ipsList.some(itemA => itemA.id === itemB.id))]
    setIpsList(result)

    handleClosePress()
  }
  const hendleExcludeStatus = () => {
    setIpsExclude(prev => !prev)
    setExcludeStatus(prev => !prev)
  }

  const handlePressIps = item => {
    setFilterIps(prevState =>
      prevState.some(prev => prev === item.id)
        ? prevState.filter(active => active !== item.id)
        : prevState.concat(item.id),
    )
    setFilterIpsItem(prevState =>
      prevState.some(prev => prev.id === item.id)
        ? prevState.filter(active => active.id !== item.id)
        : prevState.concat(item),
    )
  }
  useEffect(() => {
    setFilterIps(ipsFilter)
  }, [ipsFilter, handleClosePress, handleSnapPress])
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
        <Text style={styles.topTextLeft}>{text?.texts?.t13}</Text>
        <TouchableOpacity style={styles.topRightTextContainer} activeOpacity={0.8} onPress={hendleExcludeStatus}>
          {excludeStatus ? <ExcludeOn /> : <ExcludeOff />}
          <Text style={styles.topTextRight}>{text?.buttons?.t2}</Text>
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
          }}
          onLayout={event => {
            const { height } = event.nativeEvent.layout
            setHeight(height)
          }}>
          {!excludeStatus
            ? ips.map(item => (
                <TouchableOpacity
                  onPress={() => handlePressIps(item)}
                  key={item.id}
                  style={{
                    backgroundColor: filtersIps.includes(item.id) ? '#FAC637' : '#333842',
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 30,
                    marginLeft: 10,
                    marginTop: 12,
                  }}>
                  <Text
                    style={{
                      color: filtersIps.includes(item.id) ? '#0F1218' : 'white',
                    }}>
                    {item.value}
                  </Text>
                </TouchableOpacity>
              ))
            : ips.map(item => (
                <TouchableOpacity
                  onPress={() => handlePressIps(item)}
                  key={item.id}
                  style={{
                    backgroundColor: filtersIps.includes(item.id) ? '#EC3641' : '#333842',
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 30,
                    marginLeft: 10,
                    marginTop: 12,
                  }}>
                  <Text
                    style={{
                      color: filtersIps.includes(item.id) ? '#0F1218' : 'white',
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
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

export default BottomSheetIps
