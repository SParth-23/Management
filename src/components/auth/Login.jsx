import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("email is ", email);
    console.log("password is ", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 w-80 outline-none bg-transparent text-xl py-3 px-5 border-emerald-400 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Email address"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 w-80 outline-none bg-transparent text-xl py-3 px-5 border-emerald-400 rounded-full placeholder:text-gray-400  mt-3"
            type="Password"
            placeholder="Password"
          />
          <button className="text-xl w-80 py-3 px-5 bg-emerald-600 rounded-full placeholder:text-white mt-5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
