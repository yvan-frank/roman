import {createContext, useMemo, useState} from "react";

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
	const [auth, setAuth] = useState({googleToken: null});
	const providerValue = useMemo(() => ({auth, setAuth}), [auth, setAuth]);
	return(
		<AuthContext.Provider value={providerValue}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext;