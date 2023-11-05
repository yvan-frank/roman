import React, {useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useSearchParams } from 'react-router-dom'
import MobileUser from "../../components/MobileUser.jsx";
import TopBar from "../../components/TopBar.jsx";

export default function SearchPage() {
  const [params] = useSearchParams()
  const query = params.get('q')
  const [openNav, setOpenNav] = useState(false);
  return (
    <div>
      <MobileUser openNav={openNav} setOpenNav={() => setOpenNav(!openNav)} />
      <TopBar />
      <Header open={openNav} setOpen={setOpenNav} />
        <div className='h-screen'>
          <div className='flex flex-col items-center mt-20'>
            <h2 className='text-3xl'>Recherche: </h2>
            <span className=' font-bold'>{query}</span>
          </div>
        </div>
      <Footer />
    </div>
  )
}
