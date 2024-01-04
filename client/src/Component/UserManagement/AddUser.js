import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from "../../outils/axios";
import { useDispatch } from "react-redux";
export default function AddUser() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Required')
      .matches(/@emsi\.ma$/, {
        message: 'Email must end with @emsi.ma',
      }),
    password: Yup.string()
      .min(5, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
    ,
    type: Yup.string().required("Required"),
    groupe: Yup.string(),

  });
//   "firstname"=>"required",
//   "lastname"=>"required",
// 'email' => 'required|email|unique:users,email',
// 'password' => 'required'

  const handleSubmmit = (data) => {
const firstname=data.firstName
const lastname=data.lastName

const email=data.email
const password=data.password
const type=data.type
const groupe= type =="teacher" ? "null" :data.groupe



client.post("/createUser",{firstname,lastname,email,password,type,groupe}).then(res=>{
if (res.data.errors) {
 toast(res.data.errors["email"].toString());
}else{

 dispatch({type:"ADD_ONE",payload:res.data.user})

  setShowModal(false)

}

})
    
    
  };
  return (
    <>
      <button
        className="p-2 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm text-center"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg class="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>

        Add      </button>
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
                    add user                  </h3>
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
                      email: '',
                      password: '',
                      firstName: '',
                      lastName: '',
                      confirmpassword: '',
                      type: '',
                      groupe:""

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
                          <Field type="email" name="email" id="floating_email" className=" block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                          <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                          {errors.email && touched.email ? (
                            <div className='mt-1 text-red-500'>{errors.email}</div>
                          ) : null}

                        </div>
                        <div className="relative z-0 w-full mb-5 ">
                          <Field type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                          <label for="password" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                          {errors.password && touched.password ? (
                            <div className='mt-1 text-red-500'>{errors.password}</div>
                          ) : null}

                        </div>
                        <div className="relative z-0 w-full mb-5 ">
                          <Field type="password" name="confirmpassword" id="confirmpassword" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                          <label for="confirmpassword" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                          {errors.confirmpassword && touched.confirmpassword ? (
                            <div className='mt-1 text-red-500'>{errors.confirmpassword}</div>
                          ) : null}

                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                          <div className="relative z-0 w-full mb-5 group">
                            <Field type="text" name="firstName" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            {errors.firstName && touched.firstName ? (
                              <div className='mt-1 text-red-500'>{errors.firstName}</div>
                            ) : null}


                          </div>
                          <div className="relative z-0 w-full mb-5 group">
                            <Field type="text" name="lastName" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-green-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>

                            {errors.lastName && touched.lastName ? (
                              <div className='mt-1 text-red-500'>{errors.lastName}</div>
                            ) : null}

                          </div>
                          <div className="grid md:grid-cols-2 md:gap-6">

                            <div className="flex flex-col gap-4 w-full mb-5 group">
                              <div className="flex items-center">
                                <Field
                                  value="student"
                                  name='type'
                                  onChange={handleChange}
                                  checked={values.type === "student"}


                                  type="radio" id="green" className="w-4 h-4 text-green-600 bg-gray-200 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 checked:bg-green-500 checked:border-green-500" />
                                <label for="green-radio" className="ml-3 block text-sm font-medium text-gray-700">student</label>
                              </div>
                              <div className="flex items-center">
                                <Field type="radio" id="green-radio"

                                  value="teacher"
                                  name='type'
                                  onChange={handleChange}
                                  checked={values.type === "teacher"}
                                  className="w-4 h-4 text-green-600 bg-gray-200 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 checked:bg-green-500 checked:border-green-500" />
                                <label for="green-radio" className="ml-3 block text-sm font-medium text-gray-700">Teacher</label>
                              </div>
                            </div>
                            {
                              values.type === "student" &&

                              <div className="relative z-0 w-full mb-5 group">
                                <Field
                                  
                                  onChange={handleChange}
                                  type="text" id="groupe"
                                  name="groupe"
                                  className="block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
                                <label for="groupe" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">groupe</label>
                              </div>}
                          </div>
                        </div>

                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button" onClick={() => setShowModal(false)}>  Close</button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit" >
                            Save
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
          <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        
          />

        </>
      ) : null}
    </>
  );
}