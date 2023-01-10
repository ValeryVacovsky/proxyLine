import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Pressable, Keyboard } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import LayoutMain from '../componets/LayoutMain'
import NotesTab from '../image/Svg/NotesTab'
import { TextInput } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: 'Black',
    borderWidth: 1,
    padding: 5,
  },
  textInputContainer: {
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: 'center',
    display: 'flex',
  },
  textInput: {
    padding: 20,
    flex: 1,
    backgroundColor: '#1E2127',
    borderWidth: 1,
    borderColor: '#333842',
    borderRadius: 8,
    color: 'white',
    fontWeight: '400',
    fontSize: 14,
    height: 180,
  },
  button: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
    position: 'absolute',
    bottom: '8%',
    zIndex: 1,
  },
  buttonInner: {
    backgroundColor: '#1E2127',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '90%',
    position: 'absolute',
  },
  buttonText: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 13,
  },
})
function Notes({ navigation }) {
  const [textValue, setTextValue] = useState('')
  const [openStatus, setOpenStatus] = useState(true)
  const [openStatusItem, setOpenStatusItem] = useState(
    <View style={{ marginLeft: 15 }}>
      <Pressable
        hitSlop={50}
        style={styles.balanceIcon}
        activeOpacity={0.8}
        onPress={() => {
          setOpenStatus(false)
          setOpenStatusItem(<View />)
        }}>
        <NotesTab />
      </Pressable>
    </View>,
  )
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <View style={{ marginLeft: 15 }}>{openStatusItem}</View>,
    })
  }, [navigation])
  const onChange = event => {
    setTextValue(event)
  }
  return (
    <LayoutMain>
      <View
        style={{
          display: 'flex',
          marginLeft: 30,
          marginRight: 30,
          marginTop: 10,
        }}>
        <View style={styles.textInputContainer}>
          {openStatus ? (
            <Text style={{ color: 'white' }}>{textValue}</Text>
          ) : (
            // <AutoGrowingTextInput
            //   value={textValue.textValue}
            //   style={styles.textInput}
            //   onChange={event => onChange(event)}
            //   placeholder="Your Message"
            //   placeholderTextColor="#66737C"
            //   maxHeight={500}
            //   minHeight={200}
            //   enableScrollToCaret
            // />
            <TextInput
              style={styles.textInput}
              multiline
              numberOfLines={4}
              onChangeText={event => onChange(event)}
              value={textValue}
              returnKeyType="done"
              onSubmitEditing={() => {
                Keyboard.dismiss()
              }}
            />
          )}
        </View>
      </View>
      {openStatus ? (
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onLongPress={() => {}}>
          <SuperEllipseMaskView
            radius={{
              topLeft: 12,
              topRight: 12,
              bottomRight: 12,
              bottomLeft: 12,
            }}
            style={styles.buttonInner}>
            <Text style={styles.buttonText}>Закрыть</Text>
          </SuperEllipseMaskView>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            marginBottom: 40,
            position: 'absolute',
            bottom: '8%',
            zIndex: 1,
          }}>
          <TouchableOpacity
            onPress={() => {
              setOpenStatus(true)
              setOpenStatusItem(
                <View style={{ marginLeft: 15 }}>
                  <TouchableOpacity
                    style={styles.balanceIcon}
                    activeOpacity={0.8}
                    onPress={() => {
                      setOpenStatus(false)
                      setOpenStatusItem(<View />)
                    }}>
                    <NotesTab />
                  </TouchableOpacity>
                </View>,
              )
            }}
            style={{
              alignItems: 'center',
              width: '100%',
              marginBottom: 40,
              zIndex: 1,
            }}
            activeOpacity={0.8}
            onLongPress={() => {}}>
            <SuperEllipseMaskView
              radius={{
                topLeft: 12,
                topRight: 12,
                bottomRight: 12,
                bottomLeft: 12,
              }}
              style={{
                backgroundColor: '#1E2127',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: '90%',
                position: 'absolute',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: 13,
                }}>
                Отменить
              </Text>
            </SuperEllipseMaskView>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setOpenStatus(true)
              setOpenStatusItem(
                <View style={{ marginLeft: 15 }}>
                  <TouchableOpacity
                    style={styles.balanceIcon}
                    activeOpacity={0.8}
                    onPress={() => {
                      setOpenStatus(false)
                      setOpenStatusItem(<View />)
                    }}>
                    <NotesTab />
                  </TouchableOpacity>
                </View>,
              )
            }}
            style={{
              alignItems: 'center',
              width: '100%',
              marginTop: 20,
            }}
            activeOpacity={0.8}
            onLongPress={() => {}}>
            <SuperEllipseMaskView
              radius={{
                topLeft: 12,
                topRight: 12,
                bottomRight: 12,
                bottomLeft: 12,
              }}
              style={{
                backgroundColor: '#FAC637',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: '90%',
                position: 'absolute',
              }}>
              <Text
                style={{
                  color: '#0F1218',
                  fontWeight: '600',
                  fontSize: 13,
                }}>
                Сохранить изменения
              </Text>
            </SuperEllipseMaskView>
          </TouchableOpacity>
        </View>
      )}
    </LayoutMain>
  )
}

export default Notes
