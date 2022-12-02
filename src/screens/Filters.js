import React, { useCallback, useRef, useMemo, useState, useEffect } from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet, SafeAreaView, Text } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'

import LayoutMain from '../componets/LayoutMain'
import Autodetect from '../componets/UI/FiltersUI/Autodetect'
import DateCreate from '../componets/UI/FiltersUI/DateCreate'
import DateOver from '../componets/UI/FiltersUI/DateOver'
import IPAddress from '../componets/UI/FiltersUI/IPAddress'
import Price from '../componets/UI/FiltersUI/Price'
import Status from '../componets/UI/FiltersUI/Status'
import Types from '../componets/UI/FiltersUI/Types'
import VersionIp from '../componets/UI/FiltersUI/VersionIp'
import BottomSheetForm from '../componets/BottomSheetForm'
import Port from '../componets/UI/FiltersUI/Port'
import CountriesItem from '../componets/UI/FiltersUI/CountriesItem'
import Tags from '../componets/UI/FiltersUI/Tags'
import AllowedIP from '../componets/UI/FiltersUI/AllowedIP'

function Filters({ navigation }) {
  const styles = StyleSheet.create({
    balanceIconFilter: {
      marginRight: 15,
    },
    balanceIconFilterDotts: {},
    container: {
      flex: 1,
      marginHorizontal: 20,
      // eslint-disable-next-line no-use-before-define
      marginBottom: isOpen && '100%',
    },
    scrollView: {
      marginHorizontal: 20,
      marginTop: 20,
    },
    text: {
      fontSize: 18,
      color: 'white',
      fontWeight: '700',
    },
    button: {
      alignItems: 'center',
      width: '100%',
      marginBottom: 40,
      position: 'absolute',
      bottom: '4%',
      zIndex: 1,
    },
    buttonInner: {
      backgroundColor: '#FAC637',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: '90%',
    },
    buttonText: {
      color: 'black',
      fontWeight: '600',
      fontSize: 13,
    },
    Chips: {
      width: '100%',
      marginLeft: 20,
    },
  })
  const sheetRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const snapPoints = useMemo(() => ['35%'], [])

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index)
    setIsOpen(false)
  }, [])

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close()
  }, [])

  const clearForm = {
    status: [],
    version: [],
    typesIP: [],
    price: [],
    autodetect: [],
    dateCreate: [],
    dateOver: [],
    ip: [],
    port: [],
    countries: [],
    tags: [],
    allowedIP: [],
  }

  const [childrenItem, setChildrenItem] = useState(<View />)
  const [selected, setSelected] = useState(null)
  const [fitlers, setFilters] = useState({
    status: [],
    version: [],
    typesIP: [],
    price: [],
    autodetect: [],
    dateCreate: [],
    dateOver: [],
    ip: [],
    port: [],
    countries: [],
    tags: [],
    allowedIP: [],
  })
  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    let count = 0
    // eslint-disable-next-line array-callback-return
    Object.values(fitlers).map(item => {
      count += item.length
    })
    if (count > 0) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [fitlers])
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.7} onPress={() => setFilters(clearForm)}>
          <Text style={{ fontWeight: '700', fontSize: 15, color: 'white' }}>Очистить</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          // eslint-disable-next-line no-use-before-define
          marginBottom: isOpen && 300,
        }}>
        <SafeAreaView>
          <ScrollView
            style={{
              width: '100%',
              height: '100%',
            }}>
            <View style={styles.chipsContainer}>
              <Status status={fitlers.status} setFilters={setFilters} />
              <VersionIp version={fitlers.version} setFilters={setFilters} />
              <Types typesIP={fitlers.typesIP} setFilters={setFilters} />
              <Price price={fitlers.price} setFilters={setFilters} />
              <Autodetect autodetect={fitlers.autodetect} setFilters={setFilters} />
              <DateCreate dateCreate={fitlers.dateCreate} setFilters={setFilters} />
              <DateOver dateOver={fitlers.dateOver} setFilters={setFilters} />
              <IPAddress
                ip={fitlers.ip}
                setFilters={setFilters}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePress}
                handleSnapPress={handleSnapPress}
                setIsOpen={setIsOpen}
              />
              <Port
                port={fitlers.port}
                setFilters={setFilters}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePress}
                handleSnapPress={handleSnapPress}
                setIsOpen={setIsOpen}
              />
              <CountriesItem countries={fitlers.countries} setFilters={setFilters} />
              <Tags tags={fitlers.tags} setFilters={setFilters} />
              <AllowedIP allowedIP={fitlers.allowedIP} setFilters={setFilters} />
            </View>
          </ScrollView>
        </SafeAreaView>
        {selected && (
          <TouchableOpacity
            onPress={() => {}}
            style={styles.button}
            activeOpacity={0.8}
            onLongPress={() => {
              navigation.navigate('Test')
            }}>
            <SuperEllipseMaskView
              radius={{
                topLeft: 12,
                topRight: 12,
                bottomRight: 12,
                bottomLeft: 12,
              }}
              style={styles.buttonInner}>
              <Text style={styles.buttonText}>Показать прокси</Text>
            </SuperEllipseMaskView>
          </TouchableOpacity>
        )}
      </View>
      {isOpen && (
        <BottomSheetForm
          navigation={navigation}
          sheetRef={sheetRef}
          snapPoints={snapPoints}
          setIsOpen={setIsOpen}
          handleClosePress={handleClosePress}>
          {childrenItem}
        </BottomSheetForm>
      )}
    </LayoutMain>
  )
}

export default Filters
