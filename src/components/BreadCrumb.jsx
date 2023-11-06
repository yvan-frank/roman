import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {TbMathGreater} from "react-icons/tb";
import {root} from "../routes/index.js";

const BreadCrumb = ({pageTitle}) => {


	return (
		<div className='w-full bg-slate/5 p-3 px-5 lg:px-10 mt-16'>
			<ul className='flex items-center text-sm'>
				<li className='px-2 hover:underline'><NavLink to={root}>Accueil</NavLink></li>
				<li className='px-2'><TbMathGreater /></li>
				<li className='text-slate/50'>
					{pageTitle}
				</li>
			</ul>
		</div>
	);
};

export default BreadCrumb;
