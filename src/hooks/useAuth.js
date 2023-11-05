import React, {useContext} from 'react';
import AuthContext from "./auth.jsx";

const UseAuth = () => {
	return useContext(AuthContext)
};

export default UseAuth;
