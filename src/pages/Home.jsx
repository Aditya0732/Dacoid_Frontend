import React from 'react'
import { BsAlarm } from "react-icons/bs";
import { FaArrowRight, FaPersonRunning } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Bottombar from '../components/Bottombar';

const Home = () => {
    return (
        <div className='px-6 pt-3'>
            <h1 className='text-xl font-semibold font-[Roboto] mt-4'>Goals Section</h1>
            <div className='mt-6 flex flex-col gap-4'>
                <div className='flex flex-col gap-2 p-4 bg-[#e8e8e8] rounded-lg'>
                    <div className='flex gap-1 items-center'>
                        <span><FaPersonRunning size={20} /></span>
                        <h1 className='text-lg font-semibold font-[Roboto]'>Track your workout</h1>
                    </div>
                    <p className='text-sm font-medium text-gray-500'>
                        Keep a record of your exercise routines, monitor your progress, and stay motivated on your fitness journey with our workout tracking feature.
                    </p>
                    <Link to="/tracker">
                        <button className="bg-gradient-to-r to-[#7B91FF] from-[#95BEFF] rounded-xl text-white py-3 hover:scale-105 duration-300 mt-1 w-full md:w-auto text-lg flex items-center justify-center gap-2">
                            <h1>Track your workout</h1>
                            <span><FaArrowRight size={20} /></span>
                        </button>
                    </Link>
                </div>
                <div className='flex flex-col gap-2 p-4 bg-[#e8e8e8] rounded-lg'>
                    <div className='flex gap-1 items-center'>
                        <span><BsAlarm size={20} /></span>
                        <h1 className='text-lg font-semibold font-[Roboto]'>Schedule your workout</h1>
                    </div>
                    <p className='text-sm font-medium text-gray-500'>
                        Plan your exercise sessions ahead, set achievable goals, and establish a consistent routine to optimize your fitness regimen with our workout scheduling feature.
                    </p>
                    <Link to="/scheduler">
                        <button className="bg-gradient-to-r to-[#7B91FF] from-[#95BEFF] rounded-xl text-white py-3 hover:scale-105 duration-300 mt-1 w-full md:w-auto text-lg flex items-center justify-center gap-2">
                            <h1>Schedule your workout</h1>
                            <span><FaArrowRight size={20} /></span>
                        </button>
                    </Link>
                </div>

            </div>
            <Bottombar/>
        </div>
    )
}

export default Home