import React from 'react'
import Navbar from '../Component/Auth/Navbar'
import SlideBar from '../Containers/SlideBar'
import { useSelector } from 'react-redux'
export default function Home({content}) {
  const Game=useSelector(st=>st.QuizzeReducer[0].Game )


  return (
    <>
      <Navbar />
      <div className="min-h-screen flex">

        <nav className=" flex-none shadow-md">
        {Game === "Started" ? "" :<SlideBar/>}
          
        </nav>

        <main style={{ backgroundColor:"rgb(237, 241, 247)" }} className="flex-1 min-w-0 overflow-auto ...">
         {content}
        </main>
      </div>

    </>

  )
}
