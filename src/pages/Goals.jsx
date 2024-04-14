import React, { useState } from 'react';
import { BiSolidError } from 'react-icons/bi';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/actions/authSlice';
import { useNavigate } from 'react-router-dom';

const Goals = () => {
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const [selectedOptions, setSelectedOptions] = useState(user.selectedGoals || []);
    const accessToken = useSelector(state => state.auth.accessToken);
    const navigate = useNavigate();

    const handleCheckboxChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const handleSubmit = async () => {
        if (selectedOptions.length === 0) {
            setError(true);
        } else {
            setError(false);

            try {
                const response = await axios.post('https://dacoid-backend.onrender.com/api/user/update',
                    { selectedGoals: selectedOptions },
                    {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        },
                        withCredentials: true, 
                    }
                );
                dispatch(setUser(response.data.user));
                navigate('/home');
            } catch (error) {
                console.error('Error updating user:', error);
            }
        }
    };

    return (
        <div className='p-4'>
            <div className='flex justify-center'>
                <h1 className='text-xl font-semibold font-[Roboto] mt-4'>What are your goals?</h1>
            </div>
            <div className='flex flex-col gap-3 mt-10'>
                {error && <p className="text-red-400 font-semibold text-sm flex items-center gap-1"><span className='text-red-400'><BiSolidError size={20} /></span>Please select at least one option</p>}
                {[
                    { name: 'Weight Loss', key: 'weightLoss' },
                    { name: 'Muscle Gain', key: 'muscleGain' },
                    { name: 'Flexibility and Mobility', key: 'flexibility' },
                    { name: 'General Fitness', key: 'generalFitness' },
                    { name: 'Event - specific training', key: 'eventTraining' },
                    { name: 'Mindfulness and Mental Health', key: 'mindfulness' }
                ].map(option => (
                    <div key={option.key} className='flex justify-between items-center py-3 px-4 rounded-lg bg-[#F1F1F1]'>
                        <h1 className='text-xs font-medium'>{option.name}</h1>
                        <input
                            type='checkbox'
                            checked={selectedOptions.includes(option.name)}
                            onChange={() => handleCheckboxChange(option.name)}
                            className='border border-[#809AFF] w-[22px] h-[22px] rounded'
                        />
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-5 w-full absolute bottom-0 right-0  p-4 mb-16 '>
                <button type="submit" onClick={handleSubmit} className="bg-gradient-to-r to-[#7B91FF] from-[#95BEFF] rounded-xl text-white py-3 hover:scale-105 duration-300 mt-6 w-full md:w-auto text-lg" disabled={selectedOptions.length === 0}>Confirm</button>
            </div>
        </div>
    )
}

export default Goals;
