import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from "../../outils/axios";
import { useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { CiWarning } from "react-icons/ci";

export default function DeleteQuizze({ id }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()


  const handelDelete = (params) => {

    dispatch({ type: "DELETE_Qs", payload: params })

    client.delete("/Quiz/" + params).then(res => console.log(res.data))
setShowModal(false)
  }







  return (
    <>


      <AiOutlineDelete onClick={() => setShowModal(true)}
        class="w-7 h-7 text-red-600 " />


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
                    delete Qs                  </h3>
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
                  <CiWarning className="w-40 h-40 text-yellow-500"/>
                  </div>
                  <p>
                    Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
                  </p>

                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" onClick={() => setShowModal(false)}>  Close</button>
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" 
                    onClick={()=>handelDelete(id)}
                    >
                    delete 
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