import React, {useEffect} from 'react';
import GeneralHeader from "../../components/index.jsx";
import {NavLink} from "react-router-dom";
import {root} from "../../routes/index.js";
import logo from "../../assets/logo rapid.jpg";
import {useForm} from "react-hook-form";

const Modality = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		watch
	} = useForm()

	const getFile = watch('file')

	const handleChange = (e) => {
	    const file = e.target.files
	    console.log("file", file)
	}

	const submit = (data) => {
		console.log(data)
	}
	return (
		<>
			<div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500
			bg-[url('https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
			bg-no-repeat bg-cover">
				<div className="absolute bg-black opacity-60 inset-0 z-0"></div>
				<div className="sm:max-w-lg w-full p-5 bg-white rounded-xl z-10">
					<div className="text-center">
						<h2 className="mt-5 text-xl font-bold text-gray-900">
							Vous téléchargez votre livre, nous l'étudions ,  s'il est accepté nous le publions et le mettons en vente sur le site
						</h2>
					</div>
					<form className="mt-8 space-y-3" onSubmit={handleSubmit(submit)}>
						<div className="grid grid-cols-1">
							<label className="text-sm font-bold text-gray-500 tracking-wide">Email</label>
							<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
						focus:shadow-outline" type="email" placeholder="Adresse électronique"
							       {...register('email', {
								       required: true,
								       pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
							       })}
							/>
							<p className="text-red-500 text-xs italic">{errors?.email?.type === 'required' && "Requis"}</p>
							<p className="text-red-500 text-xs italic">{errors?.email?.type === 'pattern' && "Entrer une adresse mail valide"}</p>

						</div>
						<div className="grid grid-cols-1 space-y-2">
							<label className="text-sm font-bold text-gray-500 tracking-wide">Joindre un fichier</label>
							<div className="flex items-center justify-center w-full">
								<label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
									<div className="h-full w-full text-center flex flex-col items-center justify-center ">
										<div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
											<img className="has-mask h-24 object-center" src={logo} alt="Rabipek Novel" />
										</div>
										<p className="pointer-none text-gray-500 "><span className="text-sm">Glissez et déposez</span> vos fichiers ici <br /> ou <span  className="text-blue-600 hover:underline">selectionnez un fichier </span>
										à partir de votre ordinateur</p>
									</div>
									<input type="file" className="hidden" accept=".pdf,.docx"
										 onChange={handleChange}
										 {...register('file', { required: true })}/>
								</label>
							</div>
							<p className="text-red-500 text-xs italic">{errors?.file?.type === 'required' && "Requis"}</p>
						</div>
						<p className="text-sm text-gray-300">
							<span>Type de fichier: doc,pdf</span>
						</p>
						<div>
							<button  className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
								Téléverser
							</button>
							<NavLink to={root}>Retour à l'accueil</NavLink>
						</div>
					</form>
				</div>
			</div>

		</>
	);
};

export default Modality;
