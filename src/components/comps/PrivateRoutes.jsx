import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

const PrivateRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);
  
  if (!user) return <Navigate to="/SignIn"  />;
  if (role && user.role !== role) return <Navigate to="/"  />;
  return children;
};

export default PrivateRoute;
