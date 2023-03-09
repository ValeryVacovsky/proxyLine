import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCountryDiscription from '../api/adminQuery/getCountryDiscription'
import { setCountryDiscription } from '../store/reducers/countryDiscriptionReducer'

const useCountryDiscription = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function takeCountryDiscription() {
      const data = await getCountryDiscription()
      dispatch(setCountryDiscription(data.data.data))
    }
    takeCountryDiscription()
  }, [dispatch])
}

export default useCountryDiscription
