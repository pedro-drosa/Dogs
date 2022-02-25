import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { userContext } from '../../context/userContext';

import LoginForm from './components/LoginForm';
import LoginCreate from './components/LoginCreate';
import LoginPasswordLost from './components/LoginPasswordLost';
import LoginPasswordReset from './components/LoginPasswordReset';

const Login = () => {
  const { authenticated } = useContext(userContext);

  if (authenticated) return <Navigate to="/conta" />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
