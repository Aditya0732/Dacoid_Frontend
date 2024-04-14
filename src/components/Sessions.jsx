import React from 'react'
import { IoAddOutline } from "react-icons/io5";

const Sessions = () => {
    return (
        <div className='mt-6'>
            <div className='px-4 py-2 font-medium border-b-[1px] border-[#7F7F7F]'>
                <h1 className='text-xs'>06:00 AM</h1>
            </div>
            <div className='px-4 relative py-2 font-medium border-b-[1px] border-[#7F7F7F]'>
                <h1 className='text-xs'>07:00 AM</h1>
                <div className='absolute right-4 top-[20px] px-2 py-1 rounded-3xl bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0] text-white'>
                    <h1 className='text-[11px] font-normal'>Ab Workout, 7:30am</h1>
                </div>
            </div>
            <div className='px-4 py-2 font-medium border-b-[1px] border-[#7F7F7F]'>
                <h1 className='text-xs'>08:00 AM</h1>
            </div>
            <div className='px-4 relative py-2 font-medium border-b-[1px] border-[#7F7F7F]'>
                <h1 className='text-xs'>09:00 AM</h1>
                <div className='absolute right-1/3 top-[8px] px-2 py-1 rounded-3xl bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0] text-white'>
                    <h1 className='text-[11px] font-normal'>Upperbody Workout, 9am</h1>
                </div>
                <div className='absolute p-1 rounded-full bg-[#5883F7]  top-[29px]'></div>
                <div className='absolute border border-[#5883F7] w-2/3 top-8'></div>
            </div>
            <div className='px-4 py-2 font-medium border-b-[1px] border-[#7F7F7F]'>
                <h1 className='text-xs'>10:00 AM</h1>
            </div>
            <div className='px-4 py-2 font-medium border-b-[1px] border-[#7F7F7F]'>
                <h1 className='text-xs'>11:00 AM</h1>
            </div>
            <div className='px-4 py-2 font-medium border-b-[1px] border-[#7F7F7F]'>
                <h1 className='text-xs'>12:00 AM</h1>
            </div>
            <div className='px-4 py-2 font-medium border-b-[1px] border-[#7F7F7F]'>
                <h1 className='text-xs'>01:00 PM</h1>
            </div>
            <div className='px-4 relative py-2 font-medium border-b-[1px] border-[#7F7F7F]'>
                <h1 className='text-xs'>02:00 PM</h1>
                <div className='absolute right-1/3 top-[5px] px-2 py-1 rounded-3xl bg-[#e6e6e6] text-black'>
                    <h1 className='text-[12px] font-medium'>Lowerbody Workout, 2pm</h1>
                </div>
            </div>
            <div className='px-4 py-2 font-medium border-b-[1px] border-[#7F7F7F]'>
                <h1 className='text-xs'>03:00 PM</h1>
            </div>
            <div className='px-4 py-2 font-medium border-b-[1px] border-[#7F7F7F]'>
                <h1 className='text-xs'>04:00 PM</h1>
            </div>
            <div className='px-4 py-2 font-medium border-b-[1px] border-[#7F7F7F]'>
                <h1 className='text-xs'>05:00 PM</h1>
            </div>
            <span class='fixed flex -translate-y-24 right-4 items-center p-[16px] bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0] rounded-full shadow-md shadow-gray-300'>
                <IoAddOutline color='white' size={32} />
            </span>
        </div>
    )
}

export default Sessions