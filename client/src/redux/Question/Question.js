const init={
    Questions:[],
    loading: false,
    error: null,
}

export default function QuestionReducer(state =init , action) {
    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
          return { ...state, loading: true, error: null };
    
        case 'FETCH_DATA_SUCCESS':
          return { ...state, loading: false, Questions: action.payload, error: null };
    
        case 'FETCH_DATA_FAILURE':
          return { ...state, loading: false, Questions: [], error: action.payload };
        
        case 'DELETE_deleteQestion':
          return { ...state, Questions: state.Questions.filter(item => item.id!==action.payload) };
    
        default:
          return state;
      }
 }