import { useSelector } from 'react-redux';

import DownloadMobile from '../../../components/DownloadMobile/DownloadMobile';

import PageCategories from '../../../components/PageCategories/PageCategories';
import Banner from '../../../components/Banner/Banner';
import PageProducts from '../../../components/PageNewItems/PageProducts';
import MainLoading from '../../../components/Loading/MainLoading';
import { useEffect, useState } from 'react';
import { getCategoryByName } from '../../../Api/categoryServices';

const Men = () => {
	return (
		<div>
			<Banner />
			<PageCategories categoryName={'men'} />
			<PageProducts section={'men'} />
			<DownloadMobile></DownloadMobile>
		</div>
	);
};

export default Men;
