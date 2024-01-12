import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useSelector } from 'react-redux'

const navigation = [
    { name: 'Quizzer', href: '/', current: true },
]


export default function Navbar() {

    const user = useSelector(st => st.AuthReducer.user)
    return (
        <Disclosure as="nav" className="bg-white shadow-lg p-2">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <span style={{ fontSize: "30px", fontFamily: "Nunito" }} className='mx-3 text-green-700'>Quizzer</span>

                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">

                                </div>
                                <div className=" sm:ml-6 sm:block">
    
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">



                                <span className='mx-4'>{user?.type}</span>

{
    user &&

                                <div className="flex -space-x-1 overflow-hidden">
                                    <img
                                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                  
                                </div>
}
                                {/* Profile dropdown */}

                            </div>
                        </div>
                    </div>


                </>
            )}
        </Disclosure>
    )
}
