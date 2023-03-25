import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import DeleteToggleIcon from '../../../image/Svg/DeleteToggleIcon'
import AsyncStorage from '@react-native-async-storage/async-storage'
import getListProxies from '../../../api/getListProxies'
import postUpdateProxyIps from '../../../api/ProxyAdd/postUpdateProxyIps'

function BottomSheetProxyIps({ handleClosePress, proxyIps, handleSnapPress, proxyId, setProxyInfo }) {
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const ips = useSelector(data => data.ipsTagsReducer.ips)
  const [tagsFiltred, setTagsFiltred] = useState(ips)
  const [open, setOpen] = useState(true)
  const [value, setValue] = useState('')
  const [requestValue, setRequestValue] = useState('')
  const [localIps, setLocakIps] = useState(proxyIps)

  useEffect(() => {
    setTagsFiltred(ips.filter(tag => tag?.value.toLowerCase()?.includes(value?.toLowerCase())))
  }, [ips, value])

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
    if (localIps.length == 0) {
      handleSnapPress(1)
    } else if (localIps.length < 3) {
      handleSnapPress(2)
    } else {
      handleSnapPress(3)
    }
  }

  const handleFocus = () => {
    if (value > 0) {
      if (requestValue.length == 0) {
        setOpen(true)
      }
    }
    if (localIps.length == 0) {
      handleSnapPress(4)
    } else if (localIps.length < 3) {
      handleSnapPress(4)
    } else {
      handleSnapPress(5)
    }
  }

  const handleDeleteIps = ipsId => {
    const data = {
      action: 'remove',
      ids: [ipsId],
    }
    async function delTag() {
      const userToken = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const token = `${id}_${userToken}`
      await postUpdateProxyIps({ token, proxyId, data })
      const endpoint = `id=${proxyId}`
      const proxy = await getListProxies({ token: token, limit: '100', offset: '0', endpoint })
      setProxyInfo(proxy.data[0])
      setLocakIps(proxy.data[0].access_ips)
    }
    delTag()
    if (localIps.length == 0) {
      handleSnapPress(1)
    } else if (localIps.length < 3) {
      handleSnapPress(2)
    } else {
      handleSnapPress(3)
    }
  }

  const handleAddTag = method => {
    const data = {
      action: method,
      ids: [requestValue],
    }
    async function addTag() {
      const userToken = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const token = `${id}_${userToken}`
      await postUpdateProxyIps({ token, proxyId, data })
      const endpoint = `id=${proxyId}`
      const proxy = await getListProxies({ token: token, limit: '100', offset: '0', endpoint })
      setProxyInfo(proxy.data[0])
      setLocakIps(proxy.data[0].access_ips)
      handleClosePress()
      setValue('')
    }
    addTag()
  }
  return (
    <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="always" style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, height: '100%' }}
        keyboardVerticalOffset={50}>
        <View style={styles.container}>
          <View>
            <View style={styles.topTabContainer}>
              <View style={styles.topTab} />
            </View>
            <Text style={styles.mainText}>{text?.texts?.t13}</Text>
            {localIps?.length > 0 && localIps?.length < 4 ? (
              <ScrollView>
                <View style={styles.itemContainer}>
                  {localIps?.map(item => {
                    return (
                      <TouchableOpacity style={styles.ipsContainer} key={item.id}>
                        <TouchableOpacity onPress={() => handleDeleteIps(item.id)}>
                          <DeleteToggleIcon />
                        </TouchableOpacity>
                        <Text style={styles.ipsText}>{item.value}</Text>
                      </TouchableOpacity>
                    )
                  })}
                </View>
              </ScrollView>
            ) : (
              <View />
            )}
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <View style={{ position: 'relative' }}>
              <TextInput
                value={value}
                onChangeText={handleChangeText}
                style={{
                  backgroundColor: '#1E2127',
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: '#333842',
                  marginTop: open && localIps?.length == 0 ? 50 : 14,
                }}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              {open && (
                <ScrollView style={styles.scrollViewContainer}>
                  <View style={{ paddingTop: 10, paddingHorizontal: 20 }}>
                    {tagsFiltred.map(item => (
                      <TouchableOpacity activeOpacity={0.8} key={item.id} onPress={() => handleSelect(item)}>
                        <Text style={styles.filterText}>{item.value}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              )}
            </View>
            <Text style={styles.ipsInfo}>{text?.texts?.t40}</Text>
            <Text style={styles.ipsInfoDanger}>{text?.texts?.t41}</Text>
            <TouchableOpacity onPress={() => handleAddTag('add')} style={styles.buttonConatiner}>
              <Text style={styles.buttonText}>{text?.buttons?.b3}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#0F1218',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    display: 'flex',
  },
  container: {
    height: '100%',
    backgroundColor: '#0F1218',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    fontSize: 17,
    lineHeight: 16,
    color: 'white',
    marginTop: 33,
    marginHorizontal: 20,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    minHeight: 40,
  },
  ipsContainer: {
    paddingTop: 6,
    paddingBottom: 7,
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
  ipsText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 15,
    marginLeft: 9,
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
    marginTop: 14,
  },
  scrollViewContainer: {
    position: 'absolute',
    width: '100%',
    maxHeight: 95,
    backgroundColor: '#1E2127',
    bottom: 53,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333842',
    zIndex: 1000,
  },
  filterText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
    marginBottom: 7,
  },
  ipsInfo: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
    marginTop: 14,
  },
  ipsInfoDanger: {
    color: '#EC3641',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
  },
  buttonConatiner: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#1E2127',
    marginTop: 20,
    borderRadius: 12,
    marginBottom: 0,
  },
  buttonText: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
  },
})
export default BottomSheetProxyIps
