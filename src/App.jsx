import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { BarLoader } from 'react-spinners';
import LoginPage from './containers/LoginPage';
import Home from './containers/Home';
import NotFoundPage from './containers/NotFoundPage';
import AccessDeniedPage from './containers/AccessDeniedPage';

const PrivateRoute = ({ element: Element, isAuthenticated }) => {
  return isAuthenticated ? <Element /> : <Navigate to="/access-denied" />;
};
// Function to determine user role based on email domain


const App = () => {
  const { isAuthenticated, isLoading, error} = useAuth0();

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <BarLoader loading={isLoading} size={100} />
      </div>
    );
  }

  if (error) {
    console.error('Authentication error:', error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard/*" element={<PrivateRoute element={Home} isAuthenticated={isAuthenticated } />} />
          <Route path="/access-denied" element={<AccessDeniedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
