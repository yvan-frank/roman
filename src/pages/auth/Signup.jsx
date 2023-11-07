import React, {useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {profileLink, root, signupLink} from "../../routes/index.js";
import logoGoogle from "../../assets/google.png";
import {clientID, fetchRegister} from "../../api/index.js";
import {jwtDecode} from "jwt-decode";
import auth from "../../hooks/auth.jsx";
import useAuth from "../../hooks/useAuth.js";
import {useForm} from "react-hook-form";
import Head from "../../components/Head.jsx";

const SignupPage = () => {

	const {auth, setAuth} = useAuth()
	const navigate = useNavigate()
	const {
		handleSubmit,
		formState: {errors},
		register,
		watch
	} = useForm()

	const password = watch('password')
	//console.log(password)
	const handleCbResponse = (response) => {
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

	const submit = async (data) => {
		console.log(data)
		const result = await fetchRegister(data)
		console.log(result)
	}

	return (
		<div>
			<Head
				pageTitle='Login'
				title='Inscrivez-vous | Rabipek Novel'
				description='Inscrivez-vous  sur Rabipek Novel et commencez à lire'
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
					<div className="mb-2">
						{/*<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">*/}
						{/*	Adresse électronique*/}
						{/*</label>*/}
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
						focus:shadow-outline" id="username" type="text" placeholder="Pseudo"
						       {...register('username', {
								   required: true
						       })}
						/>
						<p className="text-red-500 text-xs italic">{errors?.username?.type === 'required' && "Requis"}</p>
					</div>
					<div className="mb-2">
						{/*<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">*/}
						{/*	Adresse électronique*/}
						{/*</label>*/}
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
						focus:shadow-outline" id="name" type="text" placeholder="Nom"
						       {...register('name', {
								   required: true
						       })}
						/>
						<p className="text-red-500 text-xs italic">{errors?.name?.type === 'required' && "Requis"}</p>
					</div>
					<div className="mb-2">
						{/*<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">*/}
						{/*	Adresse électronique*/}
						{/*</label>*/}
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
					<div className="mb-2">
						{/*<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">*/}
						{/*	Mot de passe*/}
						{/*</label>*/}
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
						focus:shadow-outline"  type="password" placeholder="Mot de passe"
						       {...register('password', {
								   required: true
						       })}
						/>
						<p className="text-red-500 text-xs italic">{errors?.password?.type === 'required' && "Requis"}</p>

					</div>
					<div className="mb-2">
						{/*<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">*/}
						{/*	Confirmer votre mot de passe*/}
						{/*</label>*/}
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
						focus:shadow-outline" type="password" placeholder="Mot de passe"
						       {...register('cPassword', {
								   required: true,
							       validate: (val) => {
									   if (val !== password){
										   return 'Les mots de passe ne sont pas identiques'
									   }
							       }
						       })}
						/>
						<p className="text-red-500 text-xs italic">{errors?.cPassword?.type === "validate" && errors?.cPassword?.message}</p>
						<p className="text-red-500 text-xs italic">{errors?.cPassword?.type === 'required' && "Requis"}</p>
					</div>
					<div className="mb-2">
						{/*<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">*/}
						{/*	Mot de passe*/}
						{/*</label>*/}
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
						focus:shadow-outline" id="telephone" type="tel" placeholder="Téléphone"
						       {...register('contact_number', {
							       required: true
						       })}
						/>
						<p className="text-red-500 text-xs italic">{errors?.contact_number?.type === 'required' && "Requis"}</p>

					</div>
					<div className="flex items-center justify-between mt-5">
						<NavLink to={root}
						         className='text-purple font-semibold hover:text-yellow duration-300 transition'
						>Annuler</NavLink>
						<button

							className='p-2 px-5 bg-yellow/80 hover:bg-yellow duration-300 transition text-white font-semibold'
						>
							Créer un compte
						</button>

					</div>
					<div className='flex flex-col mt-5'>
						<div className='flex justify-between items-center'>
							<div className='border w-full border-slate/50' />
							<span className='mx-5'>ou</span>
							<div className='border w-full border-slate/50' />
						</div>
						<div id='buttonDiv' className='mt-5 w-full flex justify-center items-center'></div>
						{/*<button*/}
						{/*	className='w-full p-2 border border-slate/50 rounded flex items-center justify-center mt-5 hover:bg-slate/10 duration-300 transition'*/}
						{/*>*/}
						{/*	<img className='w-7' src={logoGoogle} alt=""/>*/}
						{/*	<span>Vous connecter avec Google</span>*/}
						{/*</button>*/}

					</div>
				</form>
			</div>
		</div>
	);
};

export default SignupPage;
