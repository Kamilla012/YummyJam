// Login.jsx
// import React from 'react';
import { Link } from "react-router-dom";
import BerryLogo from "../images/berry.png"


const Registration = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="lg:w-[30%] md:w-[50%]  px-6 py-4 bg-white rounded-lg shadow-md">
        
            <div className="flex items-center mb-2">
                <h1 className="text-4xl font-bold  text-center text-primaryDarkPink">Sign up</h1>
                <img src={BerryLogo} alt="logo-strawberry" className="w-[60px]"/>
            </div>
         
          <form>
            <div className=" mb-3">
              <label htmlFor="Fname" className="block text-sm font-medium text-gray-600 mb-2">First Name</label>
              <input
                type="text"
                id="Fname"
                name="Fname"
                placeholder="Enter your first name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDarkPink focus:border-primaryDarkPink"
                required
              />
            </div>


            <div className=" mb-3">
              <label htmlFor="Lname" className="block text-sm font-medium text-gray-600 mb-2">Last Name</label>
              <input
                type="text"
                id="Lname"
                name="Lname"
                placeholder="Enter your Last Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDarkPink focus:border-primaryDarkPink"
                required
              />
            </div>
        
            <div className="mb-3">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDarkPink focus:border-primaryDarkPink"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDarkPink focus:border-primaryDarkPink"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDarkPink focus:border-primaryDarkPink"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
              Repeat Password</label>
              <input
                type="password"
                id="Repassword"
                name="Repassword"
                placeholder="Enter your password again"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDarkPink focus:border-primaryDarkPink"
                required
              />
            </div>

            
  
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primaryDarkPink text-white font-semibold rounded-lg shadow-md hover:bg-primaryLightPink focus:outline-none focus:ring-2 focus:ring-primaryLightPink focus:ring-opacity-50"
            >
              Sign up
            </button>
          </form>
          <p className="mt-4 text-[16px]">Already have an account?  <Link to="/" className="text-berryBlue font-bold">Log in there!</Link></p>
        </div>
      </div>
    );
  };
  
  export default Registration;
  