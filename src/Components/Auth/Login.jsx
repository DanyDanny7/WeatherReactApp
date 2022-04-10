import React from "react";

const Login = () => {
  return (
    <div className="h-screen bg-blue-400 w-full">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <input type="text" className="input" />
        <button className="p-2 bg-blue-800 text-white rounded-lg">Login</button>
      </div>
    </div>
  );
};

export default Login;
