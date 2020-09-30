import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { create } from '../../network/ajax';
import { ACTIONS } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import './login.css';
function Login() {
  const { register: logIn, handleSubmit, errors } = useForm();
  const [error, setError] = useState('');
  const [, dispatch] = useStateValue();
  const onSubmit = (data) => {
    create('users/login', data)
      .then((res) => {
        dispatch({ type: ACTIONS.LOGIN });
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  return (
    <div className='loginPage'>
      <form className='loginPage__form' onSubmit={handleSubmit(onSubmit)}>
        <p className='loginPage__p'>Login:</p>
        <input
          name='email'
          type='email'
          className='loginPage__input'
          placeholder='email..'
          ref={logIn({
            required: true,
            pattern: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <input
          name='password'
          type='password'
          className='loginPage__input'
          placeholder='password'
          ref={logIn({ required: true })}
        />
        <div className='loginPage__remember'>
          <input name='rememberToken' type='checkbox' ref={logIn()} />
          <p>Remember Me</p>
        </div>
        {error !== '' && <p>{error}</p>}
        <Link to='/register'>register</Link>
        <input type='submit' value='Login' />
      </form>
    </div>
  );
}

export default Login;
