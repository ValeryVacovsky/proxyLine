import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import LayoutMain from '../../componets/LayoutMain'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

import { Colors } from '../../utils/Color'
import DeleteToggleIcon from '../../image/Svg/DeleteToggleIcon'
import { useCreateTag } from '../../hooks/useCreateTag'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

function Tags({ navigation }) {
  const { createTag, setDeleteTag } = useCreateTag()
  const tags = useSelector(data => data.ipsTagsReducer.tags)
  const text = useSelector(res => res.textReducer.settings.payload)
  const [takeColor, setTakeColor] = useState('green')
  const [value, setValue] = useState('')
  const handlePress = item => {
    setTakeColor(item)
  }
  const handleChange = text => {
    setValue(text)
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> Настройки</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain style={styles.layOutConatiner}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.topContainer}>
            {tags.map(item => {
              return (
                <TouchableOpacity
                  style={{
                    paddingTop: 6,
                    paddingBottom: 7,
                    paddingLeft: 12,
                    paddingRight: 12,
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: Colors[item.color].back,
                    borderRadius: 30,
                    marginRight: 5,
                    marginTop: 10,
                    alignItems: 'center',
                  }}
                  key={item.id}
                  onPress={() => setDeleteTag(item.id)}>
                  <View>
                    <DeleteToggleIcon />
                  </View>

                  <Text
                    style={{
                      color: Colors[item.color].color,
                      fontWeight: '400',
                      fontSize: 13,
                      lineHeight: 15,
                      marginLeft: 9,
                    }}>
                    {item.value}
                  </Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <View style={{ positon: 'relative' }}>
            <TextInput style={styles.input} value={value} onChangeText={handleChange} />
            <View style={styles.tagContainer}>
              <Pressable
                hitSlop={10}
                activeOpacity={0.8}
                onPress={() => handlePress('green')}
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: Colors['green'].color,
                  borderRadius: 40,
                  marginLeft: 10,
                  borderWidth: takeColor === 'green' && 2,
                  borderColor: takeColor === 'green' ? 'white' : 'none',
                }}
              />
              <Pressable
                hitSlop={10}
                activeOpacity={0.8}
                onPress={() => handlePress('red')}
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: Colors['red'].color,
                  borderRadius: 40,
                  marginLeft: 10,
                  borderWidth: takeColor === 'red' && 2,
                  borderColor: takeColor === 'red' && 'white',
                }}
              />
              <Pressable
                hitSlop={10}
                activeOpacity={0.8}
                onPress={() => handlePress('orange')}
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: Colors['orange'].color,
                  borderRadius: 40,
                  marginLeft: 10,
                  borderWidth: takeColor === 'orange' && 2,
                  borderColor: takeColor === 'orange' && 'white',
                }}
              />
              <Pressable
                hitSlop={10}
                activeOpacity={0.8}
                onPress={() => handlePress('blue')}
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: Colors['blue'].color,
                  borderRadius: 40,
                  marginLeft: 10,
                  borderWidth: takeColor === 'blue' && 2,
                  borderColor: takeColor === 'blue' && 'white',
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.bottomTextContainer}
            onPress={() => {
              createTag({ color: takeColor, value: value })
            }}>
            <Text style={styles.bottomText}>{text?.buttons?.b1}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  layOutConatiner: {
    width: '100%',
    height: '100%',
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
    paddingTop: 6,
    paddingBottom: 7,
    paddingLeft: 12,
    paddingRight: 12,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.red.back,
    borderRadius: 30,
    marginRight: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  bottomContainer: {
    width: '100%',
    marginBottom: 24,
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
  bottomTextContainer: {
    backgroundColor: '#FAC637',
    width: '100%',
    height: 50,
    borderRadius: 12,
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    color: '#0F1218',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 15,
  },
  tagContainer: {
    position: 'absolute',
    top: 30,
    right: 10,
    display: 'flex',
    flexDirection: 'row',
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
})

export default Tags
