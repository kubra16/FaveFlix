import React, { useState } from "react";
import SignIn from "../components/SignIn"
import Register from "../components/Register";
const Login = () => {
  const [isLogin, setIslogin] = useState(false);

  return (
    <div>
      <h1>Welcome to FavFlix</h1>

      <button onClick={() => setIslogin(true)}>Login</button>
      <button onClick={() => setIslogin(false)}>Register</button>

      {isLogin ? (
        <SignIn/>
      ) : (
        <Register/>
      )}
    </div>
  );
};

export default Login;
