import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import DeleteToggleIcon from '../../../image/Svg/DeleteToggleIcon'
import { Colors } from '../../../utils/Color'
import postUpdateProxyTags from '../../../api/ProxyAdd/postUpdateProxyTags'
import AsyncStorage from '@react-native-async-storage/async-storage'
import getListProxies from '../../../api/getListProxies'

function BottomSheetProxyTags({ proxyTags, handleSnapPress, proxyId, setProxyInfo, heightTags, setHeightTags }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const tags = useSelector(data => data.ipsTagsReducer.tags)
  const [tagsFiltred, setTagsFiltred] = useState(tags)
  const [open, setOpen] = useState(true)
  const [value, setValue] = useState('')
  const [height, setHeight] = useState(heightTags)
  const [requestValue, setRequestValue] = useState('')
  const [localTags, setLocalTags] = useState(proxyTags)

  useEffect(() => {
    setTagsFiltred(tags.filter(tag => tag?.value.toLowerCase()?.includes(value?.toLowerCase())))
  }, [tags, value])

  useEffect(() => {
    if (value.length > 0) {
      setOpen(true)
    } else {
      setOpen(false)
    }
    if (tagsFiltred.length === 0) {
      setOpen(false)
    }
  }, [handleSnapPress, value, tagsFiltred])

  const handleChangeText = item => {
    setValue(item)
  }

  const handleSelect = item => {
    setRequestValue(item.id)
    setValue(item.value)
    setOpen(false)
  }

  const handleBlur = () => {
    setOpen(false)
    if (localTags.length == 0) {
      handleSnapPress(1)
    } else {
      handleSnapPress(2)
    }
  }

  const handleFocus = () => {
    if (value > 0) {
      if (requestValue.length == 0) {
        setOpen(true)
      }
    }
    if (height == 1) {
      handleSnapPress(4)
    } else if (height == 38) {
      handleSnapPress(5)
    } else {
      handleSnapPress(6)
    }
  }

  const handleDeleteTag = tagId => {
    const data = {
      action: 'remove',
      ids: [tagId],
    }
    async function delTag() {
      const userToken = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const token = `${id}_${userToken}`
      await postUpdateProxyTags({ token, proxyId, data })
      const endpoint = `id=${proxyId}`
      const proxy = await getListProxies({ token: token, limit: '100', offset: '0', endpoint })
      setProxyInfo(proxy.data[0])
      setLocalTags(proxy.data[0].tags)
    }
    delTag()
  }

  useEffect(() => {
    if (height == 1) {
      handleSnapPress(1)
    } else if (height == 38) {
      handleSnapPress(2)
    } else {
      handleSnapPress(3)
    }
  }, [height, heightTags])

  const handleAddTag = method => {
    const data = {
      action: method,
      ids: [requestValue],
    }
    async function addTag() {
      const userToken = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const token = `${id}_${userToken}`
      await postUpdateProxyTags({ token, proxyId, data })
      const endpoint = `id=${proxyId}`
      const proxy = await getListProxies({ token: token, limit: '100', offset: '0', endpoint })
      setProxyInfo(proxy.data[0])
      setLocalTags(proxy.data[0].tags)
    }
    setValue('')
    addTag()
  }
  return (
    <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="always" style={styles.scrollViewMainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardContainer}
        keyboardShouldPersistTaps="always"
        keyboardVerticalOffset={104}>
        <View style={styles.container}>
          <View>
            <View style={styles.topTabContainer}>
              <View style={styles.topTab} />
            </View>
            <Text style={styles.mainText}>{text?.texts?.t14}</Text>
            <ScrollView style={styles.scrollViewListContainer}>
              <View
                style={styles.itemContainer}
                onLayout={event => {
                  const { height } = event.nativeEvent.layout
                  setHeightTags(height)
                  setHeight(height)
                }}>
                {localTags?.map(item => {
                  return (
                    <TouchableOpacity
                      style={StyleSheet.flatten([
                        styles.localTagsContainer,
                        {
                          backgroundColor: Colors[item.color].back,
                        },
                      ])}
                      key={item.id}>
                      <TouchableOpacity onPress={() => handleDeleteTag(item.id)}>
                        <DeleteToggleIcon />
                      </TouchableOpacity>
                      <Text
                        style={StyleSheet.flatten([
                          styles.localTagsText,
                          {
                            color: Colors[item.color].color,
                          },
                        ])}>
                        {item.value}
                      </Text>
                    </TouchableOpacity>
                  )
                })}
              </View>
            </ScrollView>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                value={value}
                onChangeText={handleChangeText}
                style={StyleSheet.flatten([
                  styles.input,
                  {
                    marginTop: open && localTags?.length == 0 ? 50 : 14,
                  },
                ])}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              {open && (
                <ScrollView style={styles.scrollViewContainer}>
                  <View style={styles.scrollViewContainerSecond}>
                    {tagsFiltred.map(item => (
                      <TouchableOpacity activeOpacity={0.8} key={item.id} onPress={() => handleSelect(item)}>
                        <Text style={styles.filterText}>{item.value}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              )}
            </View>

            <Text style={styles.TagInfo}>{text?.texts?.t42}</Text>
            <TouchableOpacity onPress={() => handleAddTag('add')} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>{text?.buttons?.b3}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
    justifyContent: 'space-between',
  },
  keyboardContainer: {
    flex: 1,
  },
  topTabContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  topTab: {
    position: 'absolute',
    width: 60,
    height: 3,
    backgroundColor: 'rgba(255,255,255, 0.1)',
    marginTop: 10,
    borderRadius: 100,
  },
  mainText: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 16,
    color: 'white',
    marginTop: 33,
    marginHorizontal: 20,
  },
  localTagsContainer: {
    paddingTop: 6,
    paddingBottom: 7,
    paddingLeft: 12,
    paddingRight: 12,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 30,
    marginRight: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  localTagsText: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 15,
    marginLeft: 9,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    minHeight: 1,
    backgroundColor: 'red ',
  },
  scrollViewListContainer: {
    maxHeight: 114,
  },
  bottomContainer: {
    marginHorizontal: 20,
    marginBottom: 234,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#1E2127',
    paddingHorizontal: 10,
    paddingVertical: 15,
    color: 'white',
    fontWeight: '600',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333842',
    marginBottom: 14,
  },
  scrollViewMainContainer: {
    height: '100%',
    backgroundColor: '#0F1218',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    display: 'flex',
  },
  scrollViewContainer: {
    position: 'absolute',
    width: '100%',
    maxHeight: 99,
    backgroundColor: '#1E2127',
    bottom: 53,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333842',
  },
  scrollViewContainerSecond: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  filterText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
    marginBottom: 7,
  },
  TagInfo: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
  },
  buttonContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#1E2127',
    marginTop: 20,
    borderRadius: 12,
    marginBottom: 34,
  },
  buttonText: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
  },
})
export default BottomSheetProxyTags
