import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/39cd71fa-e2b4-49f1-aa5e-b93602b28c59/web/IN-en-20250428-TRIFECTA-perspective_760c6d52-3da5-44d7-bb30-ad2920b7021a_large.jpg"
          className="absolute"
          alt="background image"
        />
      </div>
      <form className="absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 bg-gray-700 w-full"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 bg-gray-700 w-full"
          />
        )}
        <input
          type="password"
          placeholder="password"
          className="p-2 my-4 bg-gray-700 w-full"
        />
        <button className="p-4 my-6 bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a Member, Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
