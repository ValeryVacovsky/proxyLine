import React, { useCallback, useRef, useState, useEffect } from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet, SafeAreaView, Text, Pressable } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import getListProxies from '../../api/getListProxies'
import { setProxy } from '../../store/reducers/proxyReducer'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

import LayoutMain from '../../components/LayoutMain'
import Autodetect from '../../components/UI/FiltersUI/Autodetect'
import DateCreate from '../../components/UI/FiltersUI/DateCreate'
import DateOver from '../../components/UI/FiltersUI/DateOver'
import IPAddress from '../../components/UI/FiltersUI/IPAddress'
import Status from '../../components/UI/FiltersUI/Status'
import Types from '../../components/UI/FiltersUI/Types'
import VersionIp from '../../components/UI/FiltersUI/VersionIp'
import BottomSheetForm from '../../components/BottomSheetForm'
import Port from '../../components/UI/FiltersUI/Port'
import CountriesItem from '../../components/UI/FiltersUI/CountriesItem'
import Tags from '../../components/UI/FiltersUI/Tags'
import AllowedIP from '../../components/UI/FiltersUI/AllowedIP'
import { setFilter } from '../../store/reducers/filterReducer'
import IdProxy from '../../components/UI/FiltersUI/IdProxy'
import FilterOrders from '../../components/UI/FiltersUI/FilterOrders'
import getCountProxyFilter from '../../api/getCountProxyFilter'
import { useParams } from '../../hooks/useParams'
import { setEndpoint } from '../../store/reducers/endpointReducer'
import { setCurrentOffset } from '../../store/reducers/currentOffsetReducer'

const clearForm = {
  ip_type: [],
  status: ['active'],
  ip_version: [],
  typesIP: [],
  id: [],
  auto_renewal: [],
  dateCreate: [],
  dateOver: [],
  ip: [],
  port: [],
  orders: [],
  countries: [],
  countries_exclude: [],
  tags: [],
  tags_exclude: [],
  access_ips: [],
  access_ips_exclude: [],
}

const snapPoints = ['28%', '60%', '75%']

const snapPointsTagsIps = [
  150, 216, 244, 272, 300, 328, 356, 384, 412, 440, 468, 496, 524, 552, 580, 608, 636, 664, 692, 720,
]

