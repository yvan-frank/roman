import React from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {loginLink} from "../routes/index.js";
import useAuth from "./useAuth.js";

const RequireAuth = () => {
	const { auth } = useAuth()
	const location = useLocation()
	return (
		auth?.googleToken !== null
			? <Outlet />
			// : !auth?.userDecode
			//     ? <Navigate to='/404' state={{ from: location}} replace />
			: <Navigate to={loginLink} replace />
	);
};

export default RequireAuth;
