import { Helmet } from 'react-helmet';

import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import PageProducts from '../../components/PageNewItems/PageProducts';
import Checkout from './Checkout';

const CheckoutPage = () => {
	return (
		// not mobile responsive
		<div>
			<Helmet>
				<title>UrbanUtopia | Checkout</title>
			</Helmet>
			<Checkout />
			<PageProducts />
			<DownloadMobile></DownloadMobile>
		</div>
	);
};

export default CheckoutPage;
