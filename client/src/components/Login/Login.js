import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import network from "../../network/network";
import { UserContext } from "../UserContext";
import "./login.css";
function Login() {
  // eslint-ignore
  const { _, setUser } = useContext(UserContext);
  const { register: logIn, handleSubmit, errors } = useForm();
  const [error, setError] = useState("");
  const onSubmit = (data) => {
    console.log({ ...data });
    network
      .post("users/login", data)
      .then((res) => {
        if (res.success) {
          setUser(true);
        }
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  };
  return (
    <div className="loginPage">
      <form className="loginPage__form" onSubmit={handleSubmit(onSubmit)}>
        <p className="loginPage__p">Login:</p>
        <input
          name="email"
          type="email"
          className="loginPage__input"
          placeholder="email.."
          ref={logIn({
            required: true,
            pattern: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <input
          name="password"
          type="password"
          className="loginPage__input"
          placeholder="password"
          ref={logIn({ required: true })}
        />
        {/* <div className='loginPage__remember'>
          <input name='rememberToken' type='checkbox' ref={logIn()} />
          <p>Remember Me</p>
        </div> */}
        {error !== "" && <p>{error}</p>}
        <Link to="/register">register</Link>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
