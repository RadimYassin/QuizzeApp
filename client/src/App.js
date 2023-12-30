import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import DashTable from './Containers/DashTable';
import Inbox from './Containers/Inbox/Inbox';
import Users from './Containers/Users/Users';
import Quizzes from './Containers/Quizzes/Quizzes';
import Register from './Component/Auth/Login';
import GroupeList from './Containers/groupes/GroupeList';
import NotFound from './pages/NotFound';
import UserManagement from './Component/UserManagement/UserManagement';
import StartQuizze from './Containers/Quizzes/StartQuizze';
import Quizze from './Containers/Quizzes/Quizze';
import CreateSeaction from './Containers/CreateQuizze/CreateSeaction';
import Profile from './Containers/Profile/Profile';
import UpdateUser from './Component/UserManagement/UpdateUser';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SlideBar from './Containers/SlideBar';
import Navbar from './Component/Auth/Navbar';
import UploadeExcel from './Component/UserManagement/UploadeExcel';
import AddQs from './Containers/CreateQuizze/AddQs';








export default function App() {

  const user=useSelector(st=>st.AuthReducer.user)

  console.log("user :",user);
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
           { <SlideBar />}

          </nav>

          <main style={{ backgroundColor: "rgb(237, 241, 247)" }} className="flex-1 min-w-0 overflow-auto ...">

            <Routes>

              <Route path="/login" index element={<Register />} />
              <Route path="/" index element={ 
                
                <DashTable /> }
                 />
              <Route path="/Groupe/:id" element={<GroupeList /> } />
              <Route path="/profile" element={<Profile />} />

              <Route path="/inbox" element={<Inbox />}  />
              <Route path="/Students" element={<Users />} />
              <Route path="/createQuizze" element={<CreateSeaction />}  />
              <Route path="/addQs/:id" element={<AddQs />} />


              {/**students dash */}

              <Route path="/Quizzes" element={<Quizzes />} />
              <Route path="/Qz/:id" element={<Quizze />} />


              {/**admin dash */}
              <Route path="/adduser" element={<UserManagement />}  />
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
