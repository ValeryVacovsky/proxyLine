import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Pressable, Keyboard } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import LayoutMain from '../components/LayoutMain'
import NotesTab from '../image/Svg/NotesTab'
import HeaderTintBack from '../image/Svg/HeaderTintBack'
import { TextInput } from 'react-native-gesture-handler'
import postUserComment from '../api/postUserComment'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import getUserComment from '../api/getUserComment'

function Notes({ navigation }) {
  const text = useSelector(res => res.textReducer.notes.payload)
  const [textValue, setTextValue] = useState('')
  const [pretextValue, setPreTextValue] = useState(textValue)
  const [openStatus, setOpenStatus] = useState(true)
  const [openStatusItem, setOpenStatusItem] = useState(
    <View style={styles.childrenContainer}>
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
  const handleOpenStatus = () => {
    setPreTextValue('')
    setOpenStatus(true)
    setOpenStatusItem(
      <View style={styles.childrenContainer}>
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
  }
  const handleCloseStatus = () => {
    saveChanges(pretextValue)
    setTextValue(pretextValue)
    setOpenStatus(true)
    setOpenStatusItem(
      <View style={styles.childrenContainer}>
        <TouchableOpacity
          style={styles.balanceIcon}
          activeOpacity={0.8}
          onPress={() => {
            setTextValue(pretextValue)
            setOpenStatus(false)
            setOpenStatusItem(<View />)
          }}>
          <NotesTab />
        </TouchableOpacity>
      </View>,
    )
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <View style={styles.childrenContainer}>{openStatusItem}</View>,
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={styles.headerLeftTintVector} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b3}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  const onChange = event => {
    setPreTextValue(event)
  }

  const saveChanges = async text => {
    const token = await AsyncStorage.getItem('@token')
    const id = await AsyncStorage.getItem('@id')
    const data = `${id}_${token}`
    const fun = async () => {
      await postUserComment({ data: { content: text }, token: data })
    }
    fun()
  }

  useEffect(() => {
    async function getComment() {
      const tokenUser = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const token = `${id}_${tokenUser}`
      const res = await getUserComment({ token })
      setTextValue(res.data.content)
      setPreTextValue(res.data.content)
    }
    getComment()
  }, [])

  return (
    <LayoutMain>
      <View style={styles.topInfoContainer}>
        <View style={styles.textInputContainer}>
          {openStatus ? (
            <Text style={styles.mainText}>{textValue}</Text>
          ) : (
            <TextInput
              style={styles.textInput}
              multiline
              numberOfLines={4}
              onChangeText={event => onChange(event)}
              value={pretextValue}
              returnKeyType="done"
              onSubmitEditing={() => {
                Keyboard.dismiss()
              }}
            />
          )}
        </View>
      </View>
      {openStatus ? (
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <SuperEllipseMaskView radius={styles.maskRadius} style={styles.buttonInner}>
            <Text style={styles.buttonText}>{text?.buttons?.b0 || 'Закрыть'}</Text>
          </SuperEllipseMaskView>
        </TouchableOpacity>
      ) : (
        <View style={styles.closeButtonsContainer}>
          <TouchableOpacity
            onPress={handleOpenStatus}
            style={styles.cancelButtonContainer}
            activeOpacity={0.8}
            onLongPress={() => {}}>
            <SuperEllipseMaskView radius={styles.maskRadius} style={styles.cancelButtonContainerMask}>
              <Text style={styles.cancelButtonText}>{text?.buttons?.b2 || 'Отменить'}</Text>
            </SuperEllipseMaskView>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCloseStatus}
            style={styles.saveButtonContainer}
            activeOpacity={0.8}
            onLongPress={() => {}}>
            <SuperEllipseMaskView radius={styles.maskRadius} style={styles.saveButtonContainerMask}>
              <Text style={styles.saveButtonText}>{text?.buttons?.b1 || 'Сохранить изменения'}</Text>
            </SuperEllipseMaskView>
          </TouchableOpacity>
        </View>
      )}
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  topInfoContainer: {
    display: 'flex',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: 'center',
    display: 'flex',
  },
  childrenContainer: {
    marginLeft: 15,
  },
  mainText: {
    color: 'white',
  },
  textInput: {
    paddingTop: 20,
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
    bottom: 45,
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
  headerLeftTintContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftTintText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
  headerLeftTintVector: {
    bottom: 1,
  },
  closeButtonsContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
    position: 'absolute',
    bottom: '5%',
    zIndex: 1,
  },
  cancelButtonContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
    zIndex: 1,
  },
  cancelButtonContainerMask: {
    backgroundColor: '#1E2127',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '90%',
    position: 'absolute',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },
  saveButtonContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  saveButtonContainerMask: {
    backgroundColor: '#FAC637',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '90%',
    position: 'absolute',
  },
  saveButtonText: {
    color: '#0F1218',
    fontWeight: '600',
    fontSize: 13,
  },
  maskRadius: {
    topLeft: 12,
    topRight: 12,
    bottomRight: 12,
    bottomLeft: 12,
  },
})

export default Notes
