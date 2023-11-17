import React, {useEffect} from 'react';
import GeneralHeader from "../../components/index.jsx";
import BreadCrumb from "../../components/BreadCrumb.jsx";
import Footer from "../../components/Footer.jsx";

const ContactUs = () => {
	useEffect(() => {
		document.title = "Contactez nous";
	}, []);

	return (
		<>
			<GeneralHeader title='Contactez nous'>


			</GeneralHeader>
			<Footer />
		</>
	);
};

export default ContactUs;
