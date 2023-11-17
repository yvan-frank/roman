import React, {useEffect} from 'react';
import GeneralHeader from "../../components/index.jsx";
import Footer from "../../components/Footer.jsx";

const PoliticPage = () => {
	useEffect(() => {
		document.title = "Politique de confidentialité";
	}, []);
	return (
		<>
			<GeneralHeader title='Politique de confidentialité'>

			</GeneralHeader>
			<Footer />
		</>
	);
};

export default PoliticPage;
