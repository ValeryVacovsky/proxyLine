import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import BottomSheetIps from './BottomSheet/BottomSheetIps'

function Tags({ ipsFilter, ipsFilterExcludes, ips, setFilters, setChildrenItem, handleClosePress, handleSnapPress }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [excludeStatusOut, setExcludeStatusOut] = useState(false)
  const [filtersIpsItem, setFilterIpsItem] = useState([])
  const [filtersIpsItemExcludes, setFiltersIpsItemExcludes] = useState([])
  const shortIpsList = ips.slice(0, 5)
  const [ipsList, setIpsList] = useState(shortIpsList)
  const [ipsListExclude, setIpsListExclude] = useState(shortIpsList)
  const handlePress = item => {
    setFilters(prevState =>
      prevState.access_ips.includes(item)
        ? {
            ...prevState,
            access_ips: prevState.access_ips.filter(active => active !== item),
          }
        : { ...prevState, access_ips: prevState.access_ips.concat(item) },
    )
  }
  const handlePressExcludes = item => {
    setFilters(prevState =>
      prevState.access_ips_exclude.includes(item)
        ? {
            ...prevState,
            access_ips_exclude: prevState.access_ips_exclude.filter(active => active !== item),
          }
        : { ...prevState, access_ips_exclude: prevState.access_ips_exclude.concat(item) },
    )
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(
      <BottomSheetIps
        handleClosePress={handleClosePress}
        setIpsList={setIpsList}
        setIpsListExclude={setIpsListExclude}
        ipsList={ipsList}
        ipsListExclude={ipsListExclude}
        filtersIpsItem={filtersIpsItem}
        filtersIpsItemExcludes={filtersIpsItemExcludes}
        setFilters={setFilters}
        excludeStatusOut={excludeStatusOut}
        setExcludeStatusOut={setExcludeStatusOut}
        ipsFilter={ipsFilter}
        ipsFilterExcludes={ipsFilterExcludes}
        handleSnapPress={handleSnapPress}
        ips={ips}
      />,
    )
    handleSnapPress(2)
  }
  useEffect(() => {
    if (!excludeStatusOut) {
      const result = ips.filter(item => ipsFilter.includes(item.id))
      const data = [...ipsList, ...result.filter(itemB => !ipsList.some(itemA => itemA.id === itemB.id))]
      setFilterIpsItem(data)
    } else {
      const result = ips.filter(item => ipsFilterExcludes.includes(item.id))

      const data = [...ipsListExclude, ...result.filter(itemB => !ipsListExclude.some(itemA => itemA.id === itemB.id))]
      setFiltersIpsItemExcludes(data)
    }
  }, [excludeStatusOut, ips, ipsFilter, ipsFilterExcludes, ipsList, ipsListExclude])
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>{text?.texts?.t13}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleOpenBottomSheet}>
          <View style={styles.topContainer}>
            <Text style={styles.textInfo}>{text?.buttons.b3}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {!excludeStatusOut
          ? filtersIpsItem.map(item => (
              <TouchableOpacity
                key={item.id}
                style={{
                  backgroundColor: ipsFilter.includes(item.id) ? '#FAC637' : '#333842',
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
                    color: ipsFilter.includes(item.id) ? '#0F1218' : 'white',
                    paddingBottom: 6,
                    paddingTop: 6,
                    paddingRight: 12,
                    paddingLeft: 12,
                  }}>
                  {item.value}
                </Text>
              </TouchableOpacity>
            ))
          : filtersIpsItemExcludes.map(item => (
              <TouchableOpacity
                key={item.id}
                style={{
                  backgroundColor: ipsFilterExcludes.includes(item.id) ? '#EC3641' : '#333842',
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
                    color: ipsFilterExcludes.includes(item.id) ? '#0F1218' : 'white',
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
