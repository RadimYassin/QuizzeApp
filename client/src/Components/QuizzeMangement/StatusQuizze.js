import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { CiWarning } from "react-icons/ci";
import { client } from "../../outils/axios";

export default function StatusQuizze({ id, status }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()

  const handelChangeStatusActive = async (params) => {

    await client.put(`/quizzes/${params}/updateStatus`, { status: 1 }).then(res => console.log(res.data))
    
       dispatch({type:"UPDATE_QUIZ_STATUS",payload:{quizId:params,newStatus:1}})
       setShowModal(false)
  }



  const handelChangeStatusDesActive = async (params) => {

    await client.put(`/quizzes/${params}/updateStatus`, { status: 0 }).then(res => console.log(res.data))

    dispatch({type:"UPDATE_QUIZ_STATUS",payload:{quizId:params,newStatus:0}})
    setShowModal(false)

  }








  return (
    <>

      {
        status == 0 ? <BsToggle2Off onClick={() => setShowModal(true)}
             class="w-7 h-7 text-gray-600 " /> : 
             <BsToggle2On onClick={() => setShowModal(true)}
              class="w-7 h-7 text-green-600 " />
      }



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
                    Stutus quizze                  </h3>
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
                <div className="relative  flex justify-between items-center">
                  <div>
                    <CiWarning className="w-40 h-40 text-yellow-500" />
                  </div>
                  <p>
                    Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
                  </p>

                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" onClick={() => handelChangeStatusDesActive(id)}> desActive </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handelChangeStatusActive(id)}
                  >
                    Active
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

        </>
      ) : null}
    </>
  );
}