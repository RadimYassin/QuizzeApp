import React, { useEffect, useState } from 'react'
import NavTop from '../nav/NavTop'
import { LiaEditSolid } from "react-icons/lia";
import SearchQuiz from './SearchQuiz';
import { CgFolderAdd } from "react-icons/cg";
import { Link } from 'react-router-dom';
import FormCreateQuiz from './FormCreateQuiz';
import { useDispatch, useSelector } from 'react-redux';
import { client } from '../../outils/axios';
import useUserId from '../../hooks/useUserId';
import DeleteQuizze from './DeleteQuizze';
function CreateSeaction() {

    const state = useSelector(state => state.QuizReducer.quizzes)
    const searchQuery = useSelector(state => state.QuizReducer.searchQuery)
    const dispatch = useDispatch()


    const info = useUserId()



    const filteredQuizzes = state.filter((q) =>
        q.title.toLowerCase().includes(searchQuery.toLowerCase())
    );



    const fetchdata = (id) => {
        if (id != null) {
            client.get(`/user/${id}/quizzes`).then(res => dispatch({ type: "Fetch_quizzes", payload: res.data.quizzes })

            )

        }

    }

    useEffect(() => {


        fetchdata(info?.id)
    }, [info?.id])
    return (
        <div className=''>


            <NavTop current={"CreateSeaction"} />

            <div class="p-2 py-4">
                <FormCreateQuiz />
            </div>


            <div class="relative mx-10 flex flex-col  mb-4 lg:mb-0 break-words bg-gray-50   shadow-lg rounded">
                <div class="rounded-t mb-0 px-0 border-0">
                    <div class="flex flex-wrap items-center px-4 py-2">
                        <div class="relative py-5 w-full max-w-full flex-grow flex-1">
                            <h3 class="text-2xl text-green-600 font-bold  ">Quizess</h3>
                        </div>
                        <div class="">

                            <SearchQuiz />

                        </div>
                    </div>


                    {
                        filteredQuizzes.length > 0 ?


                            <div class="block overflow-x-auto shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                                    <thead>
                                        <tr>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">title</th>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">date</th>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">time</th>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filteredQuizzes.map(item => (
                                                <tr key={item.id} class="" >
                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4 text-left">{item.title}</td>


                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">{item.date}</td>
                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">{item.time}min</td>

                                                    <td class=" border-t-0 px-4 w-1/5 border-l-0 border-r-0 text-sm  p-4">
                                                        <div class="groupe">

                                                            <button type="button" class="bg-transparent px-4 py-2 text-sm font-medium text-gray-900  ">
                                                                <LiaEditSolid class="w-7 h-7 text-blue-600 " />

                                                            </button>
                                                            <button type="button" class="bg-transparent px-4 py-2 text-sm font-medium text-gray-900  ">
                                                                <DeleteQuizze id={item.id} />
                                                            </button>
                                                            <button type="button" class="bg-transparent px-4 py-2 text-sm font-medium text-gray-900  ">
                                                                <Link to={"/addQs/" + item.id}>

                                                                    <CgFolderAdd class="w-7 h-7 text-green-600 " />

                                                                </Link>

                                                            </button>


                                                        </div>
                                                    </td>

                                                </tr>
                                            ))

                                        }



                                    </tbody>
                                </table>
                            </div>
                            : < p class="text-gray-500 text-center p-4">No  Quiz Yet! 🎉 </p>



                    }
                </div>
            </div>
        </div>


    )
}

export default CreateSeaction
