import React, { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";
import { BiSolidError } from "react-icons/bi";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setAccessToken, setUser } from '../redux/actions/authSlice';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        invalid:false,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: false
        }));
        if (name === 'email') setEmail(value);
        else if (name === 'password') setPassword(value);
    };


    const handleSubmit = async () => {
        const errorsCopy = { ...errors };

        if (!email) errorsCopy.email = true;
        else errorsCopy.email = false;

        if (!password) errorsCopy.password = true;
        else errorsCopy.password = false;

        setErrors(errorsCopy);

        if (!errorsCopy.email && !errorsCopy.password) {
            try {
                const response = await axios.post('https://dacoid-backend.onrender.com/api/login', {
                    email,
                    password,
                });

                dispatch(setAccessToken(response.data.accessToken))
                dispatch(setUser(response.data.user));
                navigate('/goals');
            } catch (error) {
                if (error.response.status === 401) {
                    // Handle 401 status code (Unauthorized)
                    console.error('Invalid email or password');
                    setErrors({ invalid: true });
                } else {
                    console.error('Login error:', error.response.data);
                }
            }
        }
    };


    return (
        <div className='p-4 min-h-screen relative'>
            <h1 className='text-xl font-semibold font-[Roboto] mt-4'>Create an account</h1>
            <div className='mt-10 flex flex-col gap-5'>

                <div>
                    <input
                        type='text'
                        name='email'
                        value={email}
                        onChange={handleInputChange}
                        placeholder='Email'
                        className={`p-4 rounded-lg w-full text-xs bg-[#F1F1F1] outline-none ${errors.email && 'bg-red-200'}`}
                    />
                    {errors.email && <p className="text-red-300 font-semibold text-xs mt-1 flex gap-1"><span className='text-red-400'><BiSolidError size={16} /></span>Email is required</p>}
                </div>
                <div>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleInputChange}
                        placeholder='Password'
                        className={`p-4 rounded-lg w-full text-xs bg-[#F1F1F1] outline-none ${errors.password && 'bg-red-200'}`}

                    />
                    {errors.password && <p className="text-red-300 font-semibold text-xs mt-1 flex gap-1"><span className='text-red-400'><BiSolidError size={16} /></span>Password is required</p>}
                </div>
                <div className='flex gap-2'>

                    <h1 className='text-sm  text-[#7F7F7F]'><u>Forgot your password?</u></h1>
                </div>
                {errors.invalid && <p className="text-red-300 font-semibold text-xs mt-1 flex gap-1"><span className='text-red-400'><BiSolidError size={16} /></span>Invalid email or password</p>}
            </div>
            <div className='flex flex-col gap-5 w-full absolute bottom-0 right-0 p-4 mt-10 md:mb-0'>
                <button type="submit" onClick={handleSubmit} className="bg-gradient-to-r to-[#7B91FF] from-[#95BEFF] rounded-xl text-white py-3 hover:scale-105 duration-300 mt-6 w-full md:w-auto text-lg">Sign In</button>
                <div className='flex gap-[6px] items-center'>
                    <div className='w-full border-b border-gray-400 h-0'></div>
                    <h1 className='text-sm'>Or</h1>
                    <div className='w-full border-b border-gray-400 h-0'></div>
                </div>
                <div className='flex justify-center gap-4'>
                    <div className='flex items-center border-[1.5px] border-[#7F7F7F] p-3 rounded-lg'>
                        <span><FcGoogle size={20} /></span>
                    </div>
                    <div className='flex items-center border-[1.5px] border-[#7F7F7F] p-3 rounded-lg'>
                        <span><FaFacebookF size={18} color='#1A7AEB' /></span>
                    </div>
                </div>
                <div className='flex justify-center'><h1 className='text-sm'>Don't have an account? <Link to="/signup"><span className='text-[#819CFF]'><u>Create an account</u></span></Link></h1></div>
            </div>
        </div>
    )
}

export default SignIn;
