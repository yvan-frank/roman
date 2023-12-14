import React, {useState, useEffect,Fragment} from 'react'
import logo from '../assets/logo rapid.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import {catalogueLink, root, searchLink} from '../routes'
import playLogo from "../assets/playstore.png";
import appleLogo from "../assets/apple.png";
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import useAuth from "../hooks/useAuth.js";
import {BsFillCartCheckFill} from "react-icons/bs";
import {fetchCategoryList} from "../api/index.js";

import { Menu, Transition } from '@headlessui/react'


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
        getCate()
    }, []);

    const getCate = async () => {
      const res = await fetchCategoryList(1)
        if (res) {
            //console.log(res.data)
            setResults(res.data)
        }
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
            <div className='flex items-center justify-between px-2 md:px-8 w-full'>
                <NavLink to={root} className='w-full lg:w-96 hidden lg:block'>
                    <img className='w-20' src={logo} alt="" />
                </NavLink>
                <form className='w-full bg-slate flex items-center relative lg:hidden' onSubmit={submit}>
                    <AiOutlineSearch className='absolute left-0 h-6 w-6' />
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        type="text"
                        placeholder='Rechercher un livre'
                        className='pl-8 border-b p-3 bg-white outline-none w-full'
                    />

                </form>
                {/* menu */}
                <div className='w-full'>

                    <div className='flex flex-row items-center justify-between'>
                        <div className={`hidden lg:flex justify-between items-center flex-row w-1/2 mr-5 ${scrollY > 400 && 'w-full'}`}>
                            <NavLink className='mx-3' to={root}>Accueil</NavLink>
                            <NavLink to={catalogueLink} className='mx-3'>Catalogue</NavLink>
                            <Menu as="div" className="relative w-full">
                                <div>
                                    <Menu.Button className="w-full">
                                        Sélection
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute p-5 w-[30rem] left-0 right-0 rounded text-slate z-10 bg-white shadow-2xl
                                    flex flex-wrap">
                                        {
                                            results && results.map((item, i) => {
                                                return (
                                                    <button key={i} className='list-none p-1.5 rounded-full border-slate border m-1
                                                    hover:bg-slate hover:text-white'>{item.name}</button>
                                                )
                                            })
                                        }
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>

                        <div className={`hidden mr-5 ${scrollY > 400 ? 'hidden lg:flex' : 'hidden'}`}>
                            <div className='flex p-1 w-[7.5rem] bg-black cursor-pointer items-center rounded text-white/80'>
                                <div className='mr-1'>
                                    <img className='w-6' src={playLogo} alt="" />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[0.6rem] -tracking-wider uppercase'>disponible sur</span>
                                    <span className=' font-bold text-xs'>Google Play</span>
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
                <button>
                    <BsFillCartCheckFill className='lg:w-10 lg:h-10 md:w-8 md:h-8 w-5 h-5 mb-1 mx-5 border border-purple text-purple rounded p-0.5 md:p-1
                    hover:bg-purple hover:text-white transition duration-150' />
                </button>
                <div className='block lg:hidden'>
                    {
                        open ? <AiOutlineClose className='lg:w-10 lg:h-10 md:w-8 md:h-8 w-5 h-5 text-purple/20' />
                            :
                            <button
                                onClick={() => setOpen(!open)}
                                className='hover:text-purple duration-150 transition'
                            >
                                <AiOutlineMenu className='lg:w-10 lg:h-10 md:w-8 md:h-8 w-5 h-5' />
                            </button>
                    }
                </div>
            </div>
        </div>
    </>
  )
}
