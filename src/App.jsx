import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { BarLoader } from 'react-spinners';
import LoginPage from './containers/LoginPage';
import Home from './containers/Home';
import NotFoundPage from './containers/NotFoundPage';
import AccessDeniedPage from './containers/AccessDeniedPage';

const PrivateRoute = ({ element: Element, isAuthenticated, allowedRoles }) => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <BarLoader loading={isLoading} size={100} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  const userRole = getUserRole(user);

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/access-denied" />;
  }

  return <Element />;
};

const getUserRole = (user) => {
  // Example logic to determine user role based on email domain or other criteria
  const userEmail = user.email || '';
  if (userEmail.endsWith('@admin.cry.org.in')) {
    return 'admin';
  } else if (userEmail.endsWith('@ngo.cry.org.in')) {
    return 'ngo';
  } else if (userEmail.endsWith('@designation.cry.org.in')) {
    return 'higherAuthority';
  }
  // Default to 'admin' if no specific role matched
  return 'admin';
};

const App = () => {
  const { isAuthenticated, isLoading, error, user } = useAuth0();

  return (
    <div className="flex">
      <div className="flex-1">
        {isLoading && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <BarLoader loading={isLoading} size={100} />
          </div>
        )}

        {error && (
          <div>Error: {error.message}</div>
        )}

        {!isLoading && !error && (
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute
                  element={Home}
                  isAuthenticated={isAuthenticated}
                  allowedRoles={['admin', 'ngo', 'higherAuthority']} // Define roles allowed to access dashboard routes
                />
              }
            />
            <Route path="/access-denied" element={<AccessDeniedPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
