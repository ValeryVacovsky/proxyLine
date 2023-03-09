import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import ExcludeOff from '../../../../image/Svg/ExcludeOff'
import ExcludeOn from '../../../../image/Svg/ExcludeOn'

function BottomSheetIps({
  handleClosePress,
  setIpsList,
  setIpsListExclude,
  filtersIpsItem,
  filtersIpsItemExcludes,
  ipsList,
  ipsListExclude,
  ips,
  ipsFilter,
  ipsFilterExcludes,
  excludeStatusOut,
  setExcludeStatusOut,
  setFilters,
  handleSnapPress,
}) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [excludeStatus, setExcludeStatus] = useState(excludeStatusOut)
  const [filtersIpsExclude, setFilterIpsExclude] = useState(ipsFilterExcludes)
  const [filtersIpsItemInExclude, setFilterIpsItemExclude] = useState(filtersIpsItemExcludes)
  const [filtersIps, setFilterIps] = useState(ipsFilter)
  const [filtersIpsItemIn, setFilterIpsItem] = useState(filtersIpsItem)

  const handlePress = () => {
    if (!excludeStatus) {
      setFilters(prevState => ({ ...prevState, access_ips: filtersIps }))
      const result = [...ipsList, ...filtersIpsItemIn.filter(itemB => !ipsList.some(itemA => itemA.id === itemB.id))]
      setIpsList(result)
    } else {
      setFilters(prevState => ({ ...prevState, access_ips_exclude: filtersIpsExclude }))
      const result = [
        ...ipsListExclude,
        ...filtersIpsItemInExclude.filter(itemB => !ipsListExclude.some(itemA => itemA.id === itemB.id)),
      ]
      setIpsListExclude(result)
    }

    handleClosePress()
  }
  const hendleExcludeStatus = () => {
    if (excludeStatus) {
      setFilters(prevState => ({ ...prevState, access_ips: [] }))
      setFilterIps([])
    } else {
      setFilters(prevState => ({ ...prevState, access_ips_exclude: [] }))
      setFilterIpsExclude([])
    }
    setExcludeStatus(prev => !prev)
    setExcludeStatusOut(prev => !prev)
  }

  const handlePressIps = item => {
    if (!excludeStatus) {
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
    } else {
      setFilterIpsExclude(prevState =>
        prevState.some(prev => prev === item.id)
          ? prevState.filter(active => active !== item.id)
          : prevState.concat(item.id),
      )
      setFilterIpsItemExclude(prevState =>
        prevState.some(prev => prev.id === item.id)
          ? prevState.filter(active => active.id !== item.id)
          : prevState.concat(item),
      )
    }
  }
  useEffect(() => {
    setFilterIps(ipsFilter)
    setFilterIpsItemExclude(ipsFilterExcludes)
  }, [ipsFilter, handleClosePress, handleSnapPress, ipsFilterExcludes])
  return (
    <View style={styles.container}>
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
                    backgroundColor: filtersIpsExclude.includes(item.id) ? '#EC3641' : '#333842',
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 30,
                    marginLeft: 10,
                    marginTop: 12,
                  }}>
                  <Text
                    style={{
                      color: filtersIpsExclude.includes(item.id) ? '#0F1218' : 'white',
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
    marginBottom: 33,
    borderRadius: 12,
    alignItems: 'center',
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
