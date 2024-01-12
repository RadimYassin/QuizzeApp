import React, { useEffect } from 'react'
import SearchQuiz from './SearchQuiz'
import NavTop from '../nav/NavTop'
import { client } from '../../outils/axios'
import { useDispatch, useSelector } from 'react-redux'
import Delete from './Delete'


export default function History() {

    const user = useSelector(st => st.AuthReducer.user)
    const dispatch = useDispatch()

    useEffect(() => {
        client.get("/view-user-scores/" + user.id).then(res => dispatch({ type: "Fetch_results", payload: res.data }))
    }, [user.id])

    const Results = useSelector(st => st.ResultReducer.results);




    const searchQuery = useSelector(state => state.ResultReducer.searchQuery)





    const filteredResults = Results.filter((q) =>
        q.quiz_title.toLowerCase().includes(searchQuery.toLowerCase())
    );








    console.log(Results);
    return (
        <div className=''>


            <NavTop current={"History"} />



            <div class="relative mx-10 flex flex-col  mb-4 lg:mb-0 break-words bg-gray-50   shadow-lg rounded">
                <div class="rounded-t mb-0 px-0 border-0">
                    <div class="flex flex-wrap items-center px-4 py-2">
                        <div class="relative py-5 w-full max-w-full flex-grow flex-1">
                            <h3 class="text-2xl text-green-600 font-bold  ">Result</h3>
                        </div>
                        <div class="">

                            <SearchQuiz />
                        </div>
                    </div>


                    {
                        filteredResults.length > 0 ?


                            <div class="block overflow-x-auto shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                                    <thead>
                                        <tr>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">title</th>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">date</th>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">score</th>
                                            <th class="px-4 bg-gray-100  text-black  align-middle border border-solid border-gray-200  py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filteredResults.map(item => (
                                                <tr key={item.id} class="" >
                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4 text-left">{item.quiz_title}</td>


                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">{item.created_at}</td>
                                                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  p-4">{item.score} %</td>

                                                    <td class=" border-t-0 px-4 w-1/5 border-l-0 border-r-0 text-sm  p-4">
                                                        <div class="groupe">



                                                            <Delete />

                                                        </div>
                                                    </td>

                                                </tr>
                                            ))

                                        }



                                    </tbody>
                                </table>
                            </div>
                            : < p class="text-gray-500 text-center p-4">No  Result Yet! 🎉 </p>



                    }
                </div>
            </div>
        </div>
    )
}
