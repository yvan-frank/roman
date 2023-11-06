import React, {useEffect} from 'react';
import GeneralHeader from "../../components/index.jsx";

const AboutPage = () => {
	useEffect(() => {
		document.title = "Qui sommes-nous ?";
	}, []);
	return (
		<div>
			<GeneralHeader>
				<div className='h-screen'>
					<div className='flex flex-col max-w-6xl mx-auto mt-20'>
						<h1 className='text-4xl font-semibold'>Qui sommes-nous ?</h1>
					</div>
				</div>
			</GeneralHeader>

		</div>
	);
};

export default AboutPage;
