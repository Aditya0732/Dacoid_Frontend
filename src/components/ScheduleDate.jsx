import React, { useState } from 'react';

const ScheduleDate = () => {
    const [selectedDate, setSelectedDate] = useState(6);

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const dates = [
        { day: 'Sun', date: 5 },
        { day: 'Mon', date: 6 },
        { day: 'Tue', date: 7 },
        { day: 'Wed', date: 8 },
        { day: 'Thu', date: 9 }
    ];

    return (
        <div className='flex gap-2 justify-center mt-3 px-4'>
            {dates.map(({ day, date }) => (
                <div
                    key={date}
                    className={`flex flex-col gap-0 justify-center items-center pt-2 px-4 pb-4 rounded-xl ${
                        selectedDate === date ? 'bg-gradient-to-r from-[#DEE5FF] to-[#809AFF] text-white' : 'bg-white'
                    }`}
                    onClick={() => handleDateClick(date)}
                >
                    <h1 className='text-xs'>{day}</h1>
                    <h1 className='text-3xl font-semibold'>{date}</h1>
                </div>
            ))}
        </div>
    );
};

export default ScheduleDate;
