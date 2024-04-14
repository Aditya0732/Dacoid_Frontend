import React from 'react'
import { BiHomeAlt2 } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineCamera } from 'react-icons/hi2'

const Bottombar = () => {
    return (
        <div className='fixed bottom-0 right-0 w-full flex items-center pt-6 px-6 justify-center bg-white shadow shadow-white'>
            <div className='flex gap-8'>
                <span className='text-[#7F7F7F]'><BiHomeAlt2 size={32} /></span>
                <img src='/tab.png' alt='tab' className='w-7 h-7' />
                <span class='flex -translate-y-12 items-center p-[16px] bg-gradient-to-r from-[#DEE5FF] to-[#809AFF] rounded-full shadow-xl shadow-gray-300'>
                    <CiSearch color='white' size={32} />
                </span>
                <span className='text-[#7F7F7F]'><HiOutlineCamera size={32} /></span>
                <span className='text-[#7F7F7F]'><BsPerson size={32} /></span>
            </div>
        </div>
    )
}

export default Bottombar