import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../../components/LogoutButton';

const { Title, Text } = Typography;

const WelcomeAuth = () => {
  const history = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-7xl font-bold text-orange-500 animate-pulse">
        CHILD RIGHTS AND YOU
      </h1>
      <p className="text-lg text-gray-700 mt-8">
        Let's ensure happy childhoods for India's children
      </p>
      <div className="mt-10">
        <LogoutButton />
      </div>
    </div>
  );
};

export default WelcomeAuth;