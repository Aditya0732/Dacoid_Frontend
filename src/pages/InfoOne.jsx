import React from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const InfoOne = () => {
    return (
        <div className='flex flex-col gap-10 p-6 bg-[#fafafa]'>
            <div className='flex justify-end text-[#9FB2FF]'>
                <Link to="/signup">
                    <h1 className='cursor-pointer'><u>Skip</u></h1>
                </Link>
            </div>
            <div className='flex max-h-screen items-center justify-center mt-10'>
                <img src='page1.png' alt='p1' className='w-5/6' />
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-semibold text-xl'>Track Your Goal</h1>
                <h1 className='text-[#787878] text-[16px]'>Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals</h1>
            </div>
            <div className='flex justify-end mt-10'>
                {/* <div className='border-2 p-1 rounded-full border-[#89A1FF] border-b-0 border-l-0 border-t-0 border-r-0'> */}
                <Link to="/infoTwo">
                    <span class='custom-border cursor-pointer'>
                        <span class='flex items-center p-[22px] bg-gradient-to-r from-[#DEE5FF] to-[#809AFF] rounded-full'>
                            <FaChevronRight color='white' size={16} />
                        </span>
                    </span>
                </Link>
                {/* </div> */}
            </div>
        </div>
    )
}

export default InfoOne