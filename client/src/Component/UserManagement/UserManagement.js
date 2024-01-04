import React, { useState } from 'react'
import NavTop from '../../Containers/nav/NavTop'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TbUserEdit } from "react-icons/tb";
import Search from './Search';
import { MdOutlineSendTimeExtension } from "react-icons/md";
import { useEffect } from 'react';
import { client } from '../../outils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { LiaEditSolid } from "react-icons/lia";
import DeleteUser from './DeleteUser';
import { TiDelete } from "react-icons/ti";

import NotFoundUser from './NotFoundUser';



export default function UserManagement() {
    const [open, setOpen] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        client.get("user").then(res => dispatch({ type: "Fetch_Error", payload: res.data.users })
        )
    }, [])
    const users = useSelector(st => st.UserReducer.users)
    const existing_users = useSelector((state) => state.UserReducer.existing_users);
    const searchQuery = useSelector((state) => state.UserReducer.searchQuery);


    const filteredUsers = users.filter((user) =>
        user.firstname.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handelclose = () => {

        setOpen(false)

        dispatch({type:"Delete_existing_users"})
    }



    const handleSearchChange = (query) => {
        dispatch({
            type: 'SET_SEARCH_QUERY',
            payload: query,
        });
    };


    useEffect(() => {

        // if (errors.ExistingUsers.existing_users.length > 0) {
        //     setOpen(true)
        // }
    }, [])


    // console.log(errors.ExistingUsers.existing_users);
    // console.log(errors.ExistingUsers.message);



    return (
        <div>


            <NavTop current={"Admin"} />

            {
                open == true && existing_users?.length   &&

                (<div class="mx-8 flex flex-col p-4  mb-4 text-sm text-red-800 rounded-lg bg-red-50  " role="alert">

                    <div class="flex justify-between items-center">
                        <div>
                            <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            {                            existing_users?.length   &&  <span class="font-medium">Some users already exist in the database. Please review the existing users.</span>
}   

                        </div>
                        <TiDelete onClick={handelclose} class="w-7 h-7 cursor-pointer" />
                    </div>
                    <div>

                            { existing_users?.length && (
                        <ul class="mt-1.5 list-disc list-inside">
                        {existing_users.map(item => (
                                        <li key={item.id}>
                                        {item.id}  -  {item.email}
                                        </li>
                                    ))}
                                </ul>
                            )}


                    </div>
                </div>
                )}

            <div class="relative m-2 lg:mx-10 flex flex-col  mb-4 lg:mb-0 break-words bg-gray-50   shadow-lg rounded">
                <div class="rounded-t mb-0 px-0 border-0">
                    <div class="flex flex-wrap items-center px-4 py-2">
                        <Search handelclose={handelclose}  onSearchChange={handleSearchChange} />
                    </div>
                    <div class="block overflow-x-auto shadow-md sm:rounded-lg">

                        {
                            filteredUsers.length == 0 ? <NotFoundUser /> :

                                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                                    <thead>
                                        <tr>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">id</th>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">firstname</th>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">lastname</th>

                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">email</th>

                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">type</th>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {




                                            filteredUsers.map(item => (
                                                <tr key={item.id} class="" >
                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4 text-left">{item.id}</td>


                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">{item.firstname}</td>
                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">{item.lastname}</td>

                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">

                                                        {item.email}

                                                    </td>

                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">
                                                        {item.type}

                                                    </td>
                                                    <td class="border-t-0 w-1/6 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">
                                                        <div class="groupe">
                                                            <button type="button" class="bg-transparent px-4 py-2 text-sm font-medium text-gray-900  ">
                                                                <MdOutlineSendTimeExtension class="w-7 h-7 text-green-600 " />

                                                            </button>
                                                            <button type="button" class="bg-transparent px-4 text-start text-gray-900  ">
                                                                <Link to={"/update/" + item.id}>
                                                                    <LiaEditSolid class="w-7 h-7 text-blue-600 " />
                                                                </Link>
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



//lien for table tr


export const Tr = styled.tr`


`