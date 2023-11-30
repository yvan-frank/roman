import React from 'react';
import GeneralHeader from "../../components/index.jsx";
import Head from "../../components/Head.jsx";
import {useLocation, useSearchParams} from "react-router-dom";
import BookItem from "../../components/BookItem.jsx";
import Footer from "../../components/Footer.jsx";

const Catalogue = () => {
	const {pathname} = useLocation();

	// search params
	const [searchParams] = new useSearchParams();
	let params = searchParams.get('category')
	console.log(params)
	const category = [
		{
			name: 'Toutes les catégories',
			link: '/catalogue',
		},
		{
			name: 'Roman',
			link: '/catalogue?category=roman',
		},
		{
			name: 'Fiction',
			link: '/catalogue?category=fiction',
		},
		{
			name: 'Policier',
			link: '/catalogue?category=policier',
		},
		{
			name: 'Histoire',
			link: '/catalogue?category=histoire',
		},
		{
			name: 'Thriller',
			link: '/catalogue?category=thriller',
		},
		{
			name: 'Science-fiction',
			link: '/catalogue?category=science-fiction',
		}
	]
	return (
		<>
			<GeneralHeader title='Catalogue'>
				<Head
					pageTitle='Catalogue'
					title='Catalogue | Rabipek Novel'
					description='Retrouvez parmi notre large catalogue des livres passsionnants'
					url={window.location.href}
					keywords='Roman, livres'
				/>
				<div>
					<div className=' px-5 md:px-10 lg:px-20 mt-10'>
						<h4 className='font-semibold text-3xl'>Catalogue</h4>
						<div className='border-t-4 border-purple p-2 w-28'></div>
					</div>
					<div className='flex w-full px-5 md:px-10 lg:px-20 mt-10'>
						<div className='w-1/4'>
							<div className='w-full flex flex-col bg-slate/10 p-4'>
								<ul>
									{
										category.map((item, index) => (
											<li key={index} className={`py-2 px-2 cursor-pointer ${params === item.name ? 'bg-purple text-white' : ''}`}>
												<a href={item.link}>{item.name}</a>
											</li>
										))
									}
								</ul>
							</div>
						</div>
						<div className='w-3/4'>
							<div className='w-full px-5 flex flex-wrap'>

							</div>
						</div>
					</div>
				</div>
				<Footer />
			</GeneralHeader>

		</>
	);
};

export default Catalogue;
