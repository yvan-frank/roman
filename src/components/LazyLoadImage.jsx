import React, {useEffect, useRef, useState} from 'react';

const LazyLoadImage = ({placeholderSrc, placeholderClass, src, className}) => {
	const [isloading, setIsloading] = useState(true);
	const [view, setView] = useState();
	const placeholderRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			if(entries[0].isIntersecting){
				setView(src)
				observer.unobserve(placeholderRef.current)
			}
		})

		if (placeholderRef && placeholderRef.current){
			observer.observe(placeholderRef.current)
		}

	}, []);


	return (
		<>
			{
				isloading &&
				<img
					src={placeholderSrc}
					alt=""
					className={placeholderClass}
					ref={placeholderRef}
				/>
			}
			<img
				src={view}
				alt=""
				onLoad={() => setIsloading(false) }
				className={isloading ? 'hidden': className}
			/>
		</>
	);
};

export default LazyLoadImage;
