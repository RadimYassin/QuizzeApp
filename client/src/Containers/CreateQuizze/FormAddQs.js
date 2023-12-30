import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from "../../outils/axios";
import { useDispatch } from "react-redux";
export default function FormAddQs() {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()
    const SignupSchema = Yup.object().shape({
        title: Yup.string()
            .required('Required'),
        correct_option: Yup.string()
            
            .required('Required'),
        optionA: Yup.string()
        
            .required('Required'),
        optionB: Yup.string()
            
            .required('Required'),
        optionC: Yup.string()
            .required('Required'),
    
        optionD: Yup.string().required("Required"),

    });
    //   "firstname"=>"required",
    //   "lastname"=>"required",
    // 'email' => 'required|email|unique:users,email',
    // 'password' => 'required'

    const handleSubmmit = (data) => {
    

    console.log(data);
    


    };
    return (
        <>
            <button
                className="flex rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <svg class="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>

                Add  Question
    </button>
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
                                        New Question
                                                          </h3>
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
                                            correct_option: '',
                                            optionA: '',
                                            optionB: '',
                                            optionC: '',
                                            optionD: '',
                                        

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
                                                    type="text" 
                                                    name="title" id="title" className=" block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                                                    <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Entre Question</label>
                                                    {errors.title && touched.title ? (
                                                        <div className='mt-1 text-red-500'>{errors.title}</div>
                                                    ) : null}

                                                </div>
                                                <div className="relative z-0 w-full mb-5 ">
                                                    <Field
                                                                                                        onChange={handleChange}

                                                     type="text" name="correct_option" id="correct_option" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                                                    <label htmlFor="correct_option" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Creecte Option</label>
                                                    {errors.correct_option && touched.correct_option ? (
                                                        <div className='mt-1 text-red-500'>{errors.correct_option}</div>
                                                    ) : null}

                                                </div>
                                                <span className="text-gray-600 ">Entre option of Question :</span>
                                                <div className="relative z-0 w-full mt-3 mb-5 ">
                                                    <Field
                                                                                                        onChange={handleChange}

                                                     type="text" name="optionA" id="optionA" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                                                    <label htmlFor="optionA" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">OptionA</label>
                                                    {errors.optionA && touched.optionA ? (
                                                        <div className='mt-1 text-red-500'>{errors.optionA}</div>
                                                    ) : null}

                                                </div>
                                                <div className="relative z-0 w-full mt-3 mb-5 ">
                                                    <Field 
                                                                                                        onChange={handleChange}

                                                    type="text" name="optionB" id="optionB" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                                                    <label htmlFor="optionB" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">OptionB</label>
                                                    {errors.optionB && touched.optionB ? (
                                                        <div className='mt-1 text-red-500'>{errors.optionB}</div>
                                                    ) : null}

                                                </div>
                                                <div className="relative z-0 w-full mt-3 mb-5 ">
                                                    <Field 
                                                                                                        onChange={handleChange}

                                                    type="text" name="optionC" id="optionC" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                                                    <label htmlFor="optionC" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">OptionC</label>
                                                    {errors.optionC && touched.optionC ? (
                                                        <div className='mt-1 text-red-500'>{errors.optionC}</div>
                                                    ) : null}

                                                </div>
                                                <div className="relative z-0 w-full mt-3 mb-5 ">
                                                    <Field 
                                                                                                        onChange={handleChange}

                                                    
                                                    type="text" name="optionD" id="optionD" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                                                    <label htmlFor="optionD" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">OptionD</label>
                                                    {errors.optionD && touched.optionD ? (
                                                        <div className='mt-1 text-red-500'>{errors.optionD}</div>
                                                    ) : null}

                                                </div>

                                                {/*footer*/}
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button" onClick={() => setShowModal(false)}>  Close</button>
                                                    <button
                                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="submit" >
                                                        Save Question
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