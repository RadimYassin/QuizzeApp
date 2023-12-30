import React from 'react'
import "./style.css"
import Search from './Search'
import NavTop from '../nav/NavTop'

export default function ListX() {
    return (
        <main>
               <NavTop current={"groupe details"}/>

            <div class="  block sm:flex items-center justify-between px-9 lg:mt-1.5">
              <Search/>
            </div>
            <div class="flex flex-col">
                <section class="p-9 ">
                    <div class="">
                        <table class="flex  bg-slate-50 flex-row flex-no-wrap   w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr class=" flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th scope="col" class="px-6 py-3">Name</th>
                                    <th scope="col" class="px-6 py-3">Email</th>
                                    <th scope="col" class="px-6 py-3">Quizze</th>
                                    <th scope="col" class="px-6 py-3" >status</th>

                                    <th scope="col" class="px-6 py-3" >Actions</th>

                                </tr>

                            </thead>
                            <tbody class="flex-1 sm:flex-none">
                                <tr class=" bg-white border-b   hover:bg-gray-50  flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                    <td class="px-6 py-4">John Covv</td>
                                    <td class="px-6 py-4">contato@johncovv.com</td>
                                    <td class="px-6 py-4">js</td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center">
                                            <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                        </div>
                                    </td>


                                    <td class=" p-3 text-blue-500 hover:text-red-600 hover:font-medium cursor-pointer">info</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </section>


            </div>
        </main>


    )
}
