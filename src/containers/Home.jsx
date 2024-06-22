import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import CreateEvent from '../pages/CreateEvent';
import ManageEvents from '../pages/ManageEvents';
import ManageUsers from '../pages/ManageUsers';
import WelcomeAdmin from '../pages/admin/WelcomeAdmin';
import WelcomeAuth from '../pages/authorities/WelcomeAuth';
import WelcomeNgo from '../pages/ngo/WelcomeNgo';
import Welcome from '../pages/Welcome'; // Assuming you have a Welcome component
import BudgetTracker from '../pages/ngo/BudgetTracker';
import Pitching from '../pages/ngo/Pitching';
import FundsApproval from '../pages/ngo/FundsApproval';
import Admindash from '../pages/admin/Dashboard';
import Calender from '../components/Calender';

// Function to determine user role based on email domain
const getUserRole = (email) => {
  if (email.endsWith('@admin.cry.org.in')) {
    return 'admin';
  } else if (email.endsWith('@ngo.cry.org.in')) {
    return 'ngo';
  } else if (email.includes('@cry.org.in')) {
    return 'higherAuthority';
  } else {
    return 'guest';
  }
};

const Home = ({ isAuthenticated }) => {
  const [expanded, setExpanded] = useState(true);
  const { user, isLoading } = useAuth0();
  const [userRole, setUserRole] = useState(null); // Initialize userRole as null or appropriate default

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (user) {
      const role = getUserRole(user.email);
      setUserRole(role);
    }
  }, [user]);

  const renderRoutes = () => {
    switch (userRole) {
      case 'admin':
        return (
          <>
            <Route path='/' element={<WelcomeAdmin />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/admin' element={<Admindash/>} />
            <Route path='/calender' element={<Calender/>} />
            <Route path='/manageusers' element={<ManageUsers />} />
          </>
        );
      case 'ngo':
        return (
          <>
            <Route path='/' element={<WelcomeNgo />} />
            <Route path='/budgetracking' element={<BudgetTracker/>} />
            <Route path='/pitching' element={<Pitching/>} />
            <Route path='/fundspending' element={<FundsApproval/>} />
            <Route path='/profile' element={<Profile />} />
            
            <Route path='/createvnt' element={<CreateEvent />} />
          </>
        );
      case 'higherAuthority':
        return (
          <>
            <Route path='/' element={<WelcomeAuth />} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/createvnt' element={<CreateEvent />} />
            <Route path='/calender' element={<Calender/>} />
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

  if (isLoading || userRole === null) {
    // Render a loading state while the userRole is being determined or user info is loading
    return <div>Loading...</div>;
  }

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
};

export default Home;
