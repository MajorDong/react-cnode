import Axios from 'axios'

const startFetchList = () => {
  return {
    type: 'START_FETCH_LIST'
  }
}

const fetchListSuccess = (payload) => {
  return {
    type: 'FETCH_LIST_SUCCESS',
    payload
  }
}

const fetchListFailed = () => {
  return {
    type: 'FETCH_LIST_FAILED'
  }
}

const fetchList = (tab) => dispatch => {
  dispatch(startFetchList())
  Axios.get("https://cnodejs.org/api/v1/topics", {
    params: {
      tab: tab,
      page: 1,
      limit: 20,
    }
  })
    .then(res => {
      if(res.status === 200){
        dispatch(fetchListSuccess({
          dataList: res.data.data
        }))
      }
    })
    .catch(err => {
      dispatch(fetchListFailed())
      console.log(err)
    })
}

export default fetchList