import React, {useState, useEffect} from 'react'
import logo from '../assets/logo rapid.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { root, searchLink } from '../routes'

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
            <NavLink to={root} className='w-full'>
                <img className='w-20' src={logo} alt="" />
            </NavLink>
            {/* menu */}
            <div className='w-full'>
                <NavLink>Catalogue</NavLink>
            </div>
            <form className='w-full' onSubmit={submit}>
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
