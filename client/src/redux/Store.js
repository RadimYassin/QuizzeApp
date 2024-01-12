import { combineReducers, createStore } from "redux";
import GameReducer from "./Quizze/GameReducer";
import QuizReducer from "./Quizze/QuizReducer";

import QuizWithTeacherReducer from "./Quizze/QuizWithTeacherReducer";
import AvailableQuizzesReducer from "./Quizze/AvailableQuizzesReducer.";


import UserReducer from "./User/UserReducer";
import AuthReducer from "./User/AuthReducer";
import QuestionReducer from "./Question/Question";
import ResultReducer from "./Result/Result";
export const Store = createStore(combineReducers({ GameReducer, UserReducer, AuthReducer,QuizReducer,QuestionReducer,AvailableQuizzesReducer,QuizWithTeacherReducer,ResultReducer}))