// src/pages/Login.jsx
import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handlersubmit = (e) => {
    e.preventDefault(); 
    console.log(email,password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <form onSubmit={(e) => {handlersubmit(e)}} className="space-y-5">
          <div>
            <input
              type="email" required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div>
            <input
              type="password" required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
