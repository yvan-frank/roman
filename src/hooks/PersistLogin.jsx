import React, {useEffect, useState} from 'react';
import useAuth from "./useAuth.js";
import Loading from "../components/Loading.jsx";
import {Outlet} from "react-router-dom";
import useRefreshToken from "./useRefreshToken.js";

const PersistLogin = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { auth } = useAuth()
	const refresh = useRefreshToken()

	useEffect(() => {
		const verifyRefreshToken = async () => {
			try {
				await refresh()
			}catch (err){
				console.error(err)
			}finally {
				setIsLoading(false)
			}
		}

		!auth?.googleToken ? verifyRefreshToken() : setIsLoading(false)
	}, [])

	return (
		<>
			{
				isLoading
					? <Loading />
					: <Outlet />
			}
		</>
	);
};

export default PersistLogin;
