import React, {useEffect} from 'react';
import GeneralHeader from "../../components/index.jsx";
import BreadCrumb from "../../components/BreadCrumb.jsx";

const ContactUs = () => {
	useEffect(() => {
		document.title = "Contactez nous";
	}, []);

	return (
		<GeneralHeader>

			<div className='h-screen'></div>
		</GeneralHeader>
	);
};

export default ContactUs;
