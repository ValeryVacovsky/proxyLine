import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCupones from '../api/adminQuery/getCupones'
import { setCupon } from '../store/reducers/cuponReducer'

const useCupones = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function takeCupones() {
      const res = await getCupones()
      dispatch(setCupon(res.data.data.coupones))
    }
    takeCupones()
  }, [])
}

export default useCupones
