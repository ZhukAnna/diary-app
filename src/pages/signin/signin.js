import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  useEffect(() => {
    document.title = 'Welcome to Diary!';
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="wrapper">
      <div className="sign-bg"></div>
      <div className="sign-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Welcome to Diary!</h2>

          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login"
            placeholder="Login"
            {...register('Login', { required: true, maxLength: 80 })}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register('Password', { required: true, min: 6 })}
          />

          <input type="submit" />
        </form>

        <div className="sign-link">
          <span>New user?</span>
          <a href="/signup">Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
