// Login.jsx
// import React from 'react';
import { Link } from "react-router-dom";
import BerryLogo from "../images/berry.png"
import React, { useState } from "react";
import API_BASE_URL from "../config";

const Registration = () => {
  // const [Fname, setFname] = useState("");
  // const [Lname, setLname] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");

  const [formData, setFormData] = useState({Fname: '', Lname: '', username: '', email: '', password: ''});
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.Fname) {
        newErrors.Fname = "First name is required";
    }
    if (!formData.Lname) {
        newErrors.Lname = "Last name is required";
    }
    if (!formData.username) {
        newErrors.username = "Username is required";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
        newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return; 
  }
    
    try{
      console.log('Submitting data:', formData); 
      const response = await fetch(`${API_BASE_URL}/account/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok){
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log('Success:', result);

      // Czyścimy formularz po pomyślnym wysłaniu
      setFormData({
        Fname: '',
        Lname: '',
        username: '',
        email: '',
        password: '',
      });
      setErrors({});
    }
    catch(error){
      console.error('There was a problem with the fetch operation:', error);
    }
  }
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="lg:w-[30%] md:w-[50%]  px-6 py-4 bg-white rounded-lg shadow-md">
        
            <div className="flex items-center mb-2">
                <h1 className="text-4xl font-bold  text-center text-primaryDarkPink">Sign up</h1>
                <img src={BerryLogo} alt="logo-strawberry" className="w-[60px]"/>
            </div>
         
          <form onSubmit={handleSubmit}>
            <div className=" mb-3">
              <label htmlFor="Fname" className="block text-sm font-medium text-gray-600 mb-2">First Name</label>
              <input
                type="text"
                id="Fname"
                name="Fname"
                value={formData.Fname}
                onChange={(e) => setFormData({...formData, Fname: e.target.value})}
                placeholder="Enter your first name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDarkPink focus:border-primaryDarkPink"
                required
              />
              {errors.data && <span>{errors.data}</span>}
            </div>


            <div className=" mb-3">
              <label htmlFor="Lname" className="block text-sm font-medium text-gray-600 mb-2">Last Name</label>
              <input
                type="text"
                id="Lname"
                name="Lname"
                value={formData.Lname}
                onChange={(e) => setFormData({...formData, Lname: e.target.value})}
                placeholder="Enter your Last Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDarkPink focus:border-primaryDarkPink"
                required
                
              />
                {errors.data && <span>{errors.data}</span>}
            </div>
        
            <div className="mb-3">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                placeholder="Enter your username"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDarkPink focus:border-primaryDarkPink"
                required
              />
                {errors.data && <span>{errors.data}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDarkPink focus:border-primaryDarkPink"
                required
              />
               {errors.email && <span>{errors.email}</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDarkPink focus:border-primaryDarkPink"
                required
              />
               {errors.data && <span>{errors.data}</span>}
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
  