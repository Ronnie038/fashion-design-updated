import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { getCategory, getIems } from '../Api/ApiService';
import { useDispatch, useSelector } from 'react-redux';
import { addCategories, fetchCategories } from '../store/slices/CategorySlices';
import { addItems } from '../store/slices/ItemsSlices';
import ChatOption from '../pages/Home/ChatOption/ChatOption';

const Main = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		// setCategories(data);
	}, []);
	useEffect(() => {
		dispatch(fetchCategories());
		getIems().then((data) => dispatch(addItems(data)));
	}, []);

	const location = useLocation();
	const shouldRenderNavbarAndFooter = location.pathname !== '/';

	return (
		<div>
			{shouldRenderNavbarAndFooter && <Navbar></Navbar>}
			<Outlet></Outlet>
			<div className='fixed bottom-5 right-5'>
				<ChatOption></ChatOption>
			</div>
			{shouldRenderNavbarAndFooter && <Footer></Footer>}
		</div>
	);
};

export default Main;
