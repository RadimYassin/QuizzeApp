import React from 'react'
import NavTop from '../../Containers/nav/NavTop'
import { useDispatch } from 'react-redux';
import { client } from '../../outils/axios';
import { useNavigate } from 'react-router-dom';

export default function UploadeExcel() {
const dispatch = useDispatch()
const nav=useNavigate()

    const handleFileUpload = (event) => {
        // get the selected file from the input
        const file = event.target.files[0];
        // create a new FormData object and append the file to it
        const formData = new FormData();
        formData.append("file", file);
        // make a POST request to the File Upload API with the FormData object 
        client
            .post("/import", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",

                },
            })
            .then((response) => {

if (response.data.status===true) {
    dispatch({ type: "IMPORT_USER", payload: response.data[1]?.imported_users})
    dispatch({ type: "existing_users", payload:response.data[0]?.Existing_users})

}
nav("/adduser")
// console.log(response.data[0]?.Existing_users);
// console.log(response.data[1]?.imported_users);



                 



            })
            .catch((error) => {
                // handle errors
                console.log(error);
            });
    }



    return (
        <div>
            <NavTop current={"UploadeData"} />

            <div className="p-7 flex items-center justify-center w-full">
                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-green-500 ">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file"  onChange={handleFileUpload} type="file" className="hidden" />
                </label>
            </div>

        </div>
    )
}
