import {logoutUser} from "../../api/index.js";
import useAuth from "../../hooks/useAuth.js";

export const logout = () => {
	const {googleToken } = useAuth
	const result = logoutUser(googleToken)
}