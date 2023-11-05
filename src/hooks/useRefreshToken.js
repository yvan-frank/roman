import React from 'react';
import useAuth from "./useAuth.js";
import {googleLocalToken} from "../api/index.js";

const UseRefreshToken = () => {
	const { setAuth, auth } = useAuth()
	const refresh = async () => {

		setAuth(prev => {
			// console.log(JSON.stringify(prev))
			// console.log(accessToken)
			return{
				...prev,
				googleToken: googleLocalToken
			}
		})

		return googleLocalToken
	}

	return refresh
};

export default UseRefreshToken;
