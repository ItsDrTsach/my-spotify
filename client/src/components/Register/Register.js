import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import network from "../../network/network";
import "./register.css";
function Register() {
  const history = useHistory();
  const { register: Register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const onSubmit = (data) => {
    network
      .post("users/register", data)
      .then((res) => {
        //redirect to login
        history.push("/");
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  return (
    <div className="RegisterPage">
      <form className="RegisterPage__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          type="text"
          className="RegisterPage__input"
          placeholder="your name..."
          ref={Register({
            required: true,
          })}
        />
        <input
          name="email"
          type="email"
          className="RegisterPage__input"
          placeholder="email.."
          ref={Register({
            required: true,
            pattern: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <input
          name="password"
          type="password"
          className="RegisterPage__input"
          placeholder="password"
          ref={Register({ required: true })}
        />
        {error !== "" && <p>{error}</p>}
        <Link to="/">Login</Link>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
