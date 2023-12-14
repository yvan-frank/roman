import React from 'react';

const Loading = () => {
	return (
		<div className=' loader'>
			<div className='mx-1 p-3 rounded-full bg-purple loader__element'></div>
			<div className='mx-1 p-3 rounded-full bg-purple loader__element'></div>
			<div className='mx-1 p-3 rounded-full bg-purple loader__element'></div>
		</div>
	);
};

export default Loading;
