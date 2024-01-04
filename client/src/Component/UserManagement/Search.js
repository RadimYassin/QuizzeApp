import React, { useEffect, useState } from 'react'
import { SiMicrosoftexcel } from "react-icons/si";
import { client } from '../../outils/axios';
import { saveAs } from 'file-saver';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AddUser from './AddUser';

import 'react-toastify/dist/ReactToastify.css';







export default function Search({ onSearchChange,handelclose }) {
    const searchQuery = useSelector((state) => state.UserReducer.searchQuery);


    const nav = useNavigate()



        











    const handelDownload = () => {

        try {
            client.get("/export", {
                method: "GET",
                mode: "cors",
                headers: {
                    // Remove incorrect CORS header
                    Accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Specify Excel format
                },
                responseType: "blob", // Use "blob" to receive file as a Blob object
            })
                .then(response => {
                    const blob = new Blob([response.data], {
                        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Set Excel MIME type
                    });


                    saveAs(blob, "myExcelFile.xlsx"); // Use ".xlsx" extension for Excel
                })
                .catch(err => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);

        }
    }
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
                                type="text" id="users-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Search for users" />
                        </div>
                    </form>

                </div>
                <div class="flex flex-row justify-between mt-2 gap-2">
                    <button onClick={handelDownload} type="button" data-modal-toggle="add-user-modal" class=" p-2  text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium inline-flex items-center justify-center gap-3 rounded-lg text-sm text-center ">
                        <SiMicrosoftexcel />
                        <span>download</span>
                    </button>


                    <Link to={"/upload"} onClick={handelclose} class="p-2  text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium inline-flex items-center justify-center gap-3 rounded-lg text-sm text-center" for="file_input">Upload file</Link>
                    {/* <input

                        style={{ display: 'none' }}
                        onChange={handleFileUpload}
                        class=" w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer " id="file_input" type="file" />
 */}



                    <AddUser />

                </div>
                {/* <ToastContainer /> */}


            </div>
        </>
    )
}
