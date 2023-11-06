import React from 'react'
import appleLogo from '../assets/apple.png'
import playLogo from '../assets/playstore.png'
import {
    aboutLink,
    cartLink,
    cgvLink,
    contactLink,
    mentionLink,
    politicLink,
    profileLink,
    root
} from "../routes/index.js";
import logo from "../assets/logo rapid.jpg";
import {NavLink} from "react-router-dom";

export default function Footer() {
  return (
    <footer className='border-t border-slate/20 mt-20 bg-slate text-white'>
        <div className='max-w-4xl mx-auto p-5'>
            <div className='grid lg:grid-cols-3 gap-5'>
                <div className='flex flex-col bg-slate/5 p-4'>
                    <NavLink to={root}>
                        <img className='w-32 h-32' src={logo} alt="Rabipek Novel" />
                    </NavLink>
                </div>

                <div className='flex flex-col'>
                    <NavLink
                        className='my-1 hover:bg-purple/5 p-2 text-sm'
                        to={aboutLink}
                    >
                        Qui sommes-nous ?
                    </NavLink>
                    <NavLink
                        className='my-1 hover:bg-purple/5 p-2 text-sm'
                        to={mentionLink}
                    >
                        Mentions légales
                    </NavLink>
                    <NavLink
                        className='my-1 hover:bg-purple/5 p-2 text-sm'
                        to={politicLink}
                    >
                        Politique de confidentialité
                    </NavLink>
                    <NavLink
                        className='my-1 hover:bg-purple/5 p-2 text-sm'
                        to={cgvLink}
                    >
                        Conditions générales de vente
                    </NavLink>
                    <NavLink
                        className='my-1 hover:bg-purple/5 p-2 text-sm'
                        to={contactLink}
                    >
                        Contactez-nous
                    </NavLink>
                </div>
                <div className='flex flex-col'>
                    <NavLink
                        className='my-1 hover:bg-purple/5 p-2 text-sm'
                        to={profileLink}
                    >
                        Mon compte
                    </NavLink>
                    <NavLink
                        className='my-1 hover:bg-purple/5 p-2 text-sm'
                        to={cartLink}
                    >
                       Panier
                    </NavLink>
                </div>
            </div>
        </div>
    </footer>
  )
}
