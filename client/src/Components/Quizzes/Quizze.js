import React, { useState } from 'react'
import StartQuizze from './StartQuizze';
import BodyQuizze from './BodyQuizze';
import EndQuizze from './EndQuizze';
import { useSelector } from 'react-redux';

export default function Quizze() {
const Game=useSelector(st=>st.GameReducer.Game)
console.log(Game);

    return (
        <div>
{
    Game === "Menu" && <StartQuizze/>}
    {Game === "Started" && <BodyQuizze/>}

   {Game === "Ended" && <EndQuizze/>
} 

        </div>
    )
}
