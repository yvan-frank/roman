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
					<p>
						Nous sommes une bibliothèque en ligne qui propose une large sélection de romans à lire et à acheter. Notre objectif est de rendre la littérature accessible à tous, quel que soit leur budget ou leur localisation.

						Nous proposons une variété de romans, des classiques aux nouveautés. Nous avons des romans pour tous les goûts, des romans d'amour aux romans d'aventure, des romans historiques aux romans de science-fiction.

						Nos romans sont disponibles en format numérique et en format papier. Vous pouvez les lire sur votre ordinateur, votre tablette ou votre smartphone. Vous pouvez également les commander et les recevoir chez vous.

						Nous sommes fiers de proposer une sélection de romans de qualité. Nous travaillons avec des éditeurs de renom pour vous offrir les meilleurs romans du moment.
					</p>
				</div>

			</GeneralHeader>
			<Footer />
		</div>
	);
};

export default AboutPage;