function Filters({ navigation }) {
  const today = new Date()
  const [countProxies, setCountProxies] = useState(0)
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
  const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1))
  const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 7))
  const startOfMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1)
  const endOfMonth = new Date(today.getFullYear(), today.getMonth(), 0)
  const [startDayStatus, setStartDayStatus] = useState(false)
  const [startDayFrom, setStartDayFrom] = useState(new Date())
  const [startDayTo, setStartDayTo] = useState(new Date())
  const [endDayStatus, setEndDayStatus] = useState(false)
  const [endDayFrom, setEndDayFrom] = useState(new Date())
  const [endDayTo, setEndDayTo] = useState(new Date())
  const text = useSelector(res => res.textReducer.proxy_info.payload)
  const filterStore = useSelector(data => data.filterReducer.filter)
  const tags = useSelector(data => data.ipsTagsReducer.tags)
  const ips = useSelector(data => data.ipsTagsReducer.ips)
  const [countryExclude, setCountryExclude] = useState(false)
  const [tagsExclude, setTagsExclude] = useState(false)
  const [ipsExclude, setIpsExclude] = useState(false)
  const [bottomInset, setBottomInset] = useState(0)
  const [childrenItem, setChildrenItem] = useState(<View style={styles.children} />)
  const [selected, setSelected] = useState(null)
  const [fitlers, setFilters] = useState(clearForm)

  useEffect(() => {
    const listProxies = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getCountProxyFilter({ token: dataProps, limit: '100', offset: '0', endpoint })
      setCountProxies(data.data.count)
    }
    const allArraysEmpty = Object.values(fitlers).every(array => Array.isArray(array) && array.length === 0)
    if (!allArraysEmpty) {
      listProxies()
    }
  }, [fitlers])
  useEffect(() => {
    setFilters(filterStore)
  }, [])
  useEffect(() => {
    const allArraysEmpty = Object.values(fitlers).every(array => Array.isArray(array) && array.length === 0)
    if (allArraysEmpty) {
      getFilter()
    }
  }, [fitlers])
  const { params } = useParams({
    fitlers,
    startOfDay,
    endOfDay,
    firstDayOfWeek,
    lastDayOfWeek,
    startDayFrom,
    startDayTo,
    startOfMonth,
    endOfMonth,
    countryExclude,
    tagsExclude,
    ipsExclude,
  })
  const sheetRef = useRef(null)
  const sheetRefTagsIps = useRef(null)

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index)
  }, [])

  const handleClosePress = useCallback(() => {
    setChildrenItem(<View style={styles.children} />)
    sheetRef.current?.close()
  }, [])
  const handleSnapPressTagsIps = useCallback(index => {
    sheetRefTagsIps.current?.snapToIndex(index)
  }, [])

  const handleClosePressTagsIps = useCallback(() => {
    setChildrenItem(<View style={styles.children} />)
    sheetRefTagsIps.current?.close()
  }, [])
  const endpoint = `${params.toString()}`

  useEffect(() => {
    let count = 0
    Object.values(fitlers).map(item => {
      count += item.length
    })
    if (count > 0) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [fitlers])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setFilter(fitlers))
    dispatch(setCurrentOffset(0))
  }, [dispatch, fitlers])
  const getFilter = (move = false) => {
    const listProxies = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const dataProps = `${id}_${token}`
      const data = await getListProxies({ token: dataProps, limit: '100', offset: '0', endpoint })
      if (move) {
        navigation.navigate('Proxies')
      }
      dispatch(setProxy(data.data))
      dispatch(setEndpoint(endpoint))
      dispatch(setCurrentOffset(0))
    }
    listProxies()
  }
  const handleGoBack = () => {
    const go = async () => {
      getFilter()
      navigation.goBack()
    }
    go()
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          hitSlop={25}
          activeOpacity={0.7}
          onPress={() => {
            setFilters(clearForm)
          }}>
          <Text style={styles.headerLiftButtonClear}>{text?.buttons?.b5 || 'Очистить'}</Text>
        </Pressable>
      ),
      headerLeft: () => (
        <Pressable hitSlop={25} onPress={handleGoBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={styles.headerLeftTintVector} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b4}</Text>
        </Pressable>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain>
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView
            style={StyleSheet.flatten([
              styles.scrollViewContainer,
              {
                height: selected ? '84%' : '100%',
              },
            ])}>
            <View style={styles.chipsContainer}>
              <Status status={fitlers.status} setFilters={setFilters} />
              <VersionIp ipVersion={fitlers.ip_version} setFilters={setFilters} />
              <Types ipType={fitlers.ip_type} setFilters={setFilters} />
              <Autodetect autoRenewal={fitlers.auto_renewal} setFilters={setFilters} />
              <DateCreate
                startDayStatus={startDayStatus}
                setStartDayStatus={setStartDayStatus}
                startDayFrom={startDayFrom}
                setStartDayFrom={setStartDayFrom}
                startDayTo={startDayTo}
                setStartDayTo={setStartDayTo}
                dateCreate={fitlers.dateCreate}
                setFilters={setFilters}
                handleSnapPress={handleSnapPress}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePress}
              />
              <DateOver
                endDayStatus={endDayStatus}
                setEndDayStatus={setEndDayStatus}
                endDayFrom={endDayFrom}
                setEndDayFrom={setEndDayFrom}
                endDayTo={endDayTo}
                setEndDayTo={setEndDayTo}
                dateOver={fitlers.dateOver}
                setFilters={setFilters}
                handleSnapPress={handleSnapPress}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePress}
              />
              <IPAddress
                ip={fitlers.ip}
                setFilters={setFilters}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePress}
                handleSnapPress={handleSnapPress}
              />
              <IdProxy
                id={fitlers.id}
                setFilters={setFilters}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePress}
                handleSnapPress={handleSnapPress}
              />
              <Port
                port={fitlers.port}
                setFilters={setFilters}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePress}
                handleSnapPress={handleSnapPress}
              />
              <FilterOrders
                orders={fitlers.orders}
                setFilters={setFilters}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePress}
                handleSnapPress={handleSnapPress}
                setBottomInset={setBottomInset}
              />
              <CountriesItem
                countries={fitlers.countries}
                setFilters={setFilters}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePress}
                handleSnapPress={handleSnapPress}
                countriesExclude={countryExclude}
                setCountryExclude={setCountryExclude}
              />
              <Tags
                tagsFilter={fitlers.tags}
                tagsExclude={tagsExclude}
                setTagsExclude={setTagsExclude}
                setFilters={setFilters}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePressTagsIps}
                handleSnapPress={handleSnapPressTagsIps}
                tags={tags}
              />
              <AllowedIP
                ipsFilter={fitlers.access_ips}
                ipsExclude={ipsExclude}
                setIpsExclude={setIpsExclude}
                setFilters={setFilters}
                handleClosePress={handleClosePressTagsIps}
                handleSnapPress={handleSnapPressTagsIps}
                setChildrenItem={setChildrenItem}
                ips={ips}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
        {selected && (
          <TouchableOpacity onPress={() => getFilter(true)} style={styles.button} activeOpacity={0.8}>
            <SuperEllipseMaskView
              radius={{
                topLeft: 12,
                topRight: 12,
                bottomRight: 12,
                bottomLeft: 12,
              }}
              style={styles.buttonInner}>
              <Text style={styles.buttonText}>Показать прокси ({countProxies})</Text>
            </SuperEllipseMaskView>
          </TouchableOpacity>
        )}
      </View>

      <BottomSheetForm
        bottomInset={bottomInset}
        nestedScrollEnabled={false}
        navigation={navigation}
        enabledGestureInteraction={false}
        sheetRef={sheetRef}
        snapPoints={snapPoints}
        handleClosePress={handleClosePress}>
        <View style={styles.backdropContainer}>{childrenItem}</View>
      </BottomSheetForm>
      <BottomSheetForm
        bottomInset={bottomInset}
        nestedScrollEnabled={false}
        navigation={navigation}
        enabledGestureInteraction={false}
        sheetRef={sheetRefTagsIps}
        snapPoints={snapPointsTagsIps}
        handleClosePress={handleClosePressTagsIps}>
        <View style={styles.backdropContainer}>{childrenItem}</View>
      </BottomSheetForm>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  balanceIconFilter: {
    marginRight: 15,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 15,
  },
  scrollViewContainer: {
    width: '100%',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  button: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: '8%',
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
  children: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0F1218',
  },
  headerLiftButtonClear: {
    fontWeight: '700',
    fontSize: 15,
    color: 'white',
  },
  headerLeftTintVector: {
    bottom: 1,
  },
  backdropContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
})

export default Filters