import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log("email :>> ", email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log("password :>> ", password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("email, password :>> ", email, password);
    login(email, password);
  };

  return (
    <div className="container" style={{ width: "40%", marginTop: "100px" }}>
      {/* <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" id="email" onChange={handleEmailChange} />
        <label htmlFor="email">Email</label>
        <input type="password" id="password" onChange={handlePasswordChange} />
        <label htmlFor="password">Password</label>
        <button type="submit">Login</button>
      </form> */}
      <form onSubmit={handleLogin}>
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
          Sign in
        </MDBBtn>

        <div className="text-center">
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
