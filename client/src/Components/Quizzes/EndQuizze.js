import React from 'react'
import { useSelector } from 'react-redux'
export default function EndQuizze() {
    const score = useSelector(state => state.GameReducer.score)

    return (
        <div>
{score}      
  </div>
    )
}
