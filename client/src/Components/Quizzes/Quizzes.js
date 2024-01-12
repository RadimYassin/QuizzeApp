import React, { useEffect } from 'react'
import NavTop from '../nav/NavTop'
import { PiCertificateThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { client } from '../../outils/axios';
import { useDispatch, useSelector } from 'react-redux';


export default function Quizzes() {
    const dispatch = useDispatch()
    useEffect(() => {
    
        client.get("/availableQuizzes").then(res =>
        
    
            dispatch({ type: "Fetch_Available_QUIZZES", payload: res.data })
             )
    }, [])
    
    // AvailableQuizzesReducer
    const quizzes = useSelector(st => st.AvailableQuizzesReducer.quizzes);
    

   
    return (
        <div >
            <NavTop current={"my Quizzes"} />

            <div className=' p-7 m-5 bg-slate-50  flex flex-col lg:flex-row gap-3'>

                {
                quizzes.length ?     quizzes.map(item => {


                        return (



                            <Link key={item.id} to={"/Qz/" + item.id} style={{ backgroundColor: "rgb(79, 209, 197)" }} className="w-full lg:w-1/4 p-6 flex flex-col gap-4 text-white shadow-2xl bg-blend-lighten md:bg-blend-darken border border-gray-200 rounded-lg ">
                                <div className='w-full flex justify-between'>
                                    <PiCertificateThin className='w-8 h-8' />
                                    <span>{item.time} min</span>
                                </div>


                                <div className=''>
                                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">{item.title}</h3>

                                    <span>date fin : {item.date}</span>
                                </div>



                                <div style={{ backgroundColor: "hsl(0, 0%, 100%)" }} className="w-full p-3 rounded-lg text-xl text-center text-black    bg-green-300 m-auto">
                                    {item.firstname} {item.lastname}    </div>
                            </Link>



                        )
                    }

                    )
               :<p>No Quizzes Yet</p> }













            </div>






        </div>
    )
}
