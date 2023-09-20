import { useSelector } from 'react-redux';

import DownloadMobile from '../../../components/DownloadMobile/DownloadMobile';

import PageCategories from '../../../components/PageCategories/PageCategories';
import Banner from '../../../components/Banner/Banner';
import PageProducts from '../../../components/PageNewItems/PageProducts';

const Men = () => {
	const categories = useSelector((state) => state.categories);
	const filteredCategory = categories?.data?.find((category) =>
		category.name?.toLowerCase().includes('men'.toLowerCase())
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

export default Men;
