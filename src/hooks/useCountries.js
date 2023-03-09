import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCountry } from '../store/reducers/countryOrderReducer'
const useCountries = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function takeCountries() {
      fetch('https://proxydbtest.proxyline.net/projectapi/v1/1/countries/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          apikey: 'project-1-apikey',
        },
      })
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Network response was not ok.')
          }
        })
        .then(data => {
          dispatch(setCountry(data))
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error)
        })
    }
    takeCountries()
  }, [])
}

export default useCountries
