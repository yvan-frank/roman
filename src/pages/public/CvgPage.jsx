import React, {useEffect} from 'react';
import GeneralHeader from "../../components/index.jsx";
import Footer from "../../components/Footer.jsx";

const CvgPage = () => {
	useEffect(() => {
		document.title = "Conditions générales de vente";
	}, []);
	return (
		<>
			<GeneralHeader title='Conditions génrales de vente'>

			</GeneralHeader>
			<Footer />
		</>
	);
};

export default CvgPage;
