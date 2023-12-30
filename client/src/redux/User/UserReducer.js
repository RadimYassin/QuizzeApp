const init ={
    users:[],
    searchQuery:"",
}

export default function UserReducer(state =init , action) {
    switch (action.type) {
       case "Fetch_Error":
          return {...state,users:action.payload};
        case "IMPORT_USER":
          if (Array.isArray(action.payload)) {

            return {...state,users:[...state.users,...action.payload]};
          
          }else {
            return state ;

        }
        case "ADD_ONE":
              return {...state,users:[...state.users,action.payload]};
      case "DELETE_USER":
        return {...state,users:state.users.filter(item => item.id!==action.payload)};
      case 'SET_SEARCH_QUERY':
          return { ...state, searchQuery: action.payload };
      case 'existing_users':
        if (Array.isArray(action.payload)) {
          return { ...state,existing_users:action.payload };
          
        } else {
            return state ;

        }


            // return { ...state,existing_users:action.payload };
     case 'Delete_existing_users':
              return { ...state,existing_users:null };
        default:
          return state;
    }
 }