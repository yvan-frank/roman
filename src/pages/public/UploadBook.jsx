import React from 'react';
import Footer from "../../components/Footer.jsx";
import GeneralHeader from "../../components/index.jsx";
import Head from "../../components/Head.jsx";
import BookItem from "../../components/BookItem.jsx";
import {NavLink} from "react-router-dom";
import {modalitiesLink} from "../../routes/index.js";

const UploadBook = () => {
	return (
		<>
			<GeneralHeader title='Soumettre un manuscrit' isShow={true}>
			<Head
				title='Soumettre un manuscrit | Rabipek Novel'
				description='Rabipek Novel est une plateforme de lecture de roman'
				url={window.location.href}
			/>
				<div className='flex justify-center items-center max-w-6xl mx-auto'>
					<div className='rounded flex flex-col mt-20'>
						<NavLink to={modalitiesLink} className='text-center text-xl font-semibold text-white p-2 bg-yellow'>
							Publier votre livre
						</NavLink>
						<div className='flex flex-wrap'>
							<BookItem />
							<BookItem />

						</div>
					</div>

				</div>
				<Footer />
			</GeneralHeader>

		</>
	);
};

export default UploadBook;
