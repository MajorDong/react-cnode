
function user(state = {
 data:{
  loginname: '',
  avatar_url: '',
  score: '',
  create_at: '',
  recent_topics: [],
  recent_replies: []
 }
}, action) {
  switch (action.type) {
    case 'START_USER':
      return {
        ...state,
      }
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        data:action.payload.userData
      }
    case 'FETCH_LIST_FAILED':
      return {
        ...state
      }
    default:
      return state
  }
}

export default user