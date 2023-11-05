import React, {useState} from 'react'
import TopBar from '../../components/TopBar'
import Header from '../../components/Header'
import MobileUser from "../../components/MobileUser.jsx";
import Footer from "../../components/Footer.jsx";

export default function Library() {
	const [openNav, setOpenNav] = useState(false);
  return (
	<>
		<MobileUser openNav={openNav} setOpenNav={() => setOpenNav(!openNav)} />
		<TopBar />
		<Header open={openNav} setOpen={setOpenNav} />
		<div className='h-screen flex items-center justify-center'>
			<h1 className='font-bold text-2xl'>Votre bibliothèques est vide</h1>
		</div>

		<Footer />
	</>
  )
}
