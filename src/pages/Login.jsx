import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
const Login = () => {
  const [email, sateemail] = useState("");
  const [password, satepassword] = useState("");
  const navigate = useNavigate();
  const [error, sateerror] = useState("");
  const LoginBtn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return sateerror("Please fill all fields");
    }
    const data = JSON.parse(localStorage.getItem("Users")) || [];
    const users = data.find(
      (user) => user.email === email && user.password === password
    );
    if (users) {
      sateerror("Login successfully");
      setTimeout(() => {
        navigate("/Home");
      }, 1000);
    } else {
      sateerror("Invalid user or login failed");
    }
  };
  return (
    <>
      <div className="h-screen justify-center items-center flex bg-gray-50">
        <form
          onSubmit={LoginBtn}
          className="h-[435px] w-80 border border-y-gray-300 border-5 shadow-2xl bg-white flex flex-col rounded-2xl gap-8 py-7 items-center"
        >
          <h1 className="text-center text-3xl font-semibold text-blue-600">
            Login Form
          </h1>
          <div className="w-72 flex  gap-2 justify-center items-center">
            <button className="text-black hover:text-white  hover:bg-blue-600  transition-all ease-in-out duration-1000 py-2 px-12 rounded-xl">
              <Link to={"/Login"}>Login</Link>
            </button>
            <button className=" py-2 px-12 hover:bg-blue-600 text-black hover:text-white  transition-all ease-in duration-1000  rounded-xl">
              <Link to={"/Signup"}>Signup</Link>
            </button>
          </div>
          <div className="flex justify-center items-center flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => sateemail(e.target.value)}
              className=" h-10  rounded-xl w-72 px-2 border focus:border-blue-600  focus:outline-none border-blue-500    "
              placeholder="Enter tha Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => satepassword(e.target.value)}
              className=" h-10  rounded-xl w-72 px-2 border focus:border-blue-600  focus:outline-none border-blue-500    "
              placeholder="Enter tha Password"
            />
          </div>
          <div>{error && <p className="text-red-500">{error}</p>}</div>
          <div className="flex justify-center items-center h-10 rounded-xl w-72 bg-blue-600 text-white">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
