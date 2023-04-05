import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
} from 'react-native'
import LayoutMain from '../../components/LayoutMain'
import DeleteToggleIcon from '../../image/Svg/DeleteToggleIcon'
import { useCreateIps } from '../../hooks/useCreateIps'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'
import { useForm, Controller } from 'react-hook-form'

function ConfirmIps({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      order: '',
    },
  })
  const { setDeleteIps, setCreateIps } = useCreateIps()
  const ipsList = useSelector(data => data.ipsTagsReducer.ips)
  const text = useSelector(res => res.textReducer.settings.payload)
  const [focusInput, setFocusInput] = useState(false)
  const onSubmit = data => {
    setCreateIps({
      value: data.order,
      name: 'string',
    })
    reset()
  }
  const handleBlur = () => {
    setFocusInput(false)
  }
  const handleFocus = () => {
    setFocusInput(true)
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={styles.headerLeftIcon} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b2}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain style={styles.layoutContainer}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.topContainer}>
              {ipsList.map(item => {
                return (
                  <TouchableOpacity style={styles.topTextContainer} key={item.id} onPress={() => setDeleteIps(item.id)}>
                    <DeleteToggleIcon />
                    <Text style={styles.ipText}>{item.value}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          </ScrollView>
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.textUnderInput}>{text?.texts?.t26}</Text>
            </View>
            <Text style={styles.careText}>{text?.texts?.t27}</Text>
            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                  min: 1024,
                  max: 65535,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    mask="[000].[000].[000].[000]"
                    type="number"
                    // keyboardType="numbers-and-punctuation"
                    keyboardType="phone-pad"
                    returnKeyType="done"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={StyleSheet.flatten([
                      styles.input,
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

            <TouchableOpacity style={styles.bottomTextContainer} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.bottomText}> {text?.buttons?.b1}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  layoutContainer: {
    width: '100%',
  },
  container: {
    display: 'flex',
    marginHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  scrollContainer: {
    width: '100%',
    marginTop: 24,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  topTextContainer: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#333842',
    borderRadius: 30,
    marginRight: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  ipText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 15,
    marginLeft: 9,
  },
  bottomContainer: {
    width: '100%',
    marginBottom: 24,
  },
  textUnderInput: {
    color: '#CBCBCB',
  },
  input: {
    backgroundColor: '#1E2127',
    color: 'white',
    height: 44,
    minWidth: '100%',
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  bottomTextContainer: {
    backgroundColor: '#FAC637',
    width: '100%',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    color: '#0F1218',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
  },
  headerLeftTintContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftIcon: {
    bottom: 1,
  },
  headerLeftTintText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
  careText: {
    color: '#EC3641',
    fontSize: 13,
    lineHeight: 15,
    marginTop: 20,
    fontWeight: '400',
    marginBottom: 20,
  },
})

export default ConfirmIps
