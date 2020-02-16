import Axios from 'axios'

const startUser = () =>{
  return {
    type:'START_USER'
  }
}
const fetchUserSuccess = (payload) =>{
  return {
    type:'FETCH_USER_SUCCESS',
    payload
  }
}
const fetchUserFailed = () =>{
  return {
    type:'FETCH_USER_FAILED'
  }
}

const fetchUser = (loginname) => dispatch => {
  dispatch(startUser())
  Axios.get(`https://cnodejs.org/api/v1/user/${loginname}`)
    .then( res => {
      if(res.status === 200){
        dispatch(fetchUserSuccess({
          userData: res.data.data
        }))
      }
    })
    .catch( err =>{
      dispatch(fetchUserFailed())
      console.log(err)
    })
}

export default fetchUser