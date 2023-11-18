import React, {useEffect, useState} from 'react';
import TopBar from "../../components/TopBar.jsx";
import Header from "../../components/Header.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import logoGoogle from "../../assets/google.png"
import {loginLink, profileLink, root, signupLink} from "../../routes/index.js";
import {jwtDecode} from "jwt-decode";
import {clientID, fetchRegister, loginUser} from "../../api/index.js";
import useAuth from "../../hooks/useAuth.js";
import Loading from "../../components/Loading.jsx";
import {useForm} from "react-hook-form";
import Head from "../../components/Head.jsx";

const LoginPage = () => {

	const navigate = useNavigate()
	const {setAuth} = useAuth()
	const [loading, setLoading] = useState(false);

	const {
		handleSubmit,
		formState: {errors},
		register
	} = useForm()

	const [message, setMessage] = useState('');
	const submit = async (data) => {
		setLoading(true)
		const result = await loginUser(data)
		console.log(result)
		if (result) {
			//console.log(result.data.status)
			const status = result.status
			if (status === 400) {
				setMessage(result.data.message)
				console.log(result.data.message)
				setLoading(false)
			}else {
				navigate(profileLink)
				setAuth({googleToken: result.data.api_token, userDecode: result.data})
			}

		}
	}

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
			<Head
				pageTitle='Login'
				title='Se connecter | Rabipek Novel'
				description='Connectez-vous sur Rabipek Novel et commencez à lire'
				url={window.location.href}
			/>
			<div className='flex justify-center items-center flex-col min-h-screen'>
				<div>
					<h3 className='font-bold text-6xl text-purple'>Rabipek Novel</h3>
					<p className='text-center mt-5'>Voyage dans un monde de passion enchantée</p>
				</div>
				<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 mt-10"
					onSubmit={handleSubmit(submit)}
				>
					{
						message && <div className='text-red-500 bg-red-500/10 rounded p-2 text-sm mb-2'>{message}</div>
					}
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
							Adresse électronique
						</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
						focus:shadow-outline" id="email" type="email" placeholder="Adresse électronique"
						       {...register('email', {
							       required: true,
							       pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
						       })}
						/>
						<p className="text-red-500 text-xs italic">{errors?.email?.type === 'required' && "Requis"}</p>
						<p className="text-red-500 text-xs italic">{errors?.email?.type === 'pattern' && "Entrer une adresse mail valide"}</p>

					</div>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
							Mot de passe
						</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
						focus:shadow-outline" id="password" type="password" placeholder="Mot de passe"
						       {...register('password', {
							       required: true
						       })}
						/>
						<p className="text-red-500 text-xs italic">{errors?.password?.type === 'required' && "Requis"}</p>
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
