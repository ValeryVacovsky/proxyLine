import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import LayoutMain from '../../componets/LayoutMain'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'
import Toggle from '../../componets/UI/OrderUI/Toggle'
import TypeIcon from '../../image/Svg/TypeIcon'

function TypeProxy({ navigation }) {
  const text = useSelector(res => res.textReducer.settings.payload)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b2}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainInfo}>
          <View style={styles.descriptionContainer}>
            <View style={{ bottom: 2, marginRight: 23 }}>
              <TypeIcon />
            </View>
            <Text style={styles.descriptionText}>{text?.texts?.t33 || 'Протокол'}</Text>
          </View>
          <View style={{ right: 100, top: 5 }}>
            <Toggle />
          </View>
        </View>
      </SafeAreaView>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  mainInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 17,
    marginLeft: 33,
  },
  descriptionText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
})

export default TypeProxy
