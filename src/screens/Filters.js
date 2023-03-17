import React, { useCallback, useRef, useMemo, useState, useEffect } from 'react'
import { ScrollView, View, TouchableOpacity, StyleSheet, SafeAreaView, Text } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import getListProxies from '../api/getListProxies'
import { setProxy } from '../store/reducers/proxyReducer'
import HeaderTintBack from '../image/Svg/HeaderTintBack'

import LayoutMain from '../componets/LayoutMain'
import Autodetect from '../componets/UI/FiltersUI/Autodetect'
import DateCreate from '../componets/UI/FiltersUI/DateCreate'
import DateOver from '../componets/UI/FiltersUI/DateOver'
import IPAddress from '../componets/UI/FiltersUI/IPAddress'
import Status from '../componets/UI/FiltersUI/Status'
import Types from '../componets/UI/FiltersUI/Types'
import VersionIp from '../componets/UI/FiltersUI/VersionIp'
import BottomSheetForm from '../componets/BottomSheetForm'
import Port from '../componets/UI/FiltersUI/Port'
import CountriesItem from '../componets/UI/FiltersUI/CountriesItem'
import Tags from '../componets/UI/FiltersUI/Tags'
import AllowedIP from '../componets/UI/FiltersUI/AllowedIP'
import { setFilter } from '../store/reducers/filterReducer'
import IdProxy from '../componets/UI/FiltersUI/IdProxy'
import FilterOrders from '../componets/UI/FiltersUI/FilterOrders'
import getCountProxyFilter from '../api/getCountProxyFilter'

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
  const clearForm = {
    ip_type: [],
    status: [],
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

  const [childrenItem, setChildrenItem] = useState(<View style={styles.children} />)
  const [selected, setSelected] = useState(null)
  const [fitlers, setFilters] = useState({
    ip_type: [],
    status: [],
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
  })

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
  let params = new URLSearchParams()

  Object.keys(fitlers).map(filterName => {
    if (filterName === 'dateCreate') {
      fitlers[filterName].map(item => {
        if (item === 'today') {
          params.append('start_date_from', startOfDay.toISOString())
          params.append('start_date_to', endOfDay.toISOString())
        } else if (item === 'toweek') {
          params.append('start_date_from', firstDayOfWeek.toISOString())
          params.append('start_date_to', lastDayOfWeek.toISOString())
        } else if (item === 'custom') {
          params.append('start_date_from', startDayFrom)
          params.append('start_date_to', startDayTo)
        } else {
          params.append('start_date_from', startOfMonth.toISOString())
          params.append('start_date_to', endOfMonth.toISOString())
        }
      })
    } else if (filterName === 'dateOver') {
      fitlers[filterName].map(item => {
        if (item === 'today') {
          params.append('end_date_from', startOfDay.toISOString())
          params.append('end_date_to', endOfDay.toISOString())
        } else if (item === 'toweek') {
          params.append('end_date_from', firstDayOfWeek.toISOString())
          params.append('end_date_to', lastDayOfWeek.toISOString())
        } else {
          params.append('end_date_from', startOfMonth.toISOString())
          params.append('end_date_to', endOfMonth.toISOString())
        }
      })
    } else if (filterName === 'countries') {
      if (countryExclude) {
        fitlers[filterName].map(item => {
          params.append('countries_exclude', item.toString())
        })
      } else {
        fitlers[filterName].map(item => {
          params.append('countries', item.toString())
        })
      }
    } else {
      fitlers[filterName].map(item => {
        params.append(filterName, item.toString())
      })
    }
  })
  const sheetRef = useRef(null)
  const snapPoints = useMemo(() => ['27%', '50%', '75%'], [])

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index)
  }, [])

  const handleClosePress = useCallback(() => {
    setChildrenItem(<View style={styles.children} />)
    sheetRef.current?.close()
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
      dispatch(setProxy(data))
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
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setFilters(clearForm)
          }}>
          <Text style={{ fontWeight: '700', fontSize: 15, color: 'white' }}>Очистить</Text>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={handleGoBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b4}</Text>
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
          // marginBottom: isOpen && 300,
          marginTop: 15,
        }}>
        <SafeAreaView>
          <ScrollView style={{ width: '100%', height: selected ? '84%' : '100%' }}>
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
                tagsFilterExcludes={fitlers.tags_exclude}
                setFilters={setFilters}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePress}
                handleSnapPress={handleSnapPress}
                tags={tags}
              />
              <AllowedIP
                ipsFilter={fitlers.access_ips}
                ipsFilterExcludes={fitlers.access_ips_exclude}
                setFilters={setFilters}
                handleClosePress={handleClosePress}
                handleSnapPress={handleSnapPress}
                setChildrenItem={setChildrenItem}
                ips={ips}
              />
              {/* {} */}
              <FilterOrders
                orders={fitlers.orders}
                setFilters={setFilters}
                setChildrenItem={setChildrenItem}
                handleClosePress={handleClosePress}
                handleSnapPress={handleSnapPress}
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
        nestedScrollEnabled={false}
        navigation={navigation}
        enabledGestureInteraction={false}
        sheetRef={sheetRef}
        snapPoints={snapPoints}
        handleClosePress={handleClosePress}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>{childrenItem}</View>
      </BottomSheetForm>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  balanceIconFilter: {
    marginRight: 15,
  },
  balanceIconFilterDotts: {},
  container: {
    flex: 1,
    marginHorizontal: 20,
    // eslint-disable-next-line no-use-before-define
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
})

export default Filters
