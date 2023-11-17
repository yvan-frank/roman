import React, {useEffect} from 'react';
import GeneralHeader from "../../components/index.jsx";
import Footer from "../../components/Footer.jsx";

const MentionPage = () => {
	useEffect(() => {
		document.title = "Mentions légales";
	}, []);
	return (
		<>
			<GeneralHeader title='Mentions légales'>

			</GeneralHeader>
			<Footer />
		</>
	);
};

export default MentionPage;
