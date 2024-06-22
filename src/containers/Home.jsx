import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import { Routes, Route } from 'react-router-dom';
import CreateEvent from '../pages/CreateEvent';
import ManageEvents from '../pages/ManageEvents';
import ManageUsers from '../pages/ManageUsers';
import WelcomeAdmin from '../pages/admin/WelcomeAdmin';
import WelcomeAuth from '../pages/authorities/WelcomeAuth';
import WelcomeNgo from '../pages/ngo/WelcomeNgo';

const Home = ({ isAuthenticated }) => {
  const [expanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  // Determine routes based on user role
  const renderRoutes = () => {
    // Example roles: 'admin', 'ngo', 'higherAuthority'
    // Replace with actual logic from your Sidebar component
    const userRole = 'admin'; // Replace with actual user role obtained from authentication

    switch (userRole) {
      case 'admin':
        return (
          <>
            <Route path='/' element={<WelcomeAdmin/>} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/createvnt' element={<CreateEvent />} />
            <Route path='/managevnt' element={<ManageEvents />} />
            <Route path='/manageusers' element={<ManageUsers />} />
          </>
        );
      case 'ngo':
        return (
          <>
            <Route path='/' element={<WelcomeNgo/>} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/createvnt' element={<CreateEvent />} />
          </>
        );
      case 'higherAuthority':
        return (
          <>
            <Route path='/' element={<WelcomeAuth/>} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/createvnt' element={<CreateEvent />} />
            <Route path='/managevnt' element={<ManageEvents />} />
          </>
        );
      default:
        return (
          <>
            <Route path='/' element={<Welcome />} />
          </>
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isAuthenticated={isAuthenticated} onToggle={handleToggle} expanded={expanded} />
      <div className="flex-1 overflow-y-auto ml-0 p-4">
        <Routes>
          {renderRoutes()}
        </Routes>
      </div>
    </div>
  );
}

export default Home;
