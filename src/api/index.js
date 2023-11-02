// create a function to manage call API
import axios from "axios";

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