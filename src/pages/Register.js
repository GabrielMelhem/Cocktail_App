import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log("email :>> ", email);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log("password :>> ", password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("email, password :>> ", email, password);
    register(email, password);
  };

  return (
    <>
      {/* <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input type="email" id="email" onChange={handleEmailChange} />
        <label htmlFor="email">Email</label>
        <input type="password" id="password" onChange={handlePasswordChange} />
        <label htmlFor="password">Password</label>
        <button type="submit">Register</button>
      </form> */}
      <div className="container" style={{ width: "40%", marginTop: "100px" }}>
        <form onSubmit={handleRegister}>
          <MDBInput
            className="mb-4"
            type="email"
            id="email"
            placeholder="Email address"
            onChange={handleEmailChange}
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          <MDBBtn
            type="submit"
            className="text-center"
            style={{ textAlign: "center" }}
          >
            Register
          </MDBBtn>
        </form>
      </div>
    </>
  );
};

export default Register;
