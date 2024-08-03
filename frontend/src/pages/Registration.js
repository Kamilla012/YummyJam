// Login.jsx
// import React from 'react';
import StrawberryLogo from "../images/strawberry.png"


const Login = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        
            <div className="flex items-center mb-4">
                <h1 className="text-4xl font-bold  text-center text-primaryDarkPink">Login</h1>
                <img src={StrawberryLogo} alt="logo-strawberry" className="w-[60px]"/>
            </div>
         
          <form>
            <div className="mb-4">
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
  
            <div className="mb-6">
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
  
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primaryDarkPink text-white font-semibold rounded-lg shadow-md hover:bg-primaryLightPink focus:outline-none focus:ring-2 focus:ring-primaryLightPink focus:ring-opacity-50"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  