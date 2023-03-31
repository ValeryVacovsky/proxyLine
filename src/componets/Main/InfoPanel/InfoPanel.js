import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SelectedProxy from './InfoPanelUI/SelectedProxy'
import StatusConnect from './InfoPanelUI/StatusConnect'

const InfoPanel = ({
  flagByShortName,
  setStatusConect,
  statusConect,
  mainText,
  navigation,
  heightOffScreen,
  selectedProxy,
  countryDiscription,
  languageGet,
}) => {
  const dateStart = new Date(selectedProxy.date_end)
  const dateEnd = new Date()
  const dateNeed = ((dateStart - dateEnd) / 1000 / (60 * 60 * 24)).toFixed(0)
  const huorseNeed = ((dateStart - dateEnd) / 1000 / (60 * 60)).toFixed(0)
  return (
    <View style={styles.container}>
      <StatusConnect setStatusConect={setStatusConect} statusConect={statusConect} mainText={mainText} />
      <SelectedProxy
        flagByShortName={flagByShortName}
        setStatusConect={setStatusConect}
        statusConect={statusConect}
        mainText={mainText}
        navigation={navigation}
        selectedProxy={selectedProxy}
        countryDiscription={countryDiscription}
        languageGet={languageGet}
      />
      {statusConect === 'on' && (
        <View style={heightOffScreen > 700 ? styles.timeCalendar : styles.s_timeCalendar}>
          <Text style={styles.timeCalendarText}>
            {dateNeed} {mainText?.texts?.t8} {huorseNeed % 24} {mainText?.texts?.t9}
          </Text>
        </View>
      )}
      {statusConect === 'off' && (
        <View style={heightOffScreen > 700 ? styles.timeCalendar : styles.s_timeCalendar}>
          <Text style={styles.timeCalendarText}>
            {dateNeed} {mainText?.texts?.t8} {huorseNeed % 24} {mainText?.texts?.t9}
          </Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  timeCalendar: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 3,
    paddingBottom: 4,
    backgroundColor: 'rgba(99, 99, 99, 0.30)',
    width: '40%',
    left: '30%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  s_timeCalendar: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 3,
    paddingBottom: 4,
    backgroundColor: 'rgba(99, 99, 99, 0.30)',
    width: '60%',
    left: '20%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  timeCalendarText: {
    fontWeight: '600',
    fontSize: 12,
    color: '#F5F5F5',
  },
})

export default InfoPanel
