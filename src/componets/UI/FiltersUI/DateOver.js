import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'
import BottomSheetDateOver from './BottomSheet/BottomSheetDateOver'

function DateOver({
  dateOver,
  setFilters,
  setChildrenItem,
  handleClosePress,
  handleSnapPress,
  endDayStatus,
  setEndDayStatus,
  endDayFrom,
  setEndDayFrom,
  endDayTo,
  setEndDayTo,
}) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const handlePress = item => {
    setFilters(prevState =>
      prevState.dateOver.includes(item)
        ? { ...prevState, dateOver: prevState.dateOver.filter(active => active !== item) }
        : { ...prevState, dateOver: prevState.dateOver.concat(item) },
    )
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(
      <BottomSheetDateOver
        endDayStatus={endDayStatus}
        setEndDayStatus={setEndDayStatus}
        endDayFrom={endDayFrom}
        setEndDayFrom={setEndDayFrom}
        endDayTo={endDayTo}
        setEndDayTo={setEndDayTo}
        handleClosePress={handleClosePress}
        handleSnapPress={handleSnapPress}
      />,
    )
    handleSnapPress(2)
  }
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>{text?.texts?.t25}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleOpenBottomSheet}>
          <Text style={styles.textInfo}>{text?.texts?.t21}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containder}>
        <TouchableOpacity
          style={{
            backgroundColor: dateOver.includes('today') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => handlePress('today')}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: dateOver.includes('today') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            {text?.texts?.t22}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: dateOver.includes('toweek') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            handlePress('toweek')
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: dateOver.includes('toweek') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            {text?.texts?.t23}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: dateOver.includes('tomonth') ? '#FAC637' : '#333842',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 10,
            marginRight: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            handlePress('tomonth')
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 13,
              color: dateOver.includes('tomonth') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            {text?.texts?.t24}
          </Text>
        </TouchableOpacity>
        {endDayStatus && (
          <TouchableOpacity
            style={{
              backgroundColor: dateOver.includes('custom') ? '#FAC637' : '#333842',
              alignItems: 'center',
              borderRadius: 30,
              marginTop: 10,
              marginRight: 10,
            }}
            activeOpacity={0.8}
            onPress={() => {
              handlePress('custom')
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 13,
                color: dateOver.includes('custom') ? '#0F1218' : 'white',
                paddingBottom: 6,
                paddingTop: 6,
                paddingRight: 12,
                paddingLeft: 12,
              }}>
              {endDayFrom.slice(0, 10)} - {endDayTo.slice(0, 10)}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containder: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
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

export default DateOver
