import React from 'react';
import marketing from "../assets/svg/marketing.svg"
import playLogo from "../assets/playstore.png";
import appleLogo from "../assets/apple.png";

const Hero = () => {
	return (
		<div className='w-full bg-slate p-2 lg:p-10 lg:px-32 flex flex-col lg:flex-row text-white justify-between items-center
		animate-fade-in-out relative overflow-hidden'>
			<img src={marketing} alt="" className='w-44 lg:w-52' />
			<div className='mx-5 lg:mx-10'>
				<h3 className='font-bold text-6xl'>Rabipek Novel</h3>
				<p>Voyage dans un monde de passion enchantée</p>
				<div className='text-2xl font-semibold mt-5'>
					<p>Lire.</p>
					<p>Acheter.</p>
				</div>
			</div>
			<div className='px-10 py-5 '>
				<h3 className='uppercase font-semibold'>Disponible maintenant</h3>
				<div className='flex mr-5'>
					<div className='flex p-1 w-[7.5rem] bg-black cursor-pointer items-center rounded text-white/80'>
						<div className='mr-1'>
							<img className='w-6' src={playLogo} alt="" />
						</div>
						<div className='flex flex-col'>
							<span className='text-[0.6rem] -tracking-wider uppercase'>disponible sur</span>
							<span className=' font-bold text-sm'>Google Play</span>
						</div>
					</div>
					<div className='flex p-1 w-[7.5rem] bg-black cursor-pointer items-center rounded text-white/80 ml-2'>
						<div className='mr-1'>
							<img className='w-6' src={appleLogo} alt="" />
						</div>
						<div className='flex flex-col'>
							<span className='text-[0.6rem] -tracking-wider'>Télécharger dans</span>
							<span className=' font-bold text-sm'>l'App Store</span>
						</div>
					</div>
				</div>
			</div>
			<div className='absolute p-28 bg-white right-0 blur-lg rounded-full -translate-y-20 translate-x-20'></div>
		</div>
	);
};

export default Hero;
