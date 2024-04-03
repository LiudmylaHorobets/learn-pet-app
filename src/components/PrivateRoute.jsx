import { useAuth } from 'contexts/authContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
