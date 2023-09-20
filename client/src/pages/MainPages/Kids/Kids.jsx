import React from 'react';

import DownloadMobile from '../../../components/DownloadMobile/DownloadMobile';

import { useSelector } from 'react-redux';

import Banner from '../../../components/Banner/Banner';
import PageCategories from '../../../components/PageCategories/PageCategories';
import PageProducts from '../../../components/PageNewItems/PageProducts';
import { selectCategories } from '../../../store/slices/CategorySlices';

const Kids = () => {
	const categories = useSelector((state) => state.categories);
	const filteredCategory = categories?.data?.find((category) =>
		category.name?.toLowerCase().includes('kids'.toLowerCase())
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

export default Kids;
