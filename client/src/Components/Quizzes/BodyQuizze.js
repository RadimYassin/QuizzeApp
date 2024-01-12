import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.css"
import RadioButton from './RadioButton'
import NavQuizze from './NavQuizze'

export default function BodyQuizze() {
  
const QuizData = useSelector(state => state.AvailableQuizzesReducer.quizData)

    const [curentQ, setCurentQ] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    }; 
    
    const initialTimeInSeconds = QuizData[0]?.time* 60;
    const handleChange = (event) => {
        setOptionChosen(event.target.value);
    };
    const dispatch = useDispatch()


    const VerfiyeAndNext = () => {



        if (QuizData[curentQ].correct_option == optionChosen) {

            dispatch({ type: "Correct" })

        }

        setCurentQ(curentQ + 1)


    }

    const FinshQuizze = () => {
        if (QuizData[curentQ].correct_option == optionChosen) {
            dispatch({ type: "Correct" })

        }
        dispatch({ type: "Ended" })

    }


    const Previous = () => {
        if (QuizData[curentQ].correct_option == optionChosen) {
            dispatch({ type: "Previous" })

        }
        setCurentQ(curentQ - 1)

    }
    const handleTimerEnd = () => {
        dispatch({type:"Ended"})

    };
    return (
<div>
      {QuizData ? (
 <div className='m-auto p-7 mt-5 container rounded-lg shadow-md bg-slate-50 '>

 <NavQuizze initialTimeInSeconds={initialTimeInSeconds} handleTimerEnd={handleTimerEnd} />


 <div className="flex flex-col items-start w-full">
     <h4 className="mt-10 text-xl text-gray-600">
         Question {curentQ + 1} of {QuizData?.length}
     </h4>
     <div className="mt-4 text-1xl text-gray-900">
         {QuizData[curentQ]?.title}
     </div>
 </div>

 <div className='mt-3  flex flex-col gap-5'>
     {
         QuizData[curentQ]?.options.map(item => {


             return (
                 <RadioButton isClicked={isClicked} handleClick={handleClick} key={item.id} handleChange={handleChange} item={item} />
             )
         }
         )
     }
 </div>
 <div className='flex justify-between mt-2 '>
     <button disabled={curentQ > 0 ? false : true} onClick={() => { Previous(); setIsClicked(false) }} className='text-start hover:text-red-800 disabled:text-gray-400 text-green-900 p-2 w-1/5'>Previous</button>
     {
         curentQ == QuizData?.length - 1 ? (
             <button onClick={() => FinshQuizze()} disabled={isClicked ? 0:1} className=' bg-blue-600  disabled:bg-blue-400 text-white p-2 w-1/5'>Finsh</button>
         ) : (
             <button disabled={isClicked ? 0:1} onClick={() => { VerfiyeAndNext(); setIsClicked(false) }} className='text-white disabled:bg-green-600 bg-green-700 rounded-lg p-2 w-1/5'>next</button>
         )
     }
 </div>
</div>


) : (
<p>loding ...</p>

)}
   </div>
    )
}
