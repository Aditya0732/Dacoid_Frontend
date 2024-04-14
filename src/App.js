import { Route, Routes } from 'react-router-dom';
import './App.css';
import { GoDotFill } from 'react-icons/go';
import InfoOne from './pages/InfoOne';
import InfoTwo from './pages/InfoTwo';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Goals from './pages/Goals';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import Scheduler from './pages/Scheduler';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const [dotCount, setDotCount] = useState(1);
  const loader = useSelector(state => state.info.loader);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDotCount(count => (count === 3 ? 1 : count + 1));
    }, 300); // Change the interval as needed

    return () => clearInterval(intervalId);
  }, []);

  const renderDots = () => {
    switch (dotCount) {
      case 1:
        return <GoDotFill size={24} color='white' />;
      case 2:
        return (
          <>
            <GoDotFill size={24} color='white' />
            <GoDotFill size={24} color='white' />
          </>
        );
      case 3:
        return (
          <>
            <GoDotFill size={24} color='white' />
            <GoDotFill size={24} color='white' />
            <GoDotFill size={24} color='white' />
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className='bg-[#fafafa] h-screen'>
      <Routes>
        <Route path="/" element={<InfoOne />} />
        <Route path="/infoTwo" element={<InfoTwo />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/scheduler" element={<Scheduler />} />
      </Routes>
      {loader && (
        <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50">
          <div className='flex gap-2 px-3 h-fit py-1 bg-[#809AFF] rounded-b-lg z-[70]'>
          {renderDots()}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
