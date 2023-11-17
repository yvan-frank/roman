import React, {useEffect} from 'react';
import GeneralHeader from "../../components/index.jsx";
import {RiDeleteBin6Line} from "react-icons/ri";
import Footer from "../../components/Footer.jsx";

const Cart = () => {

	useEffect(() => {
		document.title = "Panier ";
	}, []);
	return (
		<>
			<GeneralHeader title='Panier'>
				<div className='flex flex-col md:flex-row max-w-6xl mx-auto mt-20 justify-between px-5 lg:px-0'>
					<div className='md:w-1/2 lg:w-2/4'>
						<div className='w-full flex flex-col'>
							<div className='w-full h-44 flex bg-white rounded border-b border-slate/50 p-3'>
								<div className='w-32 h-auto'>
									<img src="https://picsum.photos/600/400" alt="Cart page"/>
								</div>
								<div className='flex flex-col ml-5 justify-between'>
									<div>
										<h3 className='font-semibold'>Les trois pretendants un mari</h3>
										<p>Prix - 5000 FCFA</p>
									</div>
									<button className='text-red-500 bg-red-500/20 p-2 rounded flex items-center'>
										<RiDeleteBin6Line />
										<span className='ml-2'>Supprimer</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='md:w-1/2 md:ml-2 lg:ml-0 lg:w-2/5 py-5 px-10 shadow-md'>
						<div className='w-full'>
							<h3 className='bg-purple/5 text-2xl p-2 text-purple font-semibold text-center'>TOTAL</h3>
							<div className='w-full flex justify-between text-sm mt-10'>
								<div>
									<h4>Sous-total</h4>
									<h4>Total</h4>
								</div>
								<div className='font-semibold'>
									<p>5000 FCFA</p>
									<p>5000 FCFA</p>
								</div>
							</div>
							<button className='mt-20 w-full bg-yellow text-white p-4 rounded font-semibold hover:bg-purple'>Acheter</button>
						</div>
					</div>
				</div>

			</GeneralHeader>
			<Footer />
		</>
	);
};

export default Cart;
