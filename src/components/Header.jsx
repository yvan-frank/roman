import React, {useState, useEffect} from 'react'
import logo from '../assets/logo rapid.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { root, searchLink } from '../routes'
import playLogo from "../assets/playstore.png";
import appleLogo from "../assets/apple.png";
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import useAuth from "../hooks/useAuth.js";

export default function Header({open, setOpen}) {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const navigate = useNavigate()

    const [scrollY, setScrollY] = useState(0);

    const {setAuth} = useAuth()

    //logout time
    const [logoutTimeout, setLogoutTimeout] = useState(600000);

    const isUserActive = () => {
        // Vérifie si l'utilisateur a cliqué sur un élément
        const lastClick = document.querySelector(".last-click")
        //const lastClick = useRef(null);
        return lastClick?.lastClick && Date.now() - lastClick.lastClick < 5000;
    };

    const logout = () => {
        setAuth({})
        //console.log(auth)
        console.log("logout inactivity")
        localStorage.removeItem('googleToken')
        window.location.reload()
    }

    useEffect(() => {
        // Déconnecte l'utilisateur si l'utilisateur est inactif
        const intervalId = setInterval(() => {
            if (!isUserActive()) {
                logout();
            }
        }, logoutTimeout);

        // Annule le rappel si l'utilisateur est actif
        document.addEventListener("useractivity", () => {
            clearTimeout(intervalId);
        });

        return () => {
            // Annule le rappel lorsque le composant est décompensé
            clearTimeout(intervalId);
        };
    }, [logoutTimeout]);




    // Écoutez l'événement scroll
    window.addEventListener("scroll", () => {
      // Obtenez la position de défilement verticale de la fenêtre
      setScrollY(window.scrollY);
    });

    const submit = (e) => {
        e.preventDefault()
        const uri = encodeURIComponent(query)
        navigate(`${searchLink}?q=` + query.replace(" ", "+"))
        if(query === '' || query === null) navigate(searchLink)
        console.log(scrollY);
    }
    


  return (
    <>
        <div className='flex lg:hidden justify-center items-center bg-white'>
            <NavLink to={root}>
                <img className='w-32 h-32' src={logo} alt="Rabipek Novel" />
            </NavLink>
        </div>
        <div className={`w-full top-0 py-2 bg-white z-40 ${scrollY > 400 && 'sticky transition duration-500 shadow-xl'}`}>
            <div className='flex items-center justify-between px-8'>
                <NavLink to={root} className='w-full lg:w-96 hidden lg:block'>
                    <img className='w-20' src={logo} alt="" />
                </NavLink>
                <form className='w-full inline-flex items-center relative lg:hidden' onSubmit={submit}>
                    <AiOutlineSearch className='absolute left-0 h-6 w-6' />
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        type="text"
                        placeholder='Rechercher un livre'
                        className='pl-8 border-b p-3 bg-white outline-none '
                    />

                </form>
                {/* menu */}
                <div className='w-full'>

                    <div className='flex flex-row items-center justify-between'>
                        <div className={`hidden lg:flex justify-between items-center flex-row w-1/2 mr-5 ${scrollY > 400 && 'w-full'}`}>
                            <NavLink className='mx-3' to={root}>Accueil</NavLink>
                            <NavLink className='mx-3'>Catalogue</NavLink>
                            <NavLink className='mx-3'>Sélections</NavLink>
                        </div>

                        <div className={` mr-5 ${scrollY > 400 ? 'flex' : 'hidden'}`}>
                            <div className='flex p-1 w-[7.5rem] bg-black cursor-pointer items-center rounded text-white/80'>
                                <div className='mr-1'>
                                    <img className='w-6' src={playLogo} alt="" />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[0.6rem] -tracking-wider uppercase'>disponible sur</span>
                                    <span className=' font-bold text-sm'>Google Play</span>
                                </div>
                            </div>
                            <div className='flex p-1 w-[7.5rem] bg-black cursor-pointer items-center rounded text-white/80 ml-2'>
                                <div className='mr-1'>
                                    <img className='w-6' src={appleLogo} alt="" />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[0.6rem] -tracking-wider'>Télécharger dans</span>
                                    <span className=' font-bold text-sm'>l'App Store</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <form className='w-full hidden lg:block' onSubmit={submit}>
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        type="text"
                        placeholder='Rechercher un livre'
                        className=' w-full border p-3 rounded-full'
                    />
                </form>
                <div className='block lg:hidden'>
                    {
                        open ? <AiOutlineClose className='w-10 h-10 text-purple/20' />
                            :
                            <button
                                onClick={() => setOpen(!open)}
                                className='hover:text-purple duration-150 transition'
                            >
                                <AiOutlineMenu className='w-10 h-10 ' />
                            </button>
                    }
                </div>
            </div>
        </div>
    </>
  )
}
