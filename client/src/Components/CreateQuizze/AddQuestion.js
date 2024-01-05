import React, { useEffect } from 'react'
import NavTop from '../nav/NavTop'
import FormAddQs from './FormAddQs'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { client } from '../../outils/axios';
import Question from './Question';

export default function AddQuestion() {
    const dispatch = useDispatch()
    const { id } = useParams()

    const { error, Questions, loading } = useSelector(state => state.QuestionReducer)
    console.log(Questions);


    const fetchdata = (idQ) => {
        dispatch({ type: 'FETCH_DATA_REQUEST' });


        try {

            client.get("/Quiz/" +idQ).then(res =>
                dispatch({ type: 'FETCH_DATA_SUCCESS', payload: res.data })

              

            )


        } catch (error) {
            dispatch({ type: "FETCH_DATA_FAILURE", payload: error })
        }
    }


    useEffect(() => {
        fetchdata(id)
    }, [id])

    return (
        <div className="">

            <NavTop current={"Questions"} />

            <header >
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">

                            <p className="mt-1.5 text-sm text-gray-500">Let's add a Questions ? 🎉</p>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">


                            <FormAddQs />
                        </div>

                    </div>
                </div>

                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="w-full text-center sm:text-left">
                            {
                                Questions.map(item => {
                                    return (<Question key={item.id} item={item} />)
                                  
                                })
                            }

                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}
