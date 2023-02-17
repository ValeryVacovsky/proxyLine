import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { CalendarList } from 'react-native-calendars'
import { LocaleConfig } from 'react-native-calendars'

LocaleConfig.defaultLocale = 'ru'

function BottomSheetDateCreate({ handleClosePress, setIsOpen, setPorts }) {
  const [value, setValue] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date())
  const onDayPress = day => {
    setSelectedDate(day.dateString)
  }
  const handlePress = () => {
    handleClosePress()
    setIsOpen(false)
    value.length > 0 &&
      setPorts(prevState =>
        prevState.includes(value) ? prevState.filter(id => id !== value) : prevState.concat(String(value)),
      )
  }
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextInput textContentType="date" style={styles.topInput} value={selectedDate} onChangeText={setValue} />
      </View>
      <View style={styles.calendarContainer}>
        <CalendarList
          onDayPress={onDayPress}
          style={{
            width: '100%',
            maxHeight: 600,
          }}
          theme={{
            calendarBackground: 'rgba(255, 255, 255, 0.03)',
            dayTextColor: '#fff',
            textDisabledColor: '#444',
            monthTextColor: '#888',
          }}
        />
      </View>
      <TouchableOpacity style={styles.bottomButton} onPress={handlePress} activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>Добавить</Text>
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
    alignItems: 'center',
    width: '100%',
  },
  topInput: {
    backgroundColor: '#1E2127',
    color: 'white',
    height: 44,
    minWidth: '90%',
    marginBottom: 14,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 14,
    paddingBottom: 14,
    borderColor: '#333842',
    marginTop: 33,
  },
  calendarContainer: {
    height: '50%',
    width: '100%',
    marginBottom: 140,
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
})

export default BottomSheetDateCreate
