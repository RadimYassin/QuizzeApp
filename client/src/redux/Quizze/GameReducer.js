

export default function GameReducer(state ={Game:"Menu" ,score:0} , action) {
    switch (action.type) {
       case "Start":
          return {...state,Game:"Started"};
       case "Ended":
         return{ ...state, Game:"Ended"};
         case "Correct":
          return {...state, score: state.score+1};

         case "Previous":
            return {...state, score:state.score-1};
        default:
          return state;
    }
 }