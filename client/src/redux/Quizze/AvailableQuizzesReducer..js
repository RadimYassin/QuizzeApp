const init = {
  quizzes: [],
  quiz: null,
  quizData: null
};

export default function AvailableQuizzesReducer(state = init, action) {
  switch (action.type) {
    case "Fetch_Available_QUIZZES":
      return { ...state, quizzes: action.payload };

    case "GET_ONE_QUIZ":
      const foundQuiz = state.quizzes.find(q => q.id == action.payload);
      return { ...state, quiz: foundQuiz };

    case "GET_Refreche_Page":
      const refreshedQuiz = state.quizzes.find(q => q.id == action.payload);

      if (refreshedQuiz !== undefined) {
        return { ...state, quiz: refreshedQuiz };
      } else {
        console.log("Quiz not found");
        return state; // Return the current state without updating the quiz if it's not found.
      }

    case "GET_DATA_QUIZ":
      return { ...state, quizData: action.payload };
    case "Clear_data":
        return { ...state, quiz:null,quizData:null };
  
    default:
      return state;
  }
}
