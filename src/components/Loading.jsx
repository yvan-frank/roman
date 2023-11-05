import React from 'react';

const Loading = () => {
	return (
		<div className='flex loader'>
			<div className='mx-1 p-1 lg:p-1.5 rounded-full bg-purple loader__element'></div>
			<div className='mx-1 p-1 lg:p-1.5 rounded-full bg-purple/70 loader__element'></div>
			<div className='mx-1 p-1 lg:p-1.5 rounded-full bg-purple/40 loader__element'></div>
		</div>
	);
};

export default Loading;
