import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'
import BottomSheetDateCreate from './BottomSheet/BottomSheetDateCreate'

function DateCreate({
  dateCreate,
  setFilters,
  setChildrenItem,
  handleClosePress,
  handleSnapPress,
  startDayStatus,
  setStartDayStatus,
  startDayFrom,
  setStartDayFrom,
  startDayTo,
  setStartDayTo,
}) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const handlePress = item => {
    setFilters(prevState =>
      prevState.dateCreate.includes(item)
        ? { ...prevState, dateCreate: prevState.dateCreate.filter(active => active !== item) }
        : { ...prevState, dateCreate: [item] },
    )
  }
  const handleOpenBottomSheet = () => {
    setChildrenItem(
      <BottomSheetDateCreate
        handleClosePress={handleClosePress}
        handleSnapPress={handleSnapPress}
        setStartDayStatus={setStartDayStatus}
        startDayFrom={startDayFrom}
        setStartDayFrom={setStartDayFrom}
        startDayTo={startDayTo}
        setStartDayTo={setStartDayTo}
      />,
    )
    handleSnapPress(2)
  }
  return (
    <View style={styles.Chips}>
      <View style={styles.topMenu}>
        <Text style={styles.text}>{text?.texts?.t20}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleOpenBottomSheet}>
          <Text style={styles.textInfo}>{text?.texts?.t21}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containder}>
        <TouchableOpacity
          style={{
            backgroundColor: dateCreate.includes('today') ? '#FAC637' : '#333842',
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
              color: dateCreate.includes('today') ? '#0F1218' : 'white',
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
            backgroundColor: dateCreate.includes('toweek') ? '#FAC637' : '#333842',
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
              color: dateCreate.includes('toweek') ? '#0F1218' : 'white',
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
            backgroundColor: dateCreate.includes('tomonth') ? '#FAC637' : '#333842',
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
              color: dateCreate.includes('tomonth') ? '#0F1218' : 'white',
              paddingBottom: 6,
              paddingTop: 6,
              paddingRight: 12,
              paddingLeft: 12,
            }}>
            {text?.texts?.t24}
          </Text>
        </TouchableOpacity>
        {startDayStatus && (
          <TouchableOpacity
            style={{
              backgroundColor: dateCreate.includes('custom') ? '#FAC637' : '#333842',
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
                color: dateCreate.includes('custom') ? '#0F1218' : 'white',
                paddingBottom: 6,
                paddingTop: 6,
                paddingRight: 12,
                paddingLeft: 12,
              }}>
              {startDayFrom?.slice(8, 10)}.{startDayFrom?.slice(5, 7)}.{startDayFrom?.slice(0, 4)} -{' '}
              {startDayTo?.slice(8, 10)}.{startDayTo?.slice(5, 7)}.{startDayTo?.slice(0, 4)}
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

export default DateCreate
