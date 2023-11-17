import React, {useEffect} from 'react';
import GeneralHeader from "../../components/index.jsx";
import Head from "../../components/Head.jsx";
import {useLocation} from "react-router-dom";
import Footer from "../../components/Footer.jsx";

const AboutPage = () => {
	useEffect(() => {
		document.title = "Qui sommes-nous ?";
	}, []);
	return (
		<div>
			<Head
				title='Qui sommes-nous | Rabipek Novel'
				description='Rabipek Novel est une plateforme de lecture de roman'
				url={window.location.href}
			/>
			<GeneralHeader title='A propos de nous'>
				<div className='flex flex-col max-w-6xl mx-auto mt-20'>
					<h1 className='text-4xl font-semibold'>Qui sommes-nous ?</h1>
				</div>

			</GeneralHeader>
			<Footer />
		</div>
	);
};

export default AboutPage;
