import React, {useEffect} from 'react';
import GeneralHeader from "../../components/index.jsx";

const CvgPage = () => {
	useEffect(() => {
		document.title = "Conditions générales de vente";
	}, []);
	return (
		<GeneralHeader>
			<div className='h-screen'></div>
		</GeneralHeader>
	);
};

export default CvgPage;
