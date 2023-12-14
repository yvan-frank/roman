import React, {useEffect, useState} from 'react';
import GeneralHeader from "../../components/index.jsx";
import {RiDeleteBin6Line} from "react-icons/ri";
import Footer from "../../components/Footer.jsx";
import {fetchCartWishlist, placeHolderImage, removeFromCart} from "../../api/index.js";
import useAuth from "../../hooks/useAuth.js";
import LazyLoadImage from "../../components/LazyLoadImage.jsx";
import {NavLink} from "react-router-dom";
import {catalogueLink} from "../../routes/index.js";
import {AiOutlineArrowLeft} from "react-icons/ai";
import Loading from "../../components/Loading.jsx";

const Cart = () => {
	const {auth} = useAuth()
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [checkStatus, setCheckStatus] = useState(false);

	//calculate price total in data using reduce
	const total = () => {
		return data.reduce((total, item) => {
			return total + item.price
		}, 0)
	}

	//remove item in cart
	const removeItem = async (id) => {
		const ids = {
			id: id
		}
		const result = await removeFromCart(ids,auth?.googleToken);
		if (result) {
			//setCheckStatus(result.status)
			window.location.reload();
		}
	}
	const cartList = async () => {
	  const result = await fetchCartWishlist(auth?.googleToken);
	  if (result){
		  setData(result.data)
		  setLoading(false)
		  //console.log(result.data[0])
	  }else setLoading(false)
	}

	useEffect(() => {
		cartList()
	}, []);


	useEffect(() => {
		document.title = "Panier ";
	}, []);
	return (
		<>
			<GeneralHeader title='Panier'>
				{checkStatus || data.length < 1 &&
					<div className='w-full p-0.5 bg-slate px-20 flex items-center text-yellow'>
						<AiOutlineArrowLeft/>
						<NavLink to={catalogueLink}>
							Retour aux catalogues
						</NavLink>
					</div>}
				<div className='flex justify-center'>
					{loading && <Loading/>}
				</div>
				{
					data.length > 0 ?
						<div className='flex flex-col md:flex-row max-w-6xl mx-auto mt-20 justify-between px-5 lg:px-0'>
							<div className='md:w-1/2 lg:w-2/4'>
								<div className='w-full flex flex-col'>
									{
										data && data.map((item, index) => {
											return (
												<div
													key={index}
													className='w-full h-auto flex bg-white rounded border-b border-slate/50 p-3'>
													<div className='w-32 h-auto'>

														<LazyLoadImage
															placeholderClass='w-full h-full border rounded-xl border-slate/20'
															className='w-full h-full border rounded-xl border-slate/20'
															src={item.front_cover}
															placeholderSrc={placeHolderImage}
														/>
													</div>
													<div className='flex flex-col ml-5 justify-between'>
														<div className='mb-5'>
															<h3 className='font-semibold'>{item.name}</h3>
															<span className='text-sm'>{item.author_name}</span>
															<p>Prix - {item.price} FCFA</p>
														</div>
														<button
															onClick={() => removeItem(item.cart_mapping_id)}
															className='text-red-500 bg-red-500/20 p-2 rounded flex items-center'>
															<RiDeleteBin6Line/>
															<span className='ml-2'>Supprimer</span>
														</button>
													</div>
												</div>
											)
										})
									}
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
											<p>{total()} FCFA</p>
											<p>{total()} FCFA</p>
										</div>
									</div>
									<button
										className='mt-20 w-full bg-yellow text-white p-4 rounded font-semibold hover:bg-purple'>Acheter
									</button>
								</div>
							</div>
						</div>
						: ''
				}

			</GeneralHeader>
			<Footer/>
		</>
	);
};

export default Cart;
