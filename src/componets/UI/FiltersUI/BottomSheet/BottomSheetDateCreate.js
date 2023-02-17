import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { CalendarList } from 'react-native-calendars'
import { LocaleConfig } from 'react-native-calendars'

LocaleConfig.locales['ru'] = {
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  monthNamesShort: ['Янв.', 'Фев.', 'Мар.', 'Апр.', 'Май', 'Июн.', 'Июл.', 'Авг.', 'Сен.', 'Окт.', 'Ноя.', 'Дек.'],
  dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
}
LocaleConfig.defaultLocale = 'ru'

function BottomSheetDateCreate({ handleClosePress, setIsOpen, setPorts }) {
  const [value, setValue] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date())
  const onDayPress = day => {
    setSelectedDate(day.dateString)
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          width: '100%',
        }}>
        <TextInput
          textContentType="date"
          style={{
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
          }}
          value={selectedDate}
          onChangeText={setValue}
        />
      </View>
      <View style={{ height: '50%', width: '100%', marginBottom: 140 }}>
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
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => {
          handleClosePress()
          setIsOpen(false)
          {
            value.length > 0 &&
              setPorts(prevState =>
                prevState.includes(value) ? prevState.filter(id => id !== value) : prevState.concat(String(value)),
              )
          }
        }}
        activeOpacity={0.8}>
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
