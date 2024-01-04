import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashTable from './Containers/DashTable';
import Inbox from './Containers/Inbox/Inbox';
import Users from './Containers/Users/Users';
import Quizzes from './Containers/Quizzes/Quizzes';
import Register from './Component/Auth/Login';
import GroupeList from './Containers/groupes/GroupeList';
import NotFound from './pages/NotFound';
import UserManagement from './Component/UserManagement/UserManagement';
import Quizze from './Containers/Quizzes/Quizze';
import CreateSeaction from './Containers/CreateQuizze/CreateSeaction';
import Profile from './Containers/Profile/Profile';
import UpdateUser from './Component/UserManagement/UpdateUser';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SlideBar from './Containers/SlideBar';
import UploadeExcel from './Component/UserManagement/UploadeExcel';

import AddQuestion from './Containers/CreateQuizze/AddQuestion';
import QuizzeMangement from './Component/QuizzeMangement/QuizzeMangement';
import Navbar from './Containers/Navbar/Navbar';
// import SlideBar from './Containers/slideBar/SlideBar';
// import Navbar from './Containers/slideBar/Navbar';








export default function App() {

  const user = useSelector(st => st.AuthReducer.user)

  const dispatch = useDispatch()
  useEffect(() => {
    const user = localStorage.getItem("userInfo")


    if (user) {
      dispatch({ type: "LOGIN", payload: JSON.parse(user) })
    }
  }, []);
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <div className="min-h-screen flex">

          <nav className=" flex-none shadow-md">
            {
              user && <SlideBar />
            }

          </nav>

          <main style={{ backgroundColor: "rgb(237, 241, 247)" }} className="flex-1 min-w-0 overflow-auto ">

            <Routes>

              <Route path="/login" index element={<Register />} />
              <Route path="/" index element={

                <DashTable />}
              />
              <Route path="/Groupe/:id" element={<GroupeList />} />
              <Route path="/profile" element={<Profile />} />

              <Route path="/inbox" element={<Inbox />} />
              <Route path="/Students" element={<Users />} />
              <Route path="/createQuizze" element={<CreateSeaction />} />
              <Route path="/addQs/:id" element={<AddQuestion />} />


              {/**students dash */}

              <Route path="/Quizzes" element={<Quizzes />} />
              <Route path="/Qz/:id" element={<Quizze />} />


              {/* *admin dash*/}

              <Route path="/adduser" element={<UserManagement />} />
              <Route path="/QuizzeManagement" element={<QuizzeMangement />} />


              <Route path="/update/:id" element={<UpdateUser />} />
              <Route path="/upload" element={<UploadeExcel />} />

              <Route path="/*" element={<NotFound />} />

            </Routes>
          </main>
        </div>

      </>



    </BrowserRouter>
  )
}
