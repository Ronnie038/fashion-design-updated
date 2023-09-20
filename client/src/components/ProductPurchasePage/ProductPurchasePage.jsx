import { Helmet } from 'react-helmet';
import ProductPurchaseSection from './ProductPurchaseSection';

import DownloadMobile from '../DownloadMobile/DownloadMobile';
import PageProducts from '../PageNewItems/PageProducts';

const ProductPurchasePage = () => {
	return (
		// not mobile responsive
		<div>
			<Helmet>
				<title>UrbanUtopia | Product Purchase</title>
			</Helmet>
			<ProductPurchaseSection></ProductPurchaseSection>
			<PageProducts />
			<DownloadMobile></DownloadMobile>
		</div>
	);
};

export default ProductPurchasePage;
