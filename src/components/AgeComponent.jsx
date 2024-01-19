import React, {Fragment, useEffect, useState} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import {FaUserCircle} from "react-icons/fa";
import {CiCircleInfo} from "react-icons/ci";

const AgeComponent = ({}) => {
	const [open, setOpen] = useState(false);
	function setAge() {
		localStorage.setItem('age', 'true')
		setOpen(false)

	}

	useEffect(() => {
		const getAge = localStorage.getItem('age')
		if (getAge === 'false' || getAge === null) {
			setOpen(true)
		}else {
			setOpen(false)
		}
		//setOpen(false)
	}, []);


	return (
		<Transition appear show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10"  onClose={() => setOpen(true)}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex  items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6
							   shadow-xl transition-all flex flex-col justify-center items-center">
								<Dialog.Title
									as="div"
									className="text-3xl font-medium leading-6 text-gray-900 flex"
								>
									<div className="flex-col justify-center items-center">
										Note importante

									</div>
								</Dialog.Title>
								<div className="mt-5">
									<p className="text-sm text-gray-500">
										En procédant, vous confirmez avoir plus de <span className='text-green font-bold'>18 ans</span>
									</p>
								</div>

								<div className="mt-4">
									<button
										type="button"
										className="inline-flex justify-center rounded-md border border-transparent p-2 bg-yellow text-sm font-medium
										text-white hover:bg-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2"
										onClick={setAge}
									>
										Accepter
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default AgeComponent;
