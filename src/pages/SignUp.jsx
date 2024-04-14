import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { FaFacebookF } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";
import { BiSolidError } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAccessToken, setUser } from '../redux/actions/authSlice';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false
    });
    const [signupError, setSignupError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: false
        }));
        if (name === 'firstName') setFirstName(value);
        else if (name === 'lastName') setLastName(value);
        else if (name === 'email') setEmail(value);
        else if (name === 'password') setPassword(value);
    };

    const handleSubmit = async () => {
        const errorsCopy = { ...errors };
        if (!firstName) errorsCopy.firstName = true;
        else errorsCopy.firstName = false;

        if (!lastName) errorsCopy.lastName = true;
        else errorsCopy.lastName = false;

        if (!email) errorsCopy.email = true;
        else errorsCopy.email = false;

        if (!password) errorsCopy.password = true;
        else errorsCopy.password = false;
       
        setErrors(errorsCopy);
       
        if (!errorsCopy.firstName && !errorsCopy.lastName && !errorsCopy.email && !errorsCopy.password) {
            try {
                const response = await axios.post('http://localhost:4001/api/signup', {
                    firstName,
                    lastName,
                    email,
                    password,
                    terms:true,
                });

                dispatch(setAccessToken(response.data.accessToken))
                dispatch(setUser(response.data.user));
                navigate('/goals');
            } catch (error) {
                if (error.response.status === 409) {
                    setSignupError('Email is already registered');
                } else {
                    console.error('Signup error:', error.response.data);
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
                        name='firstName'
                        value={firstName}
                        onChange={handleInputChange}
                        placeholder='First Name'
                        className={`p-4 rounded-lg w-full text-xs bg-[#F1F1F1] outline-none ${errors.firstName && 'bg-red-200'}`}
                    />
                    {errors.firstName && <p className="text-red-300 font-semibold text-xs mt-1 flex gap-1"><span className='text-red-400'><BiSolidError size={16}/></span>First Name is required</p>}
                </div>
                <div>
                    <input
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={handleInputChange}
                        placeholder='Last Name'
                        className={`p-4 rounded-lg w-full text-xs bg-[#F1F1F1] outline-none ${errors.lastName && 'bg-red-200'}`}
                    />
                    {errors.lastName && <p className="text-red-300 font-semibold text-xs mt-1 flex gap-1"><span className='text-red-400'><BiSolidError size={16}/></span>Last Name is required</p>}
                </div>
                <div>
                    <input
                        type='text'
                        name='email'
                        value={email}
                        onChange={handleInputChange}
                        placeholder='Email'
                        className={`p-4 rounded-lg w-full text-xs bg-[#F1F1F1] outline-none ${errors.email && 'bg-red-200'}`}
                    />
                    {errors.email && <p className="text-red-300 font-semibold text-xs mt-1 flex gap-1"><span className='text-red-400'><BiSolidError size={16}/></span>Email is required</p>}
                    {signupError && <p className="text-red-300 font-semibold text-xs mt-1 flex gap-1"><span className='text-red-400'><BiSolidError size={16}/></span>{signupError}</p>}
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
                    {errors.password && <p className="text-red-300 font-semibold text-xs mt-1 flex gap-1"><span className='text-red-400'><BiSolidError size={16}/></span>Password is required</p>}
                </div>
                <div className='flex gap-2'>
                    <input
                        type='checkbox'
                        className='border border-[#7F7F7F] w-[22px] h-[22px] rounded'
                    />
                    <h1 className='text-sm  text-[#7F7F7F]'>By proceeding, I agree to all <span className='text-[#93A9FF]'><u>T&C</u></span> and  <span className='text-[#93A9FF]'><u>Privacy Policy</u></span></h1>
                </div>
            </div>
            <div className='flex flex-col gap-5 w-full absolute bottom-0 right-0 p-4 mt-10 md:mb-0'>
                <button type="submit" onClick={handleSubmit} className="bg-gradient-to-r to-[#7B91FF] from-[#95BEFF] rounded-xl text-white py-3 hover:scale-105 duration-300 mt-6 w-full md:w-auto text-lg">Create an Account</button>
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
                <div className='flex justify-center'><h1 className='text-sm'>Already have an account? <Link to="/signin"><span className='text-[#819CFF]'><u>Login</u></span></Link></h1>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
