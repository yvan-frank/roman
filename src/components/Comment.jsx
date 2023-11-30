import React from 'react';
import {BiSolidUser} from "react-icons/bi";

const Comment = () => {
	return (
		<div className='w-96 bg-white py-2 px-3 rounded border border-slate/10 mt-5'>
			<div className=' w-full flex flex-col justify-start'>
				<div className='flex items-center'>
					<div className='h-10 w-10 rounded-full bg-slate/10 flex items-center justify-center'>
						<BiSolidUser />
					</div>
					<div className='flex flex-col text-sm ml-3'>
						<span className=' font-semibold'>VAns</span>
						<span className='text-xs'>28 may</span>
					</div>
				</div>
				<p className='mt-5 mb-2'>Good book</p>
			</div>
		</div>
	);
};

export default Comment;
