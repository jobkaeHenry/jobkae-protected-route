// import { Outlet } from "react-router";
// import { Navigate, useLocation } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { isLoginSelector } from "../Recoil/TokenAtom";

import { Navigate, Outlet, useLocation } from "react-router";
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../Recoil/TokenAtom";

const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  const currentLocation = useLocation();
  
  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate
      to={"/login"}
      replace
      state={{ redirecredFrom: currentLocation }}
    />
  );
};

export default ProtectedRoute;
