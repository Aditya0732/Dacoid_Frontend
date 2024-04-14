import React from 'react'
import { BiError } from 'react-icons/bi'
import { FaChevronLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Bottombar from '../components/Bottombar'
import Chart from '../components/Chart'

const Tracker = () => {
    return (
        <div className='p-4 h-screen bg-[#fafafa]'>
            <div className='flex'>
                <Link to="/home">
                    <div className='flex items-center py-1 px-2 rounded mt-3 bg-[#F1F1F1]'>
                        <span><FaChevronLeft size={12} /></span>
                    </div>
                </Link>
                <div className='flex justify-center w-full'>
                    <h1 className='text-xl font-semibold font-[Roboto] mt-2'>Workout Tracker</h1>
                </div>
            </div>
            <Chart/>
            <div className='flex w-[95%] border rounded-xl mt-10 bg-gradient-to-r to-[#F1F1F1] from-[#DEE5FF] '>
                <div className='flex items-center gap-3 p-2 w-[80%] '>
                    <span><BiError color='809AFF' size={32} /></span>
                    <h1 className='text-xs font-semibold'>You've burned fewer calories than yesterday. Time to get moving!</h1>
                </div>
            </div>
            <div className='flex justify-between mt-10 items-end'>
                <h1 className='text-lg font-semibold font-[Roboto]'>Upcoming Workouts</h1>
                <h1 className='text-xs text-[#7F7F7F] mb-1 font-semibold'>See more</h1>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='rounded-xl drop-shadow-xl p-3 shadow-black bg-white flex justify-between items-center'>
                    <div className='flex gap-3'>
                        <img src='w1.png' alt='w1' className='rounded-full w-14 h-14 object-cover' />
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-[13px] font-medium'>Full Body Workout</h1>
                            <h1 className='text-[11px] font-medium text-[#7F7F7F]'>Today 3pm</h1>
                        </div>
                    </div>
                    <div className='bg-[#809AFF] py-[3px] rounded-2xl pl-[3px] pr-5'>
                        <div className='bg-white p-[7px] rounded-full'>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl drop-shadow-xl p-3 shadow-black bg-white flex justify-between items-center'>
                    <div className='flex gap-3'>
                        <img src='w2.png' alt='w2' className='rounded-full w-14 h-14 object-cover' />
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-[13px] font-medium'>Upper Body Workout</h1>
                            <h1 className='text-[11px] font-medium text-[#7F7F7F]'>4 Feb,3:30 pm</h1>
                        </div>
                    </div>
                    <div className='bg-[#809AFF] py-[3px] rounded-2xl pl-[3px] pr-5'>
                        <div className='bg-white p-[7px] rounded-full'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h1 className='text-lg font-semibold font-[Roboto]'>What Do You Want to Train</h1>
                <div className='mt-4 p-3 px-4 rounded-xl bg-[#beccff] flex justify-between items-center'>
                    <div className='flex flex-col gap-[6px]'>
                        <h1 className='text-[13px] font-medium'>Full Body Workout</h1>
                        <h1 className='text-[12px] '>Arms</h1>
                        <h1 className='text-[12px] '>Chest and Shoulders</h1>
                        <h1 className='text-[12px] '>back</h1>
                        <h1 className='text-[12px] '>legs</h1>
                    </div>
                    <img src='/w3.png' alt='w3' className='w-28 h-28 rounded-full' />
                </div>
            </div>
            <Bottombar />
        </div>
    )
}

export default Tracker