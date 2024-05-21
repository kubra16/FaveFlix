import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const SignIn = () => {
  const [email, setEmail] = useState({ value: "", error: null });
  const [password, setPassword] = useState({ value: "", error: null });
  const history = useNavigate();
  console.log(BASE_URL);

  const emailChange = (e) => {
    setEmail({ ...email, value: e.target.value });
  };

  const handleSubmit = async () => {
    if (email.value.trim() === "") {
      setEmail({
        ...email,
        error: "please add your email",
      });
    }
    if (password.value.trim() === "") {
      setPassword({
        ...password,
        error: "please add your password",
      });
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${BASE_URL}api/users/login`,
        { email: email.value, password: password.value },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      history("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <label>email</label>
      <input
        type="email"
        placeholder="enter your email"
        value={email.value}
        onChange={emailChange}
      />
      {email.error && <div style={{ color: "red" }}>{email.error}</div>}
      <label>password</label>
      <input
        type="password"
        placeholder="enter your password"
        value={password.value}
        onChange={(e) =>
          setPassword((prev) => ({ ...prev, value: e.target.value }))
        }
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignIn;
