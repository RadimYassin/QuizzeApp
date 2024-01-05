import React from 'react'
import DeleteQuestion from './DeleteQuestion';

export default function Question({ item }) {
    return (



        //         {/* <p /className="mt-1.5 text-md text-gray-500">{item.id} - {item.title} </p>


        //         <div className='m-5 text-sm text-gray-500'>
        //             <ol className="list-none list-inside space-y-2" >
        //                 <li>A . {item.options[0].optionA}</li>
        //                 <li>B . {item.options[0].optionB}</li>
        //                 <li>C . {item.options[0].optionC}</li>
        //                 <li>D . {item.options[0].optionD}</li>

        //             </ol >

        //             <span className='text-gray-400'>correct option is  {item.correct_option}</span>
        //         </div> */}
        //     </>


        <article
            className="rounded-lg border mt-6 border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
        >

            <div className='w-full flex justify-between items-center'>
                <span className="inline-block rounded bg-green-600 p-2 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                    </svg>




                </span>

                <DeleteQuestion id={item.id} />
            </div>



            <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    {item?.id} - {item?.title}                </h3>
            </a>

            <div className='m-5 text-sm text-gray-500'>
                <ol className="list-none list-inside space-y-2" >

                    <li>A . {item.options[0]?.optionA}</li>
                    <li>B . {item.options[0]?.optionB}</li>
                    <li>C . {item.options[0]?.optionC}</li>
                    <li>D . {item.options[0]?.optionD}</li>

                </ol >

                <span className='text-gray-400'>correct option is  {item.correct_option}</span>
            </div>


        </article>
    )
}
