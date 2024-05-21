import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState({ value: "", error: null });
  const [password, setPassword] = useState({ value: "", error: null });
  const [name, setName] = useState({ value: "", error: null });
  const history = useNavigate();

  const emailChange = (e) => {
    setEmail({ ...email, value: e.target.value });
  };

  const passwordChange = (e) => {
    setPassword({ ...password, value: e.target.value });
  };

  const nameChange = (e) => {
    setName({ ...name, value: e.target.value });
  };

  const handleSubmit = async () => {
    if (name.value.trim() === "") {
      setName({
        ...name,
        error: "Please add name",
      });
    }
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
        "http://localhost:5000/api/users",
        { name: name.value, email: email.value, password: password.value },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        placeholder="enter your name"
        value={name.value}
        onChange={nameChange}
      />
      {name.error && <div style={{ color: "red" }}>{name.error}</div>}
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
        onChange={passwordChange}
      />
      {password.error && <div style={{ color: "red" }}>{password.error}</div>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Register;
