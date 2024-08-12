import React, { useState } from "react";

const Signup = () => {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handleSubmit = (e) => {

    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        });
    }

    // console.log(state);

  return (
    <div>
      <div className="signup-form w-[100%] h-screen flex justify-center items-center">
        <div className="wrapper w-[50%] border-solid border-2 border-gray-200 h-96 flex flex-col justify-center items-center rounded-3xl shadow-2xl">
          <form className="w-full h-full p-3 flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <h2 className="text-3xl mb-4">Sign Up</h2>
            <div className="form-grp mb-4 w-[60%]">
              <input
                type="text"
                placeholder="Enter Name"
                id=""
                className="border-solid border-2 border-gray-500 w-full rounded-3xl text-center p-3"
                name="username"
                value={state.username}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-grp mb-4 w-[60%]">
              <input
                type="email"
                placeholder="Enter Email"
                id=""
                className="border-solid border-2 border-gray-500 w-full rounded-3xl text-center p-3"
                name="email"
                value={state.email}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-grp mb-4 w-[60%]">
              <input
                type="password"
                placeholder="Confirm Password"
                id=""
                className="border-solid border-2 border-gray-500 w-full rounded-3xl text-center p-3"
                name="password"
                value={state.password}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-grp mb-4">
              <button
                type="button"
                class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
