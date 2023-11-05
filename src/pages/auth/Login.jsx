import React, {useEffect, useState} from 'react';
import TopBar from "../../components/TopBar.jsx";
import Header from "../../components/Header.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import logoGoogle from "../../assets/google.png"
import {profileLink, root, signupLink} from "../../routes/index.js";
import {jwtDecode} from "jwt-decode";
import {clientID} from "../../api/index.js";
import useAuth from "../../hooks/useAuth.js";
import Loading from "../../components/Loading.jsx";

const LoginPage = () => {

	const navigate = useNavigate()
	const {setAuth} = useAuth()
	const [loading, setLoading] = useState(false);

	const handleCbResponse = (response) => {
		setLoading(true)
		//console.log(response)
		//console.log("encoded JWT ID Token : ", response.credential);
		let userObject = jwtDecode(response.credential)
		setAuth({googleToken: response.credential, userDecode: userObject})
		//console.log(userObject)
		localStorage.setItem('googleToken', response.credential)
		setTimeout(() => {
			navigate(profileLink)
		}, 3000)
	}

	useEffect(() => {
		google.accounts.id.initialize({
			client_id: clientID,
			auto_sign_in: true,
			callback: handleCbResponse
		})
		google.accounts.id.renderButton(
			document.getElementById("buttonDiv"),
			{theme: 'outline', size:'large'}
		)


	}, []);
	return (
		<div>
			{/*<TopBar />*/}
			{/*<Header />*/}
			<div className='flex justify-center items-center flex-col min-h-screen'>
				<div>
					<h3 className='font-bold text-6xl text-purple'>Rabipek Novel</h3>
					<p className='text-center mt-5'>Voyage dans un monde de passion enchantée</p>
				</div>
				<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 mt-10">
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
							Adresse électronique
						</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
						focus:shadow-outline" id="username" type="text" placeholder="Adresse électronique" />
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
							Mot de passe
						</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
						focus:shadow-outline" id="password" type="password" placeholder="******************" />
							{/*<p className="text-red-500 text-xs italic">Please choose a password.</p>*/}
						<p className='text-sm'>Mot de passe oublié ?</p>
					</div>
					<div className="flex items-center justify-between">
						<NavLink to={signupLink}
							className='text-purple font-semibold hover:text-yellow duration-300 transition'
						>Créer un compte</NavLink>
						<button
							className='p-2 px-5 bg-yellow/80 hover:bg-yellow duration-300 transition text-white font-semibold'
						>
							Connexion
						</button>
					</div>
					<div className='flex flex-col mt-5'>
						<div className='flex justify-between items-center'>
							<div className='border w-full border-slate/50' />
							<span className='mx-5'>ou</span>
							<div className='border w-full border-slate/50' />
						</div>
						{
							loading &&
							<div className='flex justify-center'>
								<Loading />
							</div>
						}
						{/*<button*/}
						{/*	className='w-full p-2 border border-slate/50 rounded flex items-center justify-center mt-5 hover:bg-slate/10 duration-300 transition'*/}
						{/*>*/}
						{/*	<img className='w-7' src={logoGoogle} alt=""/>*/}
						{/*	<span>Vous connecter avec Google</span>*/}
						{/*</button>*/}
						<div id='buttonDiv' className='mt-5 w-full flex justify-center items-center'></div>
					</div>
				</form>
			</div>

		</div>
	);
};

export default LoginPage;
