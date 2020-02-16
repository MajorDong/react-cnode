import Axios from 'axios'

const startFetchDetail = () => {
  return {
    type: 'START_FETCH_DETAIL'
  }
}

const fetchDetailSuccess = (payload) => {
  return {
    type: 'FETCH_DETAIL_SUCCESS',
    payload
  }
}

const fetchDetailFailed = () => {
  return {
    type: 'FETCH_DETAIL_FAILED'
  }
}

const fetchDetail = (id) => dispatch => {
  dispatch(startFetchDetail())
  Axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
    .then(res => {
      if(res.status === 200){
        dispatch(fetchDetailSuccess({
          detailData: res.data.data
        }))
      }
    })
    .catch(err => {
      dispatch(fetchDetailFailed())
      console.log(err)
    })
}

export default fetchDetail