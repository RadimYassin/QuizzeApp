import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { client } from '../../outils/axios';


const SignupSchema = Yup.object().shape({

    email: Yup.string()
    .email()
    .required('Required')
    .matches(/@emsi\.ma$/, {
      message: 'Email must end with @emsi.ma',
    }),    password: Yup.string()
        .min(5, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required')
});

export default function Login() {

    const navigate=useNavigate()


    const HandelSubmit=async(data)=>{

        if (!data) {
            console.log("no data");
        }

       try {
         await client.post("/login",{
            "email":data.email,
            "password":data.password,
         }) 
         .then((response) => {
        console.log(response.data);
      });
      navigate("/")
       } catch (error) {
        console.log(error);
       }
    }
    return (
        <div class="h-screen overflow-hidden flex items-center justify-center" style={{ background: "#edf2f7" }} >

            <div class="bg-gray-100 flex justify-center items-center h-screen">
                <div class="w-1/2 h-screen hidden lg:block">
                    <img src="https://imgs.search.brave.com/5qZ8lRFZScbk2qWgzuDNJW_TLTg3zXNJtIlIcCAWiEA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/MDYuOXJheXRpLmNv/bS9yc3JjL2NhY2hl/L3dpZGVuXzc1MC91/cGxvYWRzLzIwMTcv/MDUvRU1TSS1NYXJv/Yy5qcGc" alt="Placeholder Image" class="object-cover w-full h-full" />
                </div>
                <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <div class="mb-4">
                        <h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
                        <p class="text-gray-500">Please sign in to your account.</p>
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
                            <Form>
                                <div class="mb-4">
                                    <label for="username" class="block text-gray-600">Email</label>
                                    <Field type="email" id="username" name="email" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                                    {errors.email && touched.email ? (
                                        <div class='mt-1 text-red-500'>{errors.email}</div>
                                    ) : null}
                                </div>
                                <div class="mb-4">
                                    <label for="password" class="block text-gray-600">Password</label>
                                    <Field type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                                    {errors.password && touched.password ? (
                                        <div class='mt-1  text-red-500'>{errors.password}</div>
                                    ) : null}
                                </div>
                                <div class="mb-4 flex items-center">
                                    <input type="checkbox" id="remember" name="remember" class="text-blue-500" />
                                    <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
                                </div>
                                <div class="mb-6 text-blue-500">
                                    <a href="#" class="hover:underline text-green-500">Forgot Password?</a>
                                </div>
                                <button type="submit" class=" bg-green-400  hover:bg-green-500 text-gray-100  font-semibold rounded-md py-2 px-4 w-full">Login</button>
                            </Form>
                        )}
                    </Formik>

                    <div class="mt-6 text-blue-500 text-center">
                        <Link to="/register" class="hover:underline">Sign up Here</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

