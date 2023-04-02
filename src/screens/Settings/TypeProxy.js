import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import LayoutMain from '../../components/LayoutMain'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'
import Toggle from '../../components/UI/OrderUI/Toggle'
import TypeIcon from '../../image/Svg/TypeIcon'

function TypeProxy({ navigation }) {
  const text = useSelector(res => res.textReducer.settings.payload)
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
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainInfo}>
          <View style={styles.descriptionContainer}>
            <View style={styles.typeIconContainer}>
              <TypeIcon />
            </View>
            <Text style={styles.descriptionText}>{text?.texts?.t33 || 'Протокол'}</Text>
          </View>
          <View style={styles.toggleContainer}>
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
  headerLeftIcon: {
    bottom: 1,
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
  typeIconContainer: {
    bottom: 2,
    marginRight: 23,
  },
  descriptionText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
  toggleContainer: {
    right: 100,
    top: 5,
  },
})

export default TypeProxy
