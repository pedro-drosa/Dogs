import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../../context/userContext';

const ProtectedRoute = ({ children }) => {
  const { authenticated } = useContext(userContext);
  return authenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
