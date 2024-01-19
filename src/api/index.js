// create a function to manage call API
import axios from "axios";
import gif from "../assets/Rabipek Novel.gif"
//export image
export const placeHolderImage = gif
export const clientID =  '745116190150-p92t33q3rvmhepvmb251p7nula1g7gif.apps.googleusercontent.com';
export const secretID = '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';

export const googleLocalToken = localStorage.getItem('googleToken');

//development
//export const baseUrl = '/api'

//export const baseUrl = 'http://localhost:8000/api'

//production
export const baseUrl = 'https://prod.rabipeknovel.com/api'

//user endpoints
const loginEndpoint = `${baseUrl}/login`
const logoutEndpoint = `${baseUrl}/logout`
const registerEndpoint = `${baseUrl}/register`
const updateUserEndpoint = `${baseUrl}/save-user-profile`
const forgetPasswordEndpoint = `${baseUrl}/forgot_password`
const changePasswordEndpoint = `${baseUrl}/change-password`
const updatePasswordEndpoint = `${baseUrl}/updatePassword`
const resendOTPEndpoint = `${baseUrl}/resend-otp`



// book endpoints
const bookListEndpoint = `${baseUrl}/book-list?page=1`
const bookDetailEndpoint = `${baseUrl}/book-detail`
const categoryEndpoint = `${baseUrl}/sub-category-list`
const addBookRatingEndpoint = `${baseUrl}/add-book-rating`
const bookRatingEndpoint = `${baseUrl}/book-rating-list`
const deleteBookRatingEndpoint = `${baseUrl}/delete-book-rating`
const addRemoveWishEndpoint = `${baseUrl}/add-remove-wishlist-book`
const authorEndpoint = `${baseUrl}/author-list`
const authorBookListEndpoint = `${baseUrl}/author_book_list`

//comment
const giveFeedbackEndpoint = `${baseUrl}/add-feedback`

// cart endpoints
const addToCartEndpoint = `${baseUrl}/add-to-cart`
const removeFromCartEndpoint = `${baseUrl}/remove-from-cart`
const myCartListEndpoint = `${baseUrl}/user-cart`
const userWishListEndpoint = `${baseUrl}/user-wishlist-book`

// other endpoints
const searchBookEndpoint = `${baseUrl}/book-detail`



/**
 * Makes an API call to the specified endpoint.
 *
 * @param {string} endpoint - The URL endpoint to make the API call to.
 * @param {string} method - The HTTP method to use for the API call.
 * @param {object} data - The data to send in the request body.
 * @return {Promise} A Promise that resolves to the response data or an empty object if there is an error.
 */
const apiCall = async (endpoint, method, data) => {
	const options = {
		method: method,
		url: endpoint,
		data: data? data: {},
		// params: params? params: {},
		//headers: headers? headers: {}

	}
	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.log(error);
		return error.response
	}
}

const apiCallAuth = async (endpoint, method, data, authorization) => {
	const options = {
		method: method,
		url: endpoint,
		data: data? data: {},
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${authorization}`
		},

	}
	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		//console.log(error);
		return error.response
	}
}

//login
export const loginUser = async (data) => {
	return await apiCall(loginEndpoint, 'POST', data)
}
//* update user profile
export const updateUserProfile = async (data, authorization) => {
	return await apiCallAuth(updateUserEndpoint, 'POST', data, {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${authorization}`
	})
}

// update password
export const updatePassword = async (data, authorization) => {
	return await apiCall(updatePasswordEndpoint, 'POST', data)
}

// change password
export const changePassword = async (data, authorization) => {
	return await apiCall(changePasswordEndpoint, 'POST', data)
}

// reset password
export const forgetPassword = async (data) => {
	return await apiCall(forgetPasswordEndpoint, 'POST', data)
}
// resend otp
export const resendOTP = async (email) => {
	return await apiCall(resendOTPEndpoint, 'POST', {email: email})
}
//logout
export const logoutUser = async (authorization) => {
	return await apiCallAuth(logoutEndpoint, "POST", {})
}

// register user
export const fetchRegister = async (data) => {
	return await apiCall(registerEndpoint, "POST", data)
}

//fetch books
export const fetchBooks = async () => {
	return await apiCall(bookListEndpoint, 'GET', {});
}

export const fetchBookDetails = async (data) => {
	return await apiCall(bookDetailEndpoint, "POST", data)
}

export const fetchCategoryList = async (id) => {
	return apiCall(categoryEndpoint, "POST", {category_id: id})
}

// add to cart
export const fetchAddToCart = async (data,authorization) => {
	return await apiCallAuth(addToCartEndpoint, "POST", data, authorization)
}

export const removeFromCart = async (data, authorization) => {
	return await apiCallAuth(removeFromCartEndpoint, "POST", data, authorization)
}
export const fetchCartWishlist = async (authorization) => {
	return await apiCallAuth(myCartListEndpoint, "GET",{}, authorization)
}
export const fetchUserCartWishlist = async (authorization) => {
	return await apiCall(userWishListEndpoint, "GET", {})
}

export const fetchSearch = async (data) => {
	return await apiCall(searchBookEndpoint, "POST", data)
}

// add book rating
export const fetchAddBookRating = async (data, authorization) => {
	return await apiCallAuth(addBookRatingEndpoint, "POST", data, authorization)
}

// fetch book rating
export const fetchBookRating = async (data , authorization) => {
	return await apiCall(bookRatingEndpoint, "POST", data)
}

//delete book rating
export const fetchDeleteBookRating = async (data, authorization) => {
	return await apiCall(deleteBookRatingEndpoint, "POST", data)
}

// add book favorite
export const fetchAddRemoveWish = async (data, authorization) => {
	return await apiCall(addRemoveWishEndpoint, "POST", data)
}

// fetch author list
export const fetchAuthorList = async () => {
	return await apiCall(authorEndpoint, "GET")
}

// author book list
export const fetchAuthorBookList = async (data) => {
	return await apiCall(authorBookListEndpoint, "POST", data)
}

// give feedback
export const fetchGiveFeedback = async (data, authorization) => {
	return await apiCall(giveFeedbackEndpoint, "POST", data)
}