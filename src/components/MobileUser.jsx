import React, {useEffect, useRef} from 'react';
import {NavLink} from "react-router-dom";
import {catalogueLink, libraryLInk, loginLink, profileLink, root} from "../routes/index.js";
import {AiOutlineClose} from "react-icons/ai";
import {BsBookHalf} from "react-icons/bs";
import {BiSolidUser} from "react-icons/bi";
import {FiLogOut} from "react-icons/fi";
import useAuth from "../hooks/useAuth.js";

const MobileUser = ({openNav, setOpenNav}) => {
	const {auth, setAuth} = useAuth()

	const ref = useRef(null);
	//console.log(auth)
	const logout = () => {
		setAuth({})
		console.log(auth)
		console.log("logout")
		localStorage.removeItem('googleToken')
		window.location.reload()
	}
	useEffect(() => {
		if (ref.current) {
			ref.current.addEventListener("click", () => {
				// Do something
				setOpenNav(!openNav)
			});
		}
	}, []);
	return (
		<>
			<div
				className={`fixed inset-0 bg-slate bg-opacity-70 z-auto lg:hidden transition-opacity duration-200 min-h-screen
				${openNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
				aria-hidden="true"
				ref={ref}
			></div>
			<div
				className={`flex flex-col fixed z-50 left-0 top-0 lg:hidden shrink-0 bg-white p-4
				transition-all duration-200 ease-in-out h-full ${
					openNav ? 'translate-x-0 w-72' : '-translate-x-96'
				}`}
			>
				<button
					onClick={() => setOpenNav(!openNav)}
					className='flex justify-end border-b border-slate/20 p-2'>
					<AiOutlineClose
						className='w-8 h-8 rounded-full border p-2 cursor-pointer hover:bg-slate/10'/>
				</button>
				<div className={''}>
					<div className='p-2 text-lg  flex flex-col'>
						<NavLink className='my-2 hover:text-purple' to={root}>Accueil</NavLink>
						<NavLink to={catalogueLink} className='my-2 hover:text-purple'>Catalogue</NavLink>
						<button className='my-2 text-start hover:text-purple'>Sélections</button>
					</div>
					<div className=' p-2 text-lg bg-slate/10'>
						{
							auth?.googleToken?.length > 0 ?
								<>
									<NavLink to={libraryLInk} className='px-2 inline-flex items-center my-2'>
										<BsBookHalf className='w-8'/>
										<span>Ma bibliothèque</span>
									</NavLink>
									<NavLink to={profileLink} className='px-2 inline-flex items-center my-2'>
										<BiSolidUser className='w-8'/>
										<span>Mon compte</span>
									</NavLink>
									<button
										onClick={logout}
										className='px-2  inline-flex items-center my-2'>
										<FiLogOut className='w-8'/>
										<span>Se déconnecter</span>
									</button>
								</>
								:
								<div>
									<NavLink to={loginLink} className='px-2  my-2'>
										Se connecter
									</NavLink>
								</div>
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileUser;
