

export default function GameReducer(state ={Game:"Menu" ,score:0} , action) {
    switch (action.type) {
       case "Start":
          return {...state,Game:"Started"};
       case "Ended":
         return{ ...state, Game:"Ended"};

      case "QuiteQuizze":
            return {...state,  Game:"Menu"};

         case "Correct":
          return {...state, score: state.score+1};
       
         case "Previous":
            return {...state, score:state.score-1};

              
         case "Clear_score":
               return {...state,score:0};   
        default:
          return state;
    }
 }