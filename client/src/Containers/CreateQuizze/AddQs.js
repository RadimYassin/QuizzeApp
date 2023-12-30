import React from 'react'
import NavTop from '../nav/NavTop'
import FormAddQs from './FormAddQs'

export default function AddQs() {
    return (
        <div>

            <NavTop current={"Questions"} />

            <header className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">

                            <p className="mt-1.5 text-sm text-gray-500">Let's add a Questions ? 🎉</p>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">


                            <FormAddQs />
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}
