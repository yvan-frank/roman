import React, {useEffect, useState} from 'react';
import TopBar from "../../components/TopBar.jsx";
import Header from "../../components/Header.jsx";
import {NavLink} from "react-router-dom";
import {BsThreeDotsVertical} from "react-icons/bs";
import {profileEditLink, userEditPasswordLink} from "../../routes/index.js";
import useAuth from "../../hooks/useAuth.js";
import {jwtDecode} from "jwt-decode";

const ProfilePage = () => {
	const [user, setUser] = useState({});
	const [open, setOpen] = useState(false);
	const {auth} = useAuth()
	useEffect(() => {
		let userDecode = jwtDecode(auth.googleToken)
		setUser(userDecode)
	}, []);

	return (
		<div>
			<TopBar />
			<Header />
			<div className='h-screen flex flex-col overflow-hidden px-5 lg:px-0'>
				<div className='flex justify-around items-center w-full mt-20'>
					<h1 className='font-bold lg:text-6xl'>Profil d'utilisateur</h1>
					<div className='p-3 rounded relative w-96'>
						<button
							onClick={() => setOpen(!open)}
							className='border uppercase border-yellow transition duration-300 text-yellow hover:bg-yellow p-2 px-6 rounded hover:text-white font-bold flex items-center'>
							<span>Actions</span>
							<BsThreeDotsVertical />
						</button>
						{
							open &&
							<div className='absolute left-0 bottom-auto p-3 shadow-lg flex flex-col bg-white z-10 transition-all duration-500 rounded'>
								<NavLink className='hover:text-purple duration-300 transition' to={profileEditLink}>Actualiser mon profile</NavLink>
								<NavLink className='hover:text-purple duration-300 transition' to={userEditPasswordLink}>Changer le mot de passe</NavLink>
								<NavLink className='hover:text-purple duration-300 transition' to={''}>Supprimer mon compte</NavLink>
							</div>
						}
					</div>
				</div>
				<div className='w-full max-w-7xl mx-auto mt-20'>
					<h3 className='border-b-2 border-purple/20 font-semibold pb-2'>Profile</h3>
					<div className='flex justify-center items-center'>
						<div className='grid grid-cols-2 gap-5 mt-10'>
							<div className='flex flex-col font-semibold'>
								<span>Courriel</span>
								<span>Je ne suis pas abonné à l'infolettre</span>
							</div>
							<div className='flex flex-col'>
								<span>{user?.email}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
