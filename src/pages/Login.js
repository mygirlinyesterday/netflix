import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/39f3c979-c105-4948-9c51-611eedf3a6fd/bc875c85-ad51-45d6-aa62-0eae932cb285/TH-th-20230612-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        ></img>
        <div className="bg-block/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bolt">Sign In</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-500 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                ></input>
                <input
                  className="p-3 my-2 bg-gray-500 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                ></input>
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    New to Netflix?
                  </span>{" "}
                  <Link to="/signup"> Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login