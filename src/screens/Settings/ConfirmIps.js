import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import LayoutMain from '../../componets/LayoutMain'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import DeleteToggleIcon from '../../image/Svg/DeleteToggleIcon'
import { useCreateIps } from '../../hooks/useCreateIps'

function ConfirmIps() {
  const { setDeleteIps } = useCreateIps()
  const ipsList = useSelector(data => data.ipsTagsReducer.ips)
  const [text, setText] = useState({})
  const balanceText = useSelector(res => res.textReducer.settings)
  useEffect(() => {
    setText(balanceText.payload)
  }, [balanceText])
  return (
    <LayoutMain style={styles.layoutContainer}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.topContainer}>
            {ipsList.map(item => {
              return (
                <TouchableOpacity style={styles.topTextContainer} key={item.id} onPress={item => setDeleteIps(item)}>
                  <DeleteToggleIcon />
                  <Text style={styles.ipText}>{item.value}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={{ color: '#CBCBCB' }}>{text?.texts?.t26}</Text>
          </View>
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>{text?.buttons?.b1}</Text>
          </TouchableOpacity>
        </View>
      </View>
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
})

export default ConfirmIps
