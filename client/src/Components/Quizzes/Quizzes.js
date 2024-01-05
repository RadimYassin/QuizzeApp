import React from 'react'
import NavTop from '../nav/NavTop'
import { PiCertificateThin } from "react-icons/pi";
import { Link } from 'react-router-dom';


export default function Quizzes() {
    return (
        <div >
            <NavTop current={"my Quizzes"} />

<div className=' p-7 m-5 bg-slate-50  flex flex-col lg:flex-row gap-3'>
<Link to="/Qz/1"  style={{ backgroundColor:"rgb(79, 209, 197)" }} className="w-full lg:w-1/4 p-6 flex flex-col gap-4 text-white shadow-2xl bg-blend-lighten md:bg-blend-darken border border-gray-200 rounded-lg ">
   <div className='w-full flex justify-between'>
   <PiCertificateThin className='w-8 h-8' />
   <span>40 min</span>
   </div>


       <div className=''>
       <h3 className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">React js</h3>

        <span>date : 11/11/2023</span>
       </div>
        
    

<div style={{ backgroundColor:"hsl(0, 0%, 100%)" }} className="w-full p-3 rounded-lg text-xl text-center text-black    bg-green-300 m-auto">
        radim yassine
    </div>
</Link>




</div>


           


          
        </div>
    )
}
