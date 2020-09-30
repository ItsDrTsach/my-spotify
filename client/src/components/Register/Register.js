import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { create } from '../../network/ajax';
import { ACTIONS } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import './register.css';
function Register() {
  const { register: Register, handleSubmit, errors } = useForm();
  const [error, setError] = useState('');
  const [, dispatch] = useStateValue();
  const onSubmit = (data) => {
    create('users/register', data)
      .then((res) => {
        dispatch({ type: ACTIONS.LOGIN });
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  return (
    <div className='RegisterPage'>
      <form className='RegisterPage__form' onSubmit={handleSubmit(onSubmit)}>
        <input
          name='name'
          type='text'
          className='RegisterPage__input'
          placeholder='your name...'
          ref={Register({
            required: true,
          })}
        />
        <input
          name='email'
          type='email'
          className='RegisterPage__input'
          placeholder='email..'
          ref={Register({
            required: true,
            pattern: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <input
          name='password'
          type='password'
          className='RegisterPage__input'
          placeholder='password'
          ref={Register({ required: true })}
        />
        {error !== '' && <p>{error}</p>}
        <Link to='/'>Login</Link>
        <input type='submit' value='Register' />
      </form>
    </div>
  );
}

export default Register;
