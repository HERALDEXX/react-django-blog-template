import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className="bg-violet-950 mt-24 mb-8">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-8 text-2xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
            Page Not Found
        </h1>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link to="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Back to Home
            </Link>
              
        </div>
    </div>
</section>
  )
}

export default PageNotFound