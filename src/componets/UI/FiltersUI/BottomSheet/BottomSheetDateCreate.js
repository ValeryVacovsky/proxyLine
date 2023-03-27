import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useSelector } from 'react-redux'
import { CalendarList } from 'react-native-calendars'
import { LocaleConfig } from 'react-native-calendars'

import Locacles from '../../../../utils/LocaleConfig'

LocaleConfig.locales['ru'] = Locacles.ru

LocaleConfig.defaultLocale = 'ru'

function BottomSheetDateCreate({
  handleClosePress,
  setStartDayStatus,
  startDayFrom,
  setStartDayFrom,
  startDayTo,
  setStartDayTo,
}) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [value, setValue] = useState(`${startDayFrom} - ${startDayTo}`)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [startDateTime, setStartDateTime] = useState(new Date())
  const [endDateTime, setEndDateTime] = useState(new Date())
  const [markedDates, setMarkedDates] = useState({})

  useEffect(() => {
    const Sdate = new Date(startDateTime)
    const Edate = new Date(endDateTime)
    if (Object.keys(markedDates).length) {
      setStartDayFrom(Sdate.toISOString())
      setStartDayTo(Edate.toISOString())
      setValue(
        `${Sdate.toISOString()?.slice(8, 10)}.${Sdate.toISOString()?.slice(5, 7)}.${Sdate.toISOString()?.slice(
          0,
          4,
        )} - ${Edate.toISOString()?.slice(8, 10)}.${Edate.toISOString()?.slice(5, 7)}.${Edate.toISOString()?.slice(
          0,
          4,
        )}`,
      )
    } else {
      setValue('')
    }
  }, [startDateTime, endDateTime, markedDates, setStartDayStatus, setStartDayFrom, setStartDayTo])

  const handleDayPress = date => {
    if (!startDate || (startDate && endDate)) {
      // если начальная дата не выбрана или диапазон уже выбран
      setStartDate(date.dateString)
      setStartDateTime(date.timestamp)
      setEndDate('')
      setMarkedDates({
        [date.dateString]: {
          color: '#FFF1CC',
          textColor: '#0F1218',
          startingDay: true,
          customStyles: {
            container: {
              backgroundColor: '#FAC637',
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              width: '100%',
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            text: {
              color: 'black',
              fontWeight: 'bold',
            },
          },
        },
      })
    } else {
      // если выбрана начальная дата
      let range = {}
      let start = new Date(startDate)
      let end = new Date(date.dateString)
      while (start <= end) {
        let d = new Date(start)
        if (start.getTime() === new Date(startDate).getTime()) {
          // проверяем, является ли текущая дата начальной датой
          range[d.toISOString().slice(0, 10)] = {
            color: '#FFF1CC',
            textColor: '#0F1218',
            startingDay: true,
            customStyles: {
              container: {
                backgroundColor: '#FAC637',
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                width: '100%',
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              text: {
                color: 'black',
                fontWeight: 'bold',
              },
            },
          }
        } else if (start.getTime() === new Date(end).getTime()) {
          // проверяем, является ли текущая дата конечной датой
          range[d.toISOString().slice(0, 10)] = {
            color: '#FFF1CC',
            textColor: '#0F1218',
            startingDay: true,
            customStyles: {
              container: {
                backgroundColor: '#FAC637',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                width: '100%',
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              text: {
                color: 'black',
                fontWeight: 'bold',
              },
            },
          }
        } else {
          if (start.getDay() === 0) {
            range[d.toISOString().slice(0, 10)] = {
              customStyles: {
                container: {
                  backgroundColor: '#FFF1CC',
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  width: '100%',
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                text: {
                  color: 'black',
                  fontWeight: 'bold',
                },
              },
            }
          } else if (start.getDay() === 1) {
            range[d.toISOString().slice(0, 10)] = {
              customStyles: {
                container: {
                  backgroundColor: '#FFF1CC',
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  width: '100%',
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                text: {
                  color: 'black',
                  fontWeight: 'bold',
                },
              },
            }
          } else {
            range[d.toISOString().slice(0, 10)] = {
              customStyles: {
                container: {
                  backgroundColor: '#FFF1CC',
                  borderRadius: 0,
                  width: '100%',
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                text: {
                  color: 'black',
                  fontWeight: 'bold',
                },
              },
            }
          }
        }
        start.setDate(start.getDate() + 1)
      }
      setStartDate('')
      setEndDate(date.dateString)
      setEndDateTime(date.timestamp)
      setMarkedDates(range)
    }
  }
  const handlePress = () => {
    handleClosePress()
    if (Object.keys(markedDates).length) {
      setStartDayStatus(true)
    } else {
      setStartDayStatus(false)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar} />
      <View style={styles.topContainer}>
        <Text style={styles.dateCreate}>{text?.texts?.t16}</Text>
        <TextInput textContentType="date" style={styles.topInput} value={value} onChangeText={setValue} readOnly />
      </View>
      <View style={styles.calendarContainer}>
        <CalendarList
          disableMonthChange={true}
          calendarHeight={310}
          hideExtraDays={false}
          firstDay={1}
          markedDates={markedDates}
          onDayPress={handleDayPress}
          markingType="custom"
          theme={styles.themStyle}
        />
        {/* <Calendar markingType={'custom'} markedDates={markedDates} onDayPress={handleDayPress} /> */}
      </View>
      <TouchableOpacity style={styles.bottomButton} onPress={handlePress} activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>{text.buttons?.b1}</Text>
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
    paddingTop: 12,
    paddingBottom: 12,
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
  topBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 60,
    height: 3,
    borderRadius: 40,
    marginTop: 10,
  },
  themStyle: {
    todayTextColor: '#FFFFFF',
    textDisabledColor: 'rgba(255, 255, 255, 0.2)',
    textDayFontWeight: 'bold',
    dayTextColor: '#FFFFFF',
    textDayFontSize: 14,
    backgroundColor: '#ffffff',
    selectedDayTextColor: '#0F1218',
    calendarBackground: '#0F1218',
    monthTextColor: 'white',
    textSectionTitleDisabledColor: '#d9e1e8',
    ['stylesheet.calendar.header']: {
      monthText: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 15,
        color: 'white',
      },
      header: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 0,
        marginTop: 6,
        alignItems: 'center',
      },
      week: {
        marginTop: 7,
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
      },
      dayHeader: {
        color: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        flexDirection: 'row',
        fontWeight: '700',
        lineHeight: 15,
        fontSize: 13,
        height: 32,
        textAlign: 'center',
        paddingTop: 17,
        paddingBottom: 24,
      },
    },
    ['stylesheet.day.basic']: {
      base: {
        width: 32,
        height: 36,
        marginTop: -10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        marginTop: 4,
        fontSize: 14,
        fontWeight: '700',
        color: '#FFFFFF',
      },
    },
    ['stylesheet.calendar.main']: {
      dayContainer: {
        flex: 1,
        alignItems: 'center',
      },
      monthView: {
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
    },
  },
  rageRagiusItemContainer: {
    backgroundColor: '#FFF1CC',
    borderRadius: 0,
    width: '100%',
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftRagiusItemContainer: {
    backgroundColor: '#FFF1CC',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    width: '100%',
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightRagiusItemContainer: {
    backgroundColor: '#FFF1CC',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    width: '100%',
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullRagiusItemContainer: {
    backgroundColor: '#FAC637',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    width: '100%',
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textItemContianer: {
    color: 'black',
    fontWeight: 'bold',
  },
})

export default BottomSheetDateCreate
