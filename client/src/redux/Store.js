import { combineReducers, createStore } from "redux";
import GameReducer from "./Quizze/GameReducer";
import QuizReducer from "./Quizze/QuizReducer";
import UserReducer from "./User/UserReducer";
import AuthReducer from "./User/AuthReducer";
import QuestionReducer from "./Question/Question";
export const Store = createStore(combineReducers({ GameReducer, UserReducer, AuthReducer,QuizReducer,QuestionReducer}))