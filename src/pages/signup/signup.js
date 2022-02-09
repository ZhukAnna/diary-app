import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import './signup.css';

const SignUp = () => {

    useEffect(() => {
        document.title = 'Sign Up — Diary';
      });

    const { register, handleSubmit } = useForm({});
    const onSubmit = data => console.log(data);

    return (
        <div className='wrapper'>
            <div className='sign-bg'></div>
            <div className='sign-form'>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Registration</h2>

                    <label htmlFor="firstname">First name</label>
                    <input 
                        type="text" 
                        id="firstname"
                        placeholder="First name" 
                        {...register("First name", {required: true, maxLength: 80})} 
                    />

                    <label htmlFor="lastname">Last name</label>
                    <input 
                        type="text" 
                        id="lastname" 
                        placeholder="Last name" 
                        {...register("Last name", 
                        {required: true, 
                        maxLength: 100})} 
                    />

                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email" 
                        {...register("Email", 
                        {required: true, 
                        pattern: /^\S+@\S+$/i})} 
                    />
                    
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Password" 
                        {...register("Password", 
                        {required: true, 
                        min: 6})} 
                    />
                    
                    <input 
                        type="checkbox" 
                        id="policy" 
                        placeholder="Policy" 
                        {...register("Policy", 
                        {required: true})} 
                    />
                    <label htmlFor="policy">I agree to the<a href='/terms'>Terms and Private Policy</a></label>

                    <input type="submit" />
                </form>

                <div className='sign-link'>
                    <span>Already have an account?</span>
                    <a href='/signin'>Sign in</a>
                </div>
            </div>
        </div>
    );
}

export default SignUp;