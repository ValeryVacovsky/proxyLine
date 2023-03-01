import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { CalendarList } from 'react-native-calendars'
import { LocaleConfig } from 'react-native-calendars'
import Locacles from '../../../../utils/LocaleConfig'
LocaleConfig.locales['ru'] = Locacles.ru

LocaleConfig.defaultLocale = 'ru'

function BottomSheetDateCreate({ handleClosePress, setPorts }) {
  const [value, setValue] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [markedDates, setMarkedDates] = useState({})

  const handleDayPress = date => {
    if (!startDate || (startDate && endDate)) {
      // если начальная дата не выбрана или диапазон уже выбран
      setStartDate(date.dateString)
      setEndDate('')
      setMarkedDates({
        [date.dateString]: { color: '#FFF1CC' },
      })
    } else {
      // если выбрана начальная дата
      let range = {}
      let start = new Date(startDate)
      let end = new Date(date.dateString)
      while (start <= end) {
        let d = new Date(start)
        range[d.toISOString().slice(0, 10)] = { color: '#FFF1CC' }
        start.setDate(start.getDate() + 1)
      }
      setStartDate('')
      setEndDate(date.dateString)
      setMarkedDates(range)
    }
  }
  const handlePress = () => {
    handleClosePress()
    value.length > 0 &&
      setPorts(prevState =>
        prevState.includes(value) ? prevState.filter(id => id !== value) : prevState.concat(String(value)),
      )
  }
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.dateCreate}>Дата создания</Text>
        <TextInput textContentType="date" style={styles.topInput} value={123} onChangeText={setValue} />
      </View>
      <View style={styles.calendarContainer}>
        <CalendarList
          firstDay={1}
          markedDates={markedDates}
          onDayPress={handleDayPress}
          markingType="period"
          style={{ color: 'red' }}
          theme={{
            container: 'red',
            backgroundColor: '#ffffff',
            calendarBackground: '#0F1218',
            monthTextColor: 'white',
            textSectionTitleDisabledColor: '#d9e1e8',
            'stylesheet.calendar.header': {
              week: {
                marginTop: 50,
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
            },
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
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topContainer: {
    width: '100%',
  },
  topInput: {
    backgroundColor: '#1E2127',
    color: 'white',
    height: 44,
    marginBottom: 14,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 14,
    paddingBottom: 14,
    borderColor: '#333842',
    marginHorizontal: 20,
  },
  calendarContainer: {
    height: '50%',
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
  dateCreate: {
    marginTop: 33,
    marginLeft: 20,
    marginBottom: 14,
    fontSize: 16,
    color: 'white',
  },
})

export default BottomSheetDateCreate
