import { useState } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteType = {
  authAccess: boolean;
  children: React.ReactElement;
};
export const AuthRoute = ({ authAccess, children }: ProtectedRouteType) => {
  const [token, setToken] = useState(false);

  if (authAccess) {
    if (!token) {
      alert("로그인 후 이용해주시기 바랍니다.");
      return <Navigate to="/account/login" replace />;
    } else {
      return children;
    }
  } else {
    if (!token) {
      return children;
    } else {
      return <Navigate to="/home" replace />;
    }
  }
};
