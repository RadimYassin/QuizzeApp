import React, { useState } from 'react'
import { data } from './Data'
import { useDispatch, useSelector } from 'react-redux'
import "./style.css"

export default function BodyQuizze() {
    const score = useSelector(state => state.GameReducer.score)
    const [curentQ, setCurentQ] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")




    const handleChange = (event) => {
        setOptionChosen(event.target.value);
      };
    const dispatch = useDispatch()


    const VerfiyeAndNext = () => {


        if (data[curentQ].Answer == optionChosen) {
            dispatch({ type: "Correct" })

        }

        setCurentQ(curentQ + 1)


    }

    const FinshQuizze = () => {
        if (data[curentQ].Answer == optionChosen) {
            dispatch({ type: "Correct" })

        }
        dispatch({ type: "Ended" })

    }


    const Previous=()=>{
        if (data[curentQ].Answer == optionChosen) {
            dispatch({ type: "Previous" })

        }
        setCurentQ(curentQ - 1)

    }

    return (
        <div className='m-auto p-7 mt-5 container rounded-lg shadow-md bg-slate-50 '>



            <div className="flex flex-col items-start w-full">
                <h4 className="mt-10 text-xl text-gray-600">
                    Question {curentQ + 1} of {data.length}
                </h4>
                <div className="mt-4 text-1xl text-gray-900">
                    {data[curentQ]?.Question}
                </div>
            </div>

            <div className='mt-3  flex flex-col gap-5'>




                <div class="flex  items-center ps-4 border border-green-200 rounded">
                    <input 
                    
                    id="A" 
                    type="radio" 
                    value="A"
                     name="bordered-radio" 
                     class=" w-6 h-6 border-green-200 text-green-600 bg-gray-100  "
                     checked={optionChosen === "A"}
                     onChange={handleChange}
                     
                     />
                    <label style={{ width: "100%" }} htmlFor="A" class=" py-4 ms-2 text-sm font-medium text-green-900 ">{data[curentQ]?.OptionA}</label>
                </div>


                <div class="flex  items-center ps-4 border border-green-200 rounded">
                    <input 
                    
                    id="B" 
                    type="radio"
                      value="B"
                    name="bordered-radio" 
                    class=" w-6 h-6 border-green-200 text-green-600 bg-gray-100  "
                    checked={optionChosen === "B"}
                    onChange={handleChange}
                  
                     />
                    <label style={{ width: "100%" }}  htmlFor="B" class=" py-4 ms-2 text-sm font-medium text-green-900 ">{data[curentQ]?.OptionB}</label>
                </div>


                <div class="flex  items-center ps-4 border border-green-200 rounded">
                    <input 
                    
                    id="C" 
                    type="radio"
                    value="C"
                    name="bordered-radio" 
                    class=" w-6 h-6 border-green-200 text-green-600 bg-gray-100  "
                    checked={optionChosen === "C"}
                    onChange={handleChange}
                     
                     />
                    <label style={{ width: "100%" }} htmlFor="C" class=" py-4 ms-2 text-sm font-medium text-green-900 ">{data[curentQ]?.OptionC}</label>
                </div>

              

                <div class="flex  items-center ps-4 border border-green-200 rounded">
                    <input 
                    
                    id="D" 
                    type="radio" 
                    value="D"
                    name="bordered-radio" 
                    class=" w-6 h-6 border-green-200 text-green-600 bg-gray-100  "
                    checked={optionChosen === "D"}
                    onChange={handleChange}
                     />
                    <label style={{ width: "100%" }} htmlFor="D" class=" py-4 ms-2 text-sm font-medium text-green-900 ">{data[curentQ]?.OptionD}</label>
                </div>

                {/* <button onClick={() => setOptionChosen("A")} className='p-2 hover:bg-green-200 text-start text-blue-700 bg-white border border-gray-200 rounded-s-lg  '>{data[curentQ]?.OptionA} </button>
                <button onClick={() => setOptionChosen("B")} className='p-2 hover:bg-green-200 text-start text-blue-700 bg-white border border-gray-200 rounded-s-lg ' >{data[curentQ]?.OptionB} </button>
                <button onClick={() => setOptionChosen("C")} className='p-2 hover:bg-green-200 text-start text-blue-700 bg-white border border-gray-200 rounded-s-lg ' >{data[curentQ]?.OptionC} </button>
                <button onClick={() => setOptionChosen("D")} className='p-2  hover:bg-green-200 text-start text-blue-700 bg-white border border-gray-200 rounded-s-lg '>{data[curentQ]?.OptionD} </button>
 */}





            </div>

            <div className='flex justify-between mt-2 '>


                <button disabled={curentQ >0 ? false:true} onClick={() => Previous()} className='text-start hover:text-red-800 disabled:text-gray-400 text-green-900 p-2 w-1/5'>Previous</button>

                


                {
                    curentQ == data.length - 1 ? (
                        <button onClick={() => FinshQuizze()} className='bg-blue-400 text-white p-2 w-1/5'>Finsh</button>
                    ) : (
                        <button onClick={() => VerfiyeAndNext()} className='text-white bg-green-700 rounded-lg p-2 w-1/5'>next</button>
                    )
                }
            </div>


        </div>
    )
}
