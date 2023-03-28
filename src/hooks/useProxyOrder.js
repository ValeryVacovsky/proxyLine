import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import postOrderAmount from '../api/postOrderAmount'
import { setPrice } from '../store/reducers/orderPriceReducer'

export const useProxyOrder = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function name() {
      const ipTypes = []
      postOrderAmount({
        quantity: 1,
        ip_type: 2,
        ip_version: 4,
        country: 'ru',
        period: 5,
        coupon: '',
      }).then(data => ipTypes.push(data?.data.amount))
      postOrderAmount({
        quantity: 1,
        ip_type: 1,
        ip_version: 4,
        country: 'ru',
        period: 5,
        coupon: '',
      }).then(data => ipTypes.push(data?.data.amount))
      postOrderAmount({
        quantity: 1,
        ip_type: 1,
        ip_version: 6,
        country: 'ru',
        period: 5,
        coupon: '',
      }).then(data => ipTypes.push(data?.data.amount))
      dispatch(setPrice(ipTypes))
    }
    name()
  }, [dispatch])
}
