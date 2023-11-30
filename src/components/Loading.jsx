import React from 'react';

const Loading = () => {
	return (
		<div className=' loader'>
			<div className='mx-1 p-1 lg:p-4 rounded-full bg-purple loader__element'></div>
			<div className='mx-1 p-1 lg:p-4 rounded-full bg-purple loader__element'></div>
			<div className='mx-1 p-1 lg:p-4 rounded-full bg-purple loader__element'></div>
		</div>
	);
};

export default Loading;
