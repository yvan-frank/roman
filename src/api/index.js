// create a function to manage call API
import axios from "axios";
import gif from "../assets/Rabipek Novel.gif"
//export image
export const placeHolderImage = gif
export const clientID =  '745116190150-p92t33q3rvmhepvmb251p7nula1g7gif.apps.googleusercontent.com';
export const secretID = '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';

export const googleLocalToken = localStorage.getItem('googleToken');

const baseUrl = 'http://exemple/api'

//user endpoints
const loginEndpoint = `${baseUrl}/login`
const logoutEndpoint = `${baseUrl}/logout`
const registerEndpoint = `${baseUrl}/register`

// book endpoints
const bookListEndpoint = `${baseUrl}/book-list?page=1`
const bookDetailEndpoint = `${baseUrl}/book-detail`
const categoryEndpoint = `${baseUrl}/category-list`

// cart endpoints
const addToCartEndpoint = `${baseUrl}/add-to-cart`
const removeFromCartEndpoint = `${baseUrl}/remove-from-cart`
const myCartListEndpoint = `${baseUrl}/user-cart`
const userWishListEndpoint = `${baseUrl}/user-wishlist-book`

// other endpoints
const searchBookEndpoint = `${baseUrl}/book-detail`




const apiCall = async (endpoint, method, data, authorization) => {
	const options = {
		method: method,
		url: endpoint,
		data: data? data: {},
		// params: params? params: {},
		headers: {
			'Content-Type': 'application/json',
			Authorization: authorization
		}
	}
	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.log(error);
		return {}
	}
}

//login
export const loginUser = async (data) => {
	return await apiCall(loginEndpoint, 'POST', data)
}

//logout
export const logoutUser = async (authorization) => {
	return await apiCall(logoutEndpoint, "POST", {}, authorization)
}

// register user
export const fetchRegister = async (data) => {
	return await apiCall(registerEndpoint, "POST", data)
}

//fetch books
export const fetchBooks = async () => {
	return await apiCall(bookListEndpoint, 'GET');
}

export const fetchBookDetails = async (data) => {
	return await apiCall(bookDetailEndpoint, "POST", data)
}

export const fetchCategoryList = async () => {
	return apiCall(categoryEndpoint, "GET")
}

// add to cart
export const fetchAddToCart = async (data, authorization) => {
	return await apiCall(addToCartEndpoint, "POST", data, authorization)
}

export const removeFromCart = async (data, authorization) => {
	return await apiCall(removeFromCartEndpoint, "POST", data, authorization)
}
export const fetchCartWishlist = async () => {
	return await apiCall(myCartListEndpoint, "GET")
}
export const fetchUserCartWishlist = async (authorization) => {
	return await apiCall(userWishListEndpoint, "GET", authorization)
}

export const fetchSearch = async (data) => {
	return await apiCall(searchBookEndpoint, "POST", data)
}