import React, { useEffect, useState } from 'react'
import { SiMicrosoftexcel } from "react-icons/si";
import { client } from '../../outils/axios';
import { saveAs } from 'file-saver';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';







export default function Search({ onSearchChange }) {
    const searchQuery = useSelector((state) => state.QuizWithTeacherReducer.searchQuery);
    return (


        <>
            <div class="w-full flex flex-col lg:flex-row justify-between items-center">

                <div class=" sm:flex items-center">

                    <form class="lg:pr-3" action="#" method="GET">
                        <label for="users-search" class="sr-only">Search</label>
                        <div class="mt-1 relative lg:w-64 xl:w-96">
                            <input
                                value={searchQuery}
                                onChange={(e) =>onSearchChange(e.target.value)}
                                type="text" id="users-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Search for Quizzes" />
                        </div>
                    </form>

                </div>
       


            </div>
        </>
    )
}
