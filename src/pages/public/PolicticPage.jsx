import React, {useEffect} from 'react';
import GeneralHeader from "../../components/index.jsx";

const PoliticPage = () => {
	useEffect(() => {
		document.title = "Politique de confidentialité";
	}, []);
	return (
		<GeneralHeader>
			<div className='h-screen'></div>
		</GeneralHeader>
	);
};

export default PoliticPage;
