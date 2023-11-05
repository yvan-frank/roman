import React from 'react'
import { NavLink } from 'react-router-dom'
import {libraryLInk, loginLink, profileLink} from "../routes/index.js";
import useAuth from "../hooks/useAuth.js";
import {BsBookHalf} from "react-icons/bs";
import {BiSolidUser} from "react-icons/bi";
import {FiLogOut} from "react-icons/fi";

export default function TopBar() {
    const {auth, setAuth} = useAuth()
    //console.log(auth)
    const logout = () => {
        setAuth({})
        //console.log(auth)
        //console.log("logout")
        localStorage.removeItem('googleToken')
        window.location.reload()
    }
  return (
    <div className='bg-purple p-3 hidden lg:block'>
        <div className='flex justify-end items-center'>
            {
                auth?.googleToken?.length > 0 ?
                <>
                    <NavLink to={libraryLInk} className='px-2 font-semibold text-white inline-flex items-center'>
                        <BsBookHalf className='w-8' />
                        <span>Ma bibliothèque</span>
                    </NavLink>
                    <NavLink to={profileLink} className='px-2 font-semibold text-white inline-flex items-center'>
                        <BiSolidUser className='w-8' />
                        <span>Mon compte</span>
                    </NavLink>
                    <button
                        onClick={logout}
                        className='px-2 font-semibold text-white inline-flex items-center'>
                        <FiLogOut className='w-8' />
                        <span>Se déconnecter</span>
                    </button>
                </>
                    :
                    <>
                        <NavLink to={loginLink} className='px-2 font-semibold text-white'>
                            Se connecter
                        </NavLink>
                    </>
            }
        </div>
    </div>
  )
}
