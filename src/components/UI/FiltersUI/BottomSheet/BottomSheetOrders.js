import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Keyboard, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'

const heightOffScreen = Dimensions.get('window').height

function BottomSheetOrders({ handleClosePress, setOrdersDefault, setBottomInset }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [keyboardHeight, setKeyboardHeight] = useState(0)
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)
  const [focusInput, setFocusInput] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      order: '',
    },
  })

  useEffect(() => {
    function onKeyboardDidShow(e) {
      // Remove type here if not using TypeScript
      setKeyboardHeight(e.endCoordinates.height)
    }

    function onKeyboardDidHide() {
      setKeyboardHeight(0)
    }
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true) // or some other action
    })
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false) // or some other action
    })

    const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow)
    const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide)
    return () => {
      showSubscription.remove()
      hideSubscription.remove()
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  const onSubmit = data => {
    handleClosePress()
    setOrdersDefault(prevState =>
      prevState.includes(data.order) ? prevState.filter(id => id !== data.order) : prevState.concat(String(data.order)),
    )
  }

  const handleBlur = () => {
    setBottomInset(0)
    setFocusInput(false)
  }

  const handleFocus = () => {
    setFocusInput(true)
  }

  useEffect(() => {
    if (isKeyboardVisible) {
      setBottomInset(keyboardHeight)
    } else {
      setBottomInset(0)
    }
  }, [isKeyboardVisible, keyboardHeight, setBottomInset])

  return (
    <View style={styles.container}>
      <View style={styles.topBar} />
      <View style={styles.topContainer}>
        <View style={styles.topContainerSecond}>
          <View
            style={StyleSheet.flatten([
              styles.infoContainer,
              {
                marginTop: heightOffScreen > 700 ? 34 : 14,
              },
            ])}>
            <Text style={styles.infoText}>{errors.order && 'Введите порт'}</Text>
          </View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                type="number"
                keyboardType="numeric"
                returnKeyType="done"
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={StyleSheet.flatten([
                  styles.topInput,
                  {
                    borderColor: (focusInput && '#fac637') || (errors.order && 'rgb(138,0,0)') || '#333842',
                  },
                ])}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="order"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.bottomButton} onPress={handleSubmit(onSubmit)} activeOpacity={0.8}>
        <Text style={styles.bottomButtonText}>{text?.buttons?.b1}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 60,
    height: 3,
    borderRadius: 40,
    marginTop: 10,
  },
  container: {
    backgroundColor: '#0F1218',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    alignItems: 'center',
    width: '100%',
  },
  topContainerSecond: {
    width: '90%',
  },
  topInput: {
    backgroundColor: '#1E2127',
    color: 'white',
    height: 44,
    minWidth: '100%',
    marginBottom: 14,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  infoContainer: {
    minHeight: 16,
    minWidth: 150,
    marginBottom: 3,
  },
  infoText: {
    color: 'white',
    fontSize: 13,
    lineHeight: 15,
  },
  bottomButton: {
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: '#1E2127',
    width: '90%',
    marginBottom: 100,
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

export default BottomSheetOrders
