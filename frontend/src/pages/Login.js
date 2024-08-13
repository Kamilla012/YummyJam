// Login.jsx
// import React from 'react';
import StrawberryLogo from "../images/strawberry.png"
import { Link } from 'react-router-dom';
// import Registry from '../pages/'
import API_BASE_URL from "../config";
import { useState } from "react";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const handleLogin = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/account/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message);
        } else {
            const errorData = await response.json();
            setError(errorData);
        }
    } catch (error) {
        console.error("Error:", error);
        setError("An error occurred during login.");
    }
};
  
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="lg:w-[30%] p-10 bg-white rounded-lg shadow-md">
        
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDarkPink focus:border-primaryDarkPink"
                required
              />
            </div>
  
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full px-4 py-2 bg-primaryDarkPink text-white font-semibold rounded-lg shadow-md hover:bg-primaryLightPink focus:outline-none focus:ring-2 focus:ring-primaryLightPink focus:ring-opacity-50"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-[16px]">You don't have an account yet? <Link to="../pages/Registration" className="text-strawberryRed font-bold">Create it!</Link></p>
        </div>
      </div>
    );
  };
  
  export default Login;
  