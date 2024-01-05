import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import NavTop from '../nav/NavTop'
export default function StartQuizze() {
    const dispatch = useDispatch()
    return (
        <div className=''>


            <NavTop current={"Quiz"} />

            <div className='p-7 mt-5 '>
                <div className='container rounded-lg shadow-md bg-slate-50 py-6'>
                    <div className='flex flex-col lg:flex-row justify-between items-center '>
                        <div className='text-gray-500 p-3 flex flex-col gap-3'>
                            <h3>ReactJs</h3>
                            <span className='text-sm'> <span className='font-bold text-gray-800 mr-5'>to Pass </span>80% or higher</span>
                        </div>
                        <div className='flex h-1/2 w-1/12 justify-end  border-l-2  mx-3 '>
                            <button  onClick={() => dispatch({ type: "Start" })} className=' bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>start</button>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
