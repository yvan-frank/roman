// create a function to manage call API
import axios from "axios";

export const clientID =  '745116190150-p92t33q3rvmhepvmb251p7nula1g7gif.apps.googleusercontent.com';
export const secretID = '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';

export const googleLocalToken = localStorage.getItem('googleToken');

/**
 * Makes an API call to the specified endpoint with the given parameters.
 *
 * @param {string} endpoint - The URL of the API endpoint.
 * @param {object} params - Optional parameters to include in the API call.
 * @return {object} The data returned from the API call.
 */
const apiCall = async (endpoint, params) => {
	const options = {
		method: 'GET',
		url: endpoint,
		params: params? params: {}
	}
	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.log(error);
		return {}
	}
}

export const fetchBook = async (id) => {
	return await apiCall(`https://www.googleapis.com/books/v1/volumes/${id}`);
}