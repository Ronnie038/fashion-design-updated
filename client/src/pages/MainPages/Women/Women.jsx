import React, { useEffect, useState } from 'react';
import Banner from '../../../components/Banner/Banner';
import DownloadMobile from '../../../components/DownloadMobile/DownloadMobile';

import PageCategories from '../../../components/PageCategories/PageCategories';
import { useSelector } from 'react-redux';
import PageProducts from '../../../components/PageNewItems/PageProducts';
import MainLoading from '../../../components/Loading/MainLoading';
import { getCategoryByName } from '../../../Api/categoryServices';

const Women = () => {
	const [filteredCategory, setFilteredCategory] = useState({});
	const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	getCategoryByName('women', setFilteredCategory, setLoading);
	// }, []);

	// if (loading) return <MainLoading />;

	return (
		<div>
			<Banner />
			<PageCategories categoryName={'women'} />
			<PageProducts section={'women'} />
			<DownloadMobile></DownloadMobile>
		</div>
	);
};

export default Women;
