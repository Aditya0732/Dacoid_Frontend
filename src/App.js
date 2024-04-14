import { Route, Routes } from 'react-router-dom';
import './App.css';

import InfoOne from './pages/InfoOne';
import InfoTwo from './pages/InfoTwo';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Goals from './pages/Goals';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import Scheduler from './pages/Scheduler';

function App() {
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
    </div>
  );
}

export default App;
