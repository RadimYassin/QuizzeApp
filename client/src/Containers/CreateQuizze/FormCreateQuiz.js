import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from "../../outils/axios";
import { useDispatch } from "react-redux";
import useUserId from "../../hooks/useUserId";

export default function FormCreateQuiz() {
    const [showModal, setShowModal] = useState(false);

    const info=useUserId()
    const dispatch = useDispatch()
    const SignupSchema = Yup.object().shape({
        title: Yup.string()

            .required('Required'),
        time: Yup.number()
            .required('Required'),
        date: Yup.date().required("Required")
    });


    const handleSubmmit =async (data) => {

        const title=data.title
        const date=data.date
        const time=data.time
        const id=info?.id

        try {
           await  client.post("/Quiz",{title:title,date:date,time:time,created_by:id}).then(res=>
            
           { 
            // if (res.data.status ===true) {
                dispatch({type:"Add_quizze",payload:res.data.Quizs})
            // console.log(res.data);

setShowModal(false)            }
            
            )
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>


            <div class="  px-7 flex ">
                <div
                    // class="flex items-center justify-between"
                    class=" w-full  flex items-center justify-between"
                >
                    <div class="text-center sm:text-left">
                        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back!</h1>

                        <p class="mt-1.5 text-sm text-gray-500">Let's write a new  Quiz! 🎉</p>
                    </div>

                    <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">

                        <button
                            class="block rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring"
                            type="button"
                            onClick={() => setShowModal(true)}>
                            Create Quiz
                        </button>
                    </div>
                </div>
            </div>


            {/* <button

                class="bg-green-400 flex justify-between items-center p-6  text-white active:bg-green-600 hover:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"> New <IoMdAdd />
            </button> */}

            {showModal ? (
                <>
                    <div
                        className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-full my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        new Quiz                  </h3>
                                    <button
                                        className="p-1 ml-auto  border-0 text-black  float-right text-3xl leading-none font-semibold "
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className=" text-gray-600">
                                            x
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative  flex-auto">

                                    <Formik

                                        initialValues={{
                                            title: '',
                                            time: '',
                                            date: ''

                                        }}
                                        validationSchema={SignupSchema}
                                        onSubmit={values => {
                                            // same shape as initial values
                                            handleSubmmit(values);

                                        }}
                                    >
                                        {({ errors, touched, values, handleChange }) => (
                                            <Form className="p-6 mx-auto">


                                                <div className="relative z-0 w-full mt-3  mb-5 ">
                                                    <Field
                                                        onChange={handleChange}
                                                        type="text" name="title" id="title" className=" block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                                                    <label for="title" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quiz Title</label>
                                                    {errors.title && touched.title ? (
                                                        <div className='mt-1 text-red-500'>{errors.title}</div>
                                                    ) : null}

                                                </div>
                                                <div className="relative z-0 w-full mb-5 ">
                                                    <Field
                                                        onChange={handleChange}

                                                        type="text" name="time" id="time" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                                                    <label for="time" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quiz Time</label>
                                                    {errors.time && touched.time ? (
                                                        <div className='mt-1 text-red-500'>{errors.time}</div>
                                                    ) : null}

                                                </div>
                                                <div className="relative z-0 w-full mb-5 ">
                                                    <Field
                                                        onChange={handleChange}

                                                        type="date" name="date" id="date" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                                                    <label for="date" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quiz date</label>
                                                    {errors.date && touched.date ? (
                                                        <div className='mt-1 text-red-500'>{errors.date}</div>
                                                    ) : null}

                                                </div>


                                                {/*footer*/}
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button" onClick={() => setShowModal(false)}>  Close</button>
                                                    <button
                                                        className="bg-gray-800 text-white active:bg-gray-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="submit" >
                                                        Save Quiz
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    <ToastContainer />

                </>
            ) : null}
        </>
    );
}