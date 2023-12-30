import React from 'react'
import NavTop from './nav/NavTop'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'



export const data = [
    {
        id: 1,
        groupe: "Groupe 1",
        nbstudent: 30,
        status: "done",
        score: 100

    },
    {
        id: 2,
        groupe: "Groupe 2",
        nbstudent: 36,
        status: "done",
        score: 30

    },
    {
        id: 3,
        groupe: "Groupe 3",
        nbstudent: 38,
        status: "done",
        score: 32

    },
    {
        id: 4,
        groupe: "Groupe 4",
        nbstudent: 30,
        status: "done",
        score: 100

    },
    {
        id: 5,
        groupe: "Groupe 5",
        nbstudent: 36,
        status: "done",
        score: 60

    },
    {
        id: 6,
        groupe: "Groupe 6",
        nbstudent: 27,
        status: "not done",
        score: 5

    },

]
export default function DashTable() {

    const user = useSelector((state) => state.AuthReducer.user);
console.log(user);

    return (
        <div>
        <NavTop current={"Teacher"}/>
            <div class="p-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4">
                <div style={{ backgroundColor: "rgb(9, 211, 175)" }} class="  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-green-600 text-white font-medium group">
                    <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-green-800  transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl">215</p>
                        <p>students</p>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgb(9, 211, 175)" }} class="  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-green-600 text-white font-medium group">
                    <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 text-green-700 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                        </svg>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl">557</p>
                        <p>Quizess</p>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgb(9, 211, 175)" }} class="  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-green-600 text-white font-medium group">
                    <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 text-green-700 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>


                    </div>
                    <div class="text-right">
                        <p class="text-2xl">57</p>
                        <p>valide</p>
                    </div>
                </div>


            </div>


            <div class="relative mx-10 flex flex-col  mb-4 lg:mb-0 break-words bg-gray-50   shadow-lg rounded">
                <div class="rounded-t mb-0 px-0 border-0">
                    <div class="flex flex-wrap items-center px-4 py-2">
                        <div class="relative py-5 w-full max-w-full flex-grow flex-1">
                            <h3 class="text-2xl text-green-600 font-bold  ">Quizess</h3>
                        </div>
                        <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                            <button class="bg-green-300  text-white active:bg-green-600 hover:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                        </div>
                    </div>
                    <div class="block overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead>
                                <tr>
                                    <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">section</th>
                                    <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">studens</th>
                                    <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">status</th>

                                    <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">scores</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(item => (
                                        <tr key={item.id} class="" >
                                           <Link to={`/Groupe/${item.id}`}>
                                           <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4 text-left">{item.groupe}</td>
                                           </Link>
                                          
                                          
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">{item.nbstudent}</td>
                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">

                                                {item.status}

                                            </td>

                                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">
                                            <span style={{  color: item.score > 50 ? "rgb(9, 211, 175)" : "rgb(237, 78, 133)" }}  class="mr-2">{item.score} %</span>
                                                <div class="flex items-center justify-between gap-6">
                                                   
                                                    <div class="relative w-full " >
                                                        <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                                            <div style={{ width: item.score + "%", backgroundColor: item.score > 50 ? "rgb(9, 211, 175)" : "rgb(237, 78, 133)" }} class="shadow-none flex flex-col  text-center whitespace-nowrap text-white justify-center "></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                           
                                        </tr>
                                    ))
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}



//lien for table tr


export const Tr=styled.tr`


`