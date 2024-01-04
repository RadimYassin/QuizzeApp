const init={
    quizzes:[],
    searchQuery:""
}

export default function QuizReducer(state =init , action) {
    switch (action.type) {
       case "Fetch_quizzes":
          return {...state,quizzes:action.payload}
       case "Add_quizze":
            return {...state,quizzes:[...state.quizzes,action.payload]};
       case "DELETE_Qs":
        return {...state,quizzes:state.quizzes.filter(item => item.id!==action.payload)};
        case 'SET_SEARCH_QUERY':
         return { ...state, searchQuery: action.payload };
        default:
          return state;
    }
 }