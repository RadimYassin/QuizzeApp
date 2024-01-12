import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineManageAccounts, MdOutlineCreateNewFolder } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";

import { GrDocumentStore } from "react-icons/gr";

import { useSelector } from 'react-redux';
import useUserId from '../hooks/useUserId';
import { useDispatch } from 'react-redux';



export default function SlideBar() {

  const quizzes = useSelector(st => st.AvailableQuizzesReducer.quizzes);

   const dispatch = useDispatch()
   const navigate =useNavigate()
const handelLogOut=()=>{

  window.localStorage.removeItem("userInfo");
  dispatch({type:"LOGOUT"})
  navigate("login")

}
  const user = useUserId()
  return (
    <div className=" flex flex-col flex-auto flex-shrink-0 antialiased  text-gray-800">
      <div className="flex flex-col  w-64 bg-white h-full ">

        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
         {
           user?.type != "student" &&

           <li>
           <Link to="/" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-6">
             <span className="inline-flex justify-center items-center ml-4">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
             </span>
             <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
           </Link>
         </li>

         }  

            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">messages</div>
              </div>
            </li>
            <li>
              <Link to="/inbox" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Inbox</span>
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">New</span>
              </Link>
            </li>


            {
              user?.type=="teacher" && (

                <li>
                  <Link to="/Students" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">Students</span>
                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span>
                  </Link>
                </li>
              )
            }

            {
              user?.type == "admin" && (
                <>
                 <li>
                  <Link to="/adduser" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <MdOutlineManageAccounts className="w-6 h-6" />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">user management</span>
                  </Link>
                </li>
                   <li>
                   <Link to="/QuizzeManagement" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-6">
                     <span className="inline-flex justify-center items-center ml-4">
                       <GrDocumentStore className="w-6 h-6" />
                     </span>
                     <span className="ml-2 text-sm tracking-wide truncate">Quizze management</span>
                   </Link>
                 </li>
                </>
               
 

              )
            }

            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">Quizz</div>
              </div>
            </li>

            <li>


              {
                user?.type == "student" && (

             <>
                  <Link to="/Quizzes" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">Available Quizze</span>
                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">{quizzes?.length ?    quizzes?.length:""}</span>
                  </Link>
                    <Link to="/History" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                    <VscHistory className="w-6 h-6" />

                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">History Quizzes</span>
                  </Link>

                  </>

                )
              }


              {
                user?.type == "teacher" && (

                  <Link to="/createQuizze" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <MdOutlineCreateNewFolder className="w-5 h-5" />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">Create Quizze</span>
                  </Link>

                )
              }




            </li>

            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">Settings</div>
              </div>
            </li>
            <li>
              <Link to="/profile" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
              </Link>
            </li>
            {/* <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
              </a>
            </li> */}
            <li>
              <div onClick={handelLogOut} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-green-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
