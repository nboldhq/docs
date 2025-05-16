import { useMsal } from "@azure/msal-react";
import { Navigate } from "react-router-dom";
import { InteractionStatus } from "@azure/msal-browser";

const PrivateRoute = ({ children }) => {
  const { accounts, inProgress } = useMsal();

  if (inProgress !== InteractionStatus.None) {
    return <div>Loading...</div>;
  }

  if (accounts.length === 0) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;