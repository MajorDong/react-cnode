function detail(state={
  data:{
    replies: []
  }
},action) {
  switch(action.type){
    case 'START_DETAIL_LIST':
      return {
        ...state,
      }
    case 'FETCH_DETAIL_SUCCESS':
      return {
        ...state,
        data: action.payload.detailData
      }
     case 'FETCH_DETAIL_FAILED':
       return {
         ...state,
       } 
    default:
      return state
  }
}

export default detail