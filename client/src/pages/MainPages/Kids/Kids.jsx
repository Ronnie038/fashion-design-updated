import React, { useEffect, useState } from 'react';

import DownloadMobile from '../../../components/DownloadMobile/DownloadMobile';

import Banner from '../../../components/Banner/Banner';
import PageCategories from '../../../components/PageCategories/PageCategories';
import PageProducts from '../../../components/PageNewItems/PageProducts';

const Kids = () => {
	return (
		<div>
			<Banner />
			<PageCategories categoryName={'kids'} />
			<PageProducts />
			<DownloadMobile></DownloadMobile>
		</div>
	);
};

export default Kids;
