import React from 'react';
import {Helmet} from "react-helmet";

const Head = ({pageTitle,title, url, description, image, keywords, author}) => {
	return (
		<Helmet>
			{/* Placez ici vos méta données */}
			<title> {title} </title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta name="author" content={author} />
			{/* Protocole OpenGraph */}
			<meta property="og:title" content={title} />
			<meta property="og:locale" content="fr_CAMEROUN" />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={url} />
			<meta property="og:description" content={description} />
		</Helmet>
	);
};

export default Head;
