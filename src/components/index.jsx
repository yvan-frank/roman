import React, {useEffect, useState} from 'react';
import Header from "./Header.jsx";
import MobileUser from "./MobileUser.jsx";
import TopBar from "./TopBar.jsx";
import Footer from "./Footer.jsx";
import BreadCrumb from "./BreadCrumb.jsx";
import {useLocation} from "react-router-dom";

const GeneralHeader = ({children, title, isShow}) => {
	const {pathname} = useLocation()
	//const [title, setTitle] = useState('');
	useEffect(() => {
		// const documentTitle = document.title;
		// setTitle(documentTitle)
	}, [pathname]);
	const [openNav, setOpenNav] = useState(false);
	return (
		<div>
			<MobileUser openNav={openNav} setOpenNav={() => setOpenNav(!openNav)} />
			<TopBar />
			<Header open={openNav} setOpen={setOpenNav} />
			<BreadCrumb pageTitle={title} isShow={isShow}/>
			<div className='h-screen'>
				{children}
			</div>
		</div>
	);
};

export default GeneralHeader;
