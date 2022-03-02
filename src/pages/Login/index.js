import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { userContext } from '../../context/userContext';

import LoginForm from './components/LoginForm';
import LoginCreate from './components/LoginCreate';
import LoginPasswordLost from './components/LoginPasswordLost';
import LoginPasswordReset from './components/LoginPasswordReset';
import NotFound from '../NotFound';

import styles from './styles.module.css';

const Login = () => {
  const { authenticated } = useContext(userContext);

  if (authenticated) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
