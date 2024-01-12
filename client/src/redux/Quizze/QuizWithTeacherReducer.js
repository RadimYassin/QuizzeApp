const init={
    quizzes:[],
    searchQuery:""
}

export default function QuizWithTeacherReducer(state =init , action) {
    switch (action.type) {
       case "Fetch_QUIZZEUSERS":
          return {...state,quizzes:action.payload}
       case "DELETE_QUIZZE":
        return {...state,quizzes:state.quizzes.filter(item => item.id!==action.payload)};
        case 'SET_SEARCH_QUERY_QUIZZEUSERS':
         return { ...state, searchQuery: action.payload };

         case "UPDATE_QUIZ_STATUS":
            // Update the status of a quiz with the specified ID
            const updatedQuizzes = state.quizzes.map(item => {
                if (item.id === action.payload.quizId) {
                    // Update the status of the targeted quiz
                    return { ...item, status: action.payload.newStatus };
                }
                return item;
            });

            return { ...state, quizzes: updatedQuizzes };
        default:
          return state;
    }
 }