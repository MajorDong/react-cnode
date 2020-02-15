function indexList(state={
  data:[],
  isloading:true
},action) {
  switch(action.type){
    case 'START_FETCH_LIST':
      return {
        ...state,
        isloading: true,
      }
    case 'FETCH_LIST_SUCCESS':
      return {
        ...state,
        isloading:false,
        data: action.payload.dataList
      }
     case 'FETCH_LIST_FAILED':
       return {
         ...state,
         isloading: false
       } 
    default:
      return state
  }
}

export default indexList