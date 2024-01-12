import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashTable from './Components/DashTable';
import Inbox from './Components/Inbox/Inbox';
import Users from './Components/Users/Users';
import Quizzes from './Components/Quizzes/Quizzes';
import GroupeList from './Components/groupes/GroupeList';
import NotFound from './pages/NotFound';
import UpdateUser from './Components/UserManagement/UpdateUser';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Components/Auth/Login';
import UserManagement from './Components/UserManagement/UserManagement';
import Quizze from './Components/Quizzes/Quizze';
import CreateSeaction from './Components/CreateQuizze/CreateSeaction';
import Profile from './Components/Profile/Profile';
 import SlideBar from './Components/SlideBar';
import UploadeExcel from './Components/UserManagement/UploadeExcel';
import AddQuestion from './Components/CreateQuizze/AddQuestion';
import QuizzeMangement from './Components/QuizzeMangement/QuizzeMangement';
import Navbar from './Components/Navbar/Navbar';
import { client } from './outils/axios';
import History from './Components/History/History';


export default function App() {

  const user = useSelector(st => st.AuthReducer.user)
  const Game=useSelector(st=>st.GameReducer.Game)
  const dispatch = useDispatch()
  useEffect(() => {
    const user = localStorage.getItem("userInfo")
    if (user) {
      dispatch({ type: "LOGIN", payload: JSON.parse(user) })
    }
  }, []);


  if (!user) {
    return <BrowserRouter>
    <Routes>
    <Route path="/login" index element={<Login />} />

    </Routes>
    </BrowserRouter>
  }
  return (
    <BrowserRouter>
      <>
        <Navbar/>
        <div className="min-h-screen flex">

          <nav className=" flex-none shadow-md">
            
            {
              Game!="Started" &&    <SlideBar />
            }
            

          </nav>

          <main style={{ backgroundColor: "rgb(237, 241, 247)" }} className="flex-1 min-w-0 overflow-auto ">

            <Routes>

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
              <Route path="/History" element={<History/>} />

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
