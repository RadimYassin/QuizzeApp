import React, { useState } from 'react'
import StartQuizze from './IntroQuizze';
import BodyQuizze from './BodyQuizze';
import EndQuizze from './EndQuizze';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { client } from '../../outils/axios';
import { useEffect } from 'react';

export default function Quizze() {
const Game=useSelector(st=>st.GameReducer.Game)


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
