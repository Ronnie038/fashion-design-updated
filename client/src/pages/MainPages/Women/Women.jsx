import React from 'react';
import Banner from '../../../components/Banner/Banner';
import DownloadMobile from '../../../components/DownloadMobile/DownloadMobile';

import PageCategories from '../../../components/PageCategories/PageCategories';
import { useSelector } from 'react-redux';
import PageProducts from '../../../components/PageNewItems/PageProducts';

const Women = () => {
	const categories = useSelector((state) => state.categories);
	const filteredCategory = categories?.data?.find((category) =>
		category.name?.toLowerCase().includes('women'.toLowerCase())
	);

	return (
		<div>
			<Banner />
			<PageCategories
				categoryData={filteredCategory}
				status={categories?.status}
			/>
			<PageProducts />
			<DownloadMobile></DownloadMobile>
		</div>
	);
};

export default Women;
