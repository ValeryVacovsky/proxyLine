import React, { useRef } from 'react'
import { StyleSheet, Animated, TouchableOpacity, Easing } from 'react-native'

export default function Toggle() {
  const positionButton = useRef(new Animated.Value(0)).current

  const isOnRef = useRef(false)

  const startAnimToOff = () => {
    Animated.timing(positionButton, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start()
  }

  const startAnimToOn = () => {
    Animated.timing(positionButton, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start()
  }

  const positionInterPol = positionButton.interpolate({ inputRange: [0, 1], outputRange: [0, 70] })
  const leftToggleColor = positionButton.interpolate({ inputRange: [0, 1], outputRange: ['white', '#CBCBCB'] })
  const rightToggleColor = positionButton.interpolate({ inputRange: [0, 1], outputRange: ['#CBCBCB', 'white'] })

  const onPress = () => {
    if (isOnRef.current) {
      startAnimToOff()
      isOnRef.current = false
      // setIsOn(false);
    } else {
      startAnimToOn()
      isOnRef.current = true
      // setIsOn(true);
    }
  }

  return (
    <TouchableOpacity style={{ height: 50, width: 60, right: 5 }} activeOpacity={0.9} onPress={onPress}>
      <Animated.View
        style={[
          styles.mainStyes,
          {
            backgroundColor: '#1E2127',
          },
        ]}>
        <Animated.Text
          style={[
            styles.eahcStyles,
            {
              color: leftToggleColor,
            },
          ]}>
          HTTP
        </Animated.Text>
        <Animated.Text
          style={[
            styles.eahcStylesOf,
            {
              color: rightToggleColor,
            },
          ]}>
          SOCKS5
        </Animated.Text>
        <Animated.View
          style={[
            styles.basicStyle,
            {
              transform: [
                {
                  translateX: positionInterPol,
                },
              ],
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  basicStyle: {
    height: 31,
    width: 70,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: 4,
    marginLeft: 4,
    marginBottom: 4,
  },
  eahcStyles: {
    fontSize: 12,
    color: '#FFFFFF',
    position: 'absolute',
    top: 12,
    left: 24,
    zIndex: 1,
  },
  eahcStylesOf: {
    fontSize: 12,
    color: '#FFFFFF',
    position: 'absolute',
    top: 12,
    right: 16,
    zIndex: 1,
  },
  mainStyes: {
    borderRadius: 40,
    backgroundColor: '#81b0ff',
    height: 40,
    width: 150,
  },
})
