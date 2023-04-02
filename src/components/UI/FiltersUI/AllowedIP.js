import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import BottomSheetIps from './BottomSheet/BottomSheetIps'

function Tags({
  ipsFilter,
  ips,
  setFilters,
  setChildrenItem,
  handleClosePress,
  handleSnapPress,
  ipsExclude,
  setIpsExclude,
}) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [filtersIpsItem, setFilterIpsItem] = useState([])
  const shortIpsList = ips.slice(0, 5)
  const [ipsList, setIpsList] = useState(shortIpsList)
  const handlePress = item => {
    if (ipsFilter.includes(item) && !ipsExclude) {
      setIpsExclude(true)
    } else if (ipsFilter.includes(item) && ipsExclude) {
      setIpsExclude(false)
      setFilters(prevState =>
        prevState.access_ips.includes(item)
          ? {
              ...prevState,
              access_ips: prevState.access_ips.filter(active => active !== item),
            }
          : { ...prevState, access_ips: prevState.access_ips.concat(item) },
      )
    } else {
      setFilters(prevState =>
        prevState.access_ips.includes(item)
          ? {
              ...prevState,
              access_ips: prevState.access_ips.filter(active => active !== item),
            }
          : { ...prevState, access_ips: prevState.access_ips.concat(item) },
      )
    }
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(
      <BottomSheetIps
        handleClosePress={handleClosePress}
        setIpsList={setIpsList}
        ipsList={ipsList}
        filtersIpsItem={filtersIpsItem}
        setFilters={setFilters}
        ipsExclude={ipsExclude}
        setIpsExclude={setIpsExclude}
        ipsFilter={ipsFilter}
        handleSnapPress={handleSnapPress}
        ips={ips}
      />,
    )
    handleSnapPress(1)
  }
  useEffect(() => {
    const result = ips.filter(item => ipsFilter.includes(item.id))
    const data = [...ipsList, ...result.filter(itemB => !ipsList.some(itemA => itemA.id === itemB.id))]
    setFilterIpsItem(data)
  }, [ips, ipsFilter, ipsList])
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
        {!ipsExclude
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
          : filtersIpsItem.map(item => (
              <TouchableOpacity
                key={item.id}
                style={{
                  backgroundColor: ipsFilter.includes(item.id) ? '#EC3641' : '#333842',
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
