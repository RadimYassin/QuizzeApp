import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { client } from '../../outils/axios';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';

const SignupSchema = Yup.object().shape({

  email: Yup.string()
    .email()
    .required('Required')
    .matches(/@emsi-edu\.ma$/, {
      message: 'Email must end with @emsi-edu.ma',
    })
    , password: Yup.string()
      .min(5, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required')
});

export default function Login() {
  const navigate = useNavigate()
  const [_, setCookies] = useCookies(["access_token"])
  const dispatch = useDispatch()
  const [error, setError] = useState("")
  const [isError, setIsError] = useState(false)

  const HandelSubmit = async (data) => {

    if (!data) {
      console.log("no data");
    }

    try {
      await client.post("/login", {
        "email": data.email,
        "password": data.password,
      })
        .then((response) => {
          console.log(response.data.UserId);
          console.log(response.data.token);

          if (response.data.status == true) {
            window.localStorage.setItem("userInfo", JSON.stringify({ id: response.data.userId, type: response.data.type }))
            dispatch({ type: "LOGIN", payload: { id: response.data.userId, type: response.data.type } })
            setCookies("access_token", response.data.token)

            if (response.data.type=="student") {
              navigate("/Quizzes")

            }else{
              navigate("/")


            }
          }
        });

    } catch (error) {
      if (error.response) {
        if (error.response.data.message) {
          setError(error.response.data.message);
          setIsError(true)
        }
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    }



  }
  return (
    <div style={{ backgroundColor: "rgb(237, 241, 247)" }} className='h-auto lg:h-screen'>

      <Navbar />
      <div class=" relative   flex items-center  justify-around overflow-hidden lg:my-28">

        <div style={{ width: "100%" }} class="relative  h-full lg:mx-20    md:pb-10 sm:max-w-xl md:max-w-full ">
          <div class="flex  flex-col items-center justify-between lg:flex-row sm:flex-col-reverse ">


            <div style={{ width: "100%" }} class=" relative ">

              <div class=" relative md:p-10 ">
                <h2 class="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-6xl sm:leading-snug">
                  Tester vos connaisances
                  <span class="my-1 inline-block border-b-8 border-g4 bg-white  text-green-700 px-4 font-bold text-g4 ">En ligne</span>
                </h2>
                <p class="text-base text-gray-700">
                  Préparez-vous à relever le défi et à évaluer vos
                  connaisances avec nos QCM en ligne <br></br>
                  Bonne chance et amusez-vous bien!
                </p>

              </div>


            </div>
            <div style={{ width: "100%" }} class="relative   ">
              {/**form register */}
              <div class=" mx-auto overflow-hidden rounded-[.6rem] w-9/12 py-1 shadow-md bg-white">
                <div class="flex min-h-full flex-col  px-6 py-12 lg:px-8">
                  <div class="flex   justify-between gap-3 mb-5  sm:w-full sm:max-w-sm">

                    {
                      isError == true && (
                        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                          {error}
                        </div>
                      )
                    }



                  </div>

                  <Formik
                    initialValues={{
                      email: '',
                      password: ''

                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                      // same shape as initial values
                      HandelSubmit(values);
                    }}
                  >
                    {({ errors, touched }) => (



                      <div class="lg:w-11/12 ">
                        <Form class="" action="#" method="POST">
                          <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div class="mt-2 ">
                              <Field id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              {errors.email && touched.email ? (
                                <div class='mt-1 text-red-500'>{errors.email}</div>
                              ) : null}
                            </div>
                          </div>

                          <div>
                            <div class="mt-2 flex items-center justify-between">
                              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                              <div class="text-sm">
                                <a href="#" class="font-semibold text-green-600 hover:text-green-500">Forgot password?</a>
                              </div>
                            </div>
                            <div class="mt-2">
                              <Field id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              {errors.password && touched.password ? (
                                <div class='mt-1  text-red-500'>{errors.password}</div>
                              ) : null}
                            </div>
                          </div>
                          <div class=" mt-5 flex items-center me-4">
                            <Field id="green-checkbox" type="checkbox" value="" class=" accent-green-500 w-5 h-5  border-green-500 bg-green-600 text-green-600 rounded focus:ring-green-500 dark:focus:ring-green-600" />
                            <label for="green-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">remember me </label>
                          </div>


                          <div className='mt-6'>
                            <button type="submit" class="flex w-1/2 justify-center rounded-md bg-green-600 hover:text-white px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Sign in</button>
                          </div>
                        </Form>
                      </div>


                    )}
                  </Formik>


                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>


  )
}
