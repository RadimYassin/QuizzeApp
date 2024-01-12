import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavTop from '../nav/NavTop'
import StartQuizze from './modal/StartQuizze'
import { useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { client } from '../../outils/axios'
export default function IntroQuizze() {
    const dispatch = useDispatch()
    const {id}=useParams()
    const [cookies, setCookies] = useCookies(["idQ"])

    useEffect(()=>{
        dispatch({type:"GET_ONE_QUIZ",payload:id})
        setCookies("idQ",id)

 },[id])




 useEffect(() => {

    client.get("/Quiz/"+id).then(res=>
        dispatch({type:"GET_DATA_QUIZ",payload:res.data}) )
}, [])


 useEffect(()=>{
  dispatch({ type: "GET_Refreche_Page", payload:id })


},[])

    const quiz = useSelector(st => st.AvailableQuizzesReducer.quiz);

    
    return (
        <div className=''>


            <NavTop current={"Quiz"} />

            <div className='p-7 mt-5 '>
                <div className='container rounded-lg shadow-md bg-slate-50 py-6'>
                    <div className='flex flex-col lg:flex-row justify-between items-center '>
                        <div className='text-gray-500 p-3 flex flex-col gap-3'>
                            <h3>{quiz?.title}</h3>
                            <span className='text-sm'> <span className='font-bold text-gray-800 mr-5'>to Pass </span>80% or higher</span>
                        </div>
                        <div className='flex h-1/2 w-1/12 justify-end  border-l-2  mx-3 '>
                            <StartQuizze />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
