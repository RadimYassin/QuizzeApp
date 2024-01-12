
import React, { useState } from 'react'
import NavTop from '../nav/NavTop'
import styled from 'styled-components'
import Search from './Search';
import { useEffect } from 'react';
import { client } from '../../outils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { BsToggle2Off } from "react-icons/bs";
import DeleteUser from './DeleteQuizze';

import NotFound from './NotFound';
import StatusQuizze from './StatusQuizze';



export default function QuizzeMangement() {
    const [open, setOpen] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        client.get("/userWithquizze").then(res => 
            
{            dispatch({type:"Fetch_QUIZZEUSERS",payload:res.data.quizzesWithUsers });
})
    }, [])
    const quizzes = useSelector(st => st.QuizWithTeacherReducer.quizzes);
    const searchQuery = useSelector(st => st.QuizWithTeacherReducer.searchQuery);





    const filteredQuizzes = quizzes.filter((q) =>
        q.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handelclose = () => {

        setOpen(false)

    }



    const handleSearchChange = (query) => {
        dispatch({
            type: 'SET_SEARCH_QUERY_QUIZZEUSERS',
            payload: query,
        });
    };





    return (
        <div>


            <NavTop current={"Admin"} />

            

            <div class="relative m-2 lg:mx-10 flex flex-col  mb-4 lg:mb-0 break-words bg-gray-50   shadow-lg rounded">
                <div class="rounded-t mb-0 px-0 border-0">
                    <div class="flex flex-wrap items-center px-4 py-2">
                        <Search handelclose={handelclose}  onSearchChange={handleSearchChange} />
                    </div>
                    <div class="block overflow-x-auto shadow-md sm:rounded-lg">

                        {
                            filteredQuizzes.length == 0 ? <NotFound /> :

                                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                                    <thead>
                                        <tr>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">id</th>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">title</th>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">date</th>

                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">time</th>

                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">teacher</th>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {




                                            filteredQuizzes.map(item => (
                                                <tr key={item.id} class="" >
                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4 text-left">{item?.id}</td>


                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">{item?.title}</td>
                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">{item?.date}</td>

                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">

                                                        {item?.time} min 

                                                    </td>

                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">
                                                        {item?.created_by.email}

                                                    </td>
                                                    <td class="border-t-0 w-1/6 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">
                                                        <div class="groupe">
                                                            <button type="button" class="bg-transparent px-4 py-2 text-sm font-medium text-gray-900  ">
                                                                       <StatusQuizze status={item.status} id={item.id}/>
                                                            </button>
                                                    
                                                            <button type="button" class="bg-transparent px-4 py-2 text-sm font-medium text-gray-900  ">
                                                                <DeleteUser id={item.id} />
                                                            </button>

                                                        </div>
                                                    </td>

                                                </tr>
                                            ))
                                        }



                                    </tbody>
                                </table>}
                    </div>
                </div>
            </div>
        </div>
    )
}
