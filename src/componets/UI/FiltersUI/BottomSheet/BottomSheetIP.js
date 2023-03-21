import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'

const IPS_REGEX =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

function BottomSheetIP({ handleClosePress, setIpaddress, handleSnapPress }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      order: '',
    },
  })
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const [focusInput, setFocusInput] = useState(false)
  const onSubmit = data => {
    handleClosePress()
    setIpaddress(prevState =>
      prevState.includes(data.order) ? prevState.filter(id => id !== data.order) : prevState.concat(String(data.order)),
    )
  }

  const handleBlur = () => {
    handleSnapPress(0)
    setFocusInput(false)
  }
  const handleFocus = () => {
    handleSnapPress(1)
    setFocusInput(true)
  }
  const heightOffScreen = Dimensions.get('window').height
  return (
    <View style={styles.container}>
      <View style={styles.topBar} />
      <View style={styles.topContainer}>
        <View style={{ width: '90%' }}>
          <View style={{ minHeight: 16, minWidth: 150, marginBottom: 3, marginTop: heightOffScreen > 700 ? 34 : 14 }}>
            <Text style={{ color: 'white', fontSize: 13, lineHeight: 15 }}>
              {errors.order && 'Введите в формате *.*.*.*'}
            </Text>
          </View>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value: IPS_REGEX,
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                type="number"
                keyboardType="numeric"
                returnKeyType="done"
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{
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
                  borderColor: (focusInput && '#fac637') || (errors.order && 'rgb(138,0,0)') || '#333842',
                }}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  topContainer: {
    alignItems: 'center',
    width: '100%',
  },
  containerInput: {
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
    marginTop: 45,
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

export default BottomSheetIP
