import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
const AdminSignup = () => {
  const [name, satename] = useState("");
  const [email, sateemail] = useState("");
  const [password, satepassword] = useState("");
  const [error, sateerror] = useState("");
  const navigate = useNavigate();
  const dataObj = {
    name: name.trim(),
    email: email.trim(),
    password: password.trim(),
  };

  const Submit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return sateerror("Please fill all fields");
    }
    if (!email.endsWith("@gmail.com")) {
      return sateerror("Email must end with @gmail.com");
    }
    const UsersData = JSON.parse(localStorage.getItem("AdminLogin")) || [];
    const Users = UsersData.find(
      (u) => u.email === email && u.password === password
    );

    if (Users) {
      return sateerror("User already exists");
    }

    const newdata = [...UsersData, dataObj];
    localStorage.setItem("AdminLogin", JSON.stringify(newdata));

    sateemail("");
    satename("");
    satepassword("");
    sateerror("Signup successful! Redirecting...");

    setTimeout(() => {
      navigate("/AdminLogin");
    }, 1000);
  };
  return (
    <div className="h-screen justify-center items-center flex bg-gray-50">
      <form
        onSubmit={Submit}
        className="h-[490px] w-80 bg-white flex border border-y-gray-300 border-5 shadow-2xl flex-col rounded-2xl gap-8 py-5 items-center"
      >
        <h1 className="text-center text-3xl font-semibold text-blue-600">
          Signup Form
        </h1>
        <div className="w-72 flex  gap-2 justify-center items-center">
          <button className="text-black hover:text-white  hover:bg-blue-600  transition-all ease-in-out duration-1000 py-2 px-12 rounded-xl">
            <Link to={"/AdminLogin"}>Login</Link>
          </button>
          <button className=" py-2 px-12 hover:bg-blue-600 text-black hover:text-white  transition-all ease-in duration-1000  rounded-xl">
            <Link to={"/SignupLogin"}>Signup</Link>
          </button>
        </div>
        <div className="flex justify-center items-start flex-col gap-5 ">
          <input
            type="text"
            value={name}
            onChange={(e) => satename(e.target.value)}
            className=" h-10  rounded-xl w-72 px-2 border focus:border-blue-600  focus:outline-none border-blue-500    "
            placeholder="Enter tha Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => sateemail(e.target.value)}
            className=" h-10 w-72 rounded-xl  px-2 border focus:border-blue-600  focus:outline-none border-blue-500    "
            placeholder="Enter tha Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => satepassword(e.target.value)}
            className="h-10 w-72 rounded-xl px-2 border border-blue-500 focus:border-blue-600  focus:outline-none"
            placeholder="Enter tha Password"
          />
        </div>
        <div>{error && <p className="text-red-500">{error}</p>}</div>
        <div className="flex justify-center items-center h-10 rounded-xl w-72 bg-blue-600 text-white">
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};
export default AdminSignup;
