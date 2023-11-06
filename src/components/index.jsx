import React, {useEffect, useState} from 'react';
import Header from "./Header.jsx";
import MobileUser from "./MobileUser.jsx";
import TopBar from "./TopBar.jsx";
import Footer from "./Footer.jsx";
import BreadCrumb from "./BreadCrumb.jsx";
import {useLocation} from "react-router-dom";

const GeneralHeader = ({children}) => {
	const {pathname} = useLocation()
	const [title, setTitle] = useState('');
	useEffect(() => {
		const documentTitle = document.title;
		setTitle(documentTitle)
	}, [pathname]);
	const [openNav, setOpenNav] = useState(false);
	return (
		<>
			<MobileUser openNav={openNav} setOpenNav={() => setOpenNav(!openNav)} />
			<TopBar />
			<Header open={openNav} setOpen={setOpenNav} />
			<BreadCrumb pageTitle={title}/>
			{children}
			<Footer />
		</>
	);
};

export default GeneralHeader;
