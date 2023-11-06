import React, {useEffect} from 'react';
import GeneralHeader from "../../components/index.jsx";

const MentionPage = () => {
	useEffect(() => {
		document.title = "Mentions légales";
	}, []);
	return (
		<GeneralHeader>
			<div className='h-screen'></div>
		</GeneralHeader>
	);
};

export default MentionPage;
