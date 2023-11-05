import React from 'react';
import {NavLink} from "react-router-dom";
import {libraryLInk, loginLink, profileLink, root} from "../routes/index.js";
import {AiOutlineClose} from "react-icons/ai";
import {BsBookHalf} from "react-icons/bs";
import {BiSolidUser} from "react-icons/bi";
import {FiLogOut} from "react-icons/fi";
import useAuth from "../hooks/useAuth.js";

const MobileUser = ({openNav, setOpenNav}) => {
	const {auth, setAuth} = useAuth()
	//console.log(auth)
	const logout = () => {
		setAuth({})
		console.log(auth)
		console.log("logout")
		localStorage.removeItem('googleToken')
		window.location.reload()
	}
	return (
		<>
			{
				openNav &&
				<div className=' bg-slate/20 inset-0 fixed z-50 transition-opacity duration-300'>
					<div className='w-64 md:w-96 bg-white h-full'>
						<div className='w-full flex flex-col relative justify-between h-full'>
							<button
								onClick={() => setOpenNav(!openNav)}
								className='flex justify-end border-b border-slate/20 p-2'>
								<AiOutlineClose className='w-8 h-8 rounded-full border p-2 cursor-pointer hover:bg-slate/10' />
							</button>
							<div className='p-2 text-lg h-3/4 flex flex-col overflow-y-auto scroll-smooth'>
								<NavLink className='my-2 hover:text-purple' to={root}>Accueil</NavLink>
								<NavLink className='my-2 hover:text-purple'>Catalogue</NavLink>
								<NavLink className='my-2 hover:text-purple'>Sélections</NavLink>
							</div>
							<div className='flex flex-col p-2 text-lg bg-slate/10'>
								{
									auth?.googleToken?.length > 0 ?
										<>
											<NavLink to={libraryLInk} className='px-2 inline-flex items-center my-2'>
												<BsBookHalf className='w-8' />
												<span>Ma bibliothèque</span>
											</NavLink>
											<NavLink to={profileLink} className='px-2 inline-flex items-center my-2'>
												<BiSolidUser className='w-8' />
												<span>Mon compte</span>
											</NavLink>
											<button
												onClick={logout}
												className='px-2  inline-flex items-center my-2'>
												<FiLogOut className='w-8' />
												<span>Se déconnecter</span>
											</button>
										</>
										:
										<>
											<NavLink to={loginLink} className='px-2  my-2'>
												Se connecter
											</NavLink>
										</>
								}
							</div>
						</div>
					</div>
				</div>
			}
		</>
	);
};

export default MobileUser;
