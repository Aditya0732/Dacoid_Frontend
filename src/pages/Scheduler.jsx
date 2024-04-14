import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Bottombar from '../components/Bottombar'
import ScheduleDate from '../components/ScheduleDate'
import Sessions from '../components/Sessions'

const Scheduler = () => {
    return (
        <div className=' bg-[#fafafa]'>
            <div className='flex px-4 pt-4'>
                <Link to="/home">
                    <div className='flex items-center py-1 px-2 rounded mt-3 bg-[#F1F1F1]'>
                        <span><FaChevronLeft size={12} /></span>
                    </div>
                </Link>
                <div className='flex justify-center w-full'>
                    <h1 className='text-xl font-semibold font-[Roboto] mt-2'>Workout Schedule</h1>
                </div>
            </div>
            <div className='mt-3 flex justify-center items-center gap-2'>
                <span><FaChevronLeft size={10} /></span>
                <h1 className='text-xs font-medium'>Feb 2024</h1>
                <span><FaChevronRight size={10} /></span>
            </div>
            <ScheduleDate/>
            <Sessions/>
            <Bottombar/>
        </div>
    )
}

export default Scheduler