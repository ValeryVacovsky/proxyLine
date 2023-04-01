import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import FrameGreen from '../../../../image/Svg/FrameGreen'
import FrameRed from '../../../../image/Svg/FrameRed'
import FrameYellow from '../../../../image/Svg/FrameYellow'

const StatusConnect = ({ setStatusConect, statusConect, mainText }) => {
  const handleStatusConnctNone = () => {
    setStatusConect('none')
  }
  return (
    <TouchableOpacity onPress={handleStatusConnctNone} activeOpacity={0.8}>
      <SuperEllipseMaskView
        radius={{
          topLeft: 12,
          topRight: 12,
        }}
        style={styles.conectStatus}>
        <View>
          <View style={styles.frameContainer}>
            {statusConect === 'on' && (
              <View style={styles.frameShadowGreen}>
                <FrameGreen />
              </View>
            )}
            {statusConect === 'off' && (
              <View style={styles.frameShadowRed}>
                <FrameRed />
              </View>
            )}
            {statusConect === 'none' && (
              <View style={styles.frameShadowNone}>
                <FrameYellow />
              </View>
            )}
            {statusConect === 'on' ? (
              <Text style={styles.frameText}>{mainText?.texts?.t1}</Text>
            ) : (
              <Text style={styles.frameText}>{mainText?.texts?.t3}</Text>
            )}
          </View>
          {statusConect === 'on' ? (
            <Text style={styles.statusConectText}>{mainText?.texts?.t2}</Text>
          ) : (
            <Text style={styles.statusConectText}>{mainText?.texts?.t4}</Text>
          )}
        </View>
        {statusConect === 'on' && (
          <View style={styles.speedStatusContainer}>
            <Text style={styles.speedStatusTextBig}>12.18 </Text>
            <Text style={styles.speedStatusTextSmall}>Mbit/s</Text>
          </View>
        )}
      </SuperEllipseMaskView>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  conectStatus: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1E2127',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 14,
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  frameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusConectText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#CBCBCB',
  },
  frameText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 15,
  },
  speedStatusContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  speedStatusTextBig: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  speedStatusTextSmall: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
})

export default StatusConnect
