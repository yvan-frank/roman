import React, {useState, useEffect} from 'react'
import logo from '../assets/logo rapid.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { root, searchLink } from '../routes'
import playLogo from "../assets/playstore.png";
import appleLogo from "../assets/apple.png";

export default function Header() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const navigate = useNavigate()

    const [scrollY, setScrollY] = useState(0);

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
    <div className={`w-full top-0 py-2 bg-white ${scrollY > 400 && 'sticky transition duration-500 shadow-xl'}`}>
        <div className='flex items-center justify-between px-8'>
            <NavLink to={root} className='w-full lg:w-96'>
                <img className='w-20' src={logo} alt="" />
            </NavLink>
            {/* menu */}
            <div className='w-full'>

                <div className='flex flex-row items-center justify-between'>
                    <div className={`hidden lg:flex justify-between items-center flex-row w-1/2 mr-5 ${scrollY > 400 && 'w-full'}`}>
                        <NavLink to={root}>Accueil</NavLink>
                        <NavLink>Catalogue</NavLink>
                        <NavLink>Sélections</NavLink>
                    </div>

                    {
                        scrollY > 400 && (
                            <div className='flex mr-5'>
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
                        )
                    }

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
        </div>
    </div>
  )
}
