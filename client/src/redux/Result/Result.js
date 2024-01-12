const init={
    results:[],
    searchQuery:""
}

export default function ResultReducer(state =init , action) {
    switch (action.type) {
       case "Fetch_results":
          return {...state,results:action.payload}
       case "Add_results":
            return {...state,results:[...state.results,action.payload]};
       case "DELETE_results":
        return {...state,results:state.quizzes.filter(item => item.id!==action.payload)};
        case 'SET_SEARCH_QUERY_results':
         return { ...state, searchQuery: action.payload };
        default:
          return state;
    }
 }