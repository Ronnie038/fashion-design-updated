import React from 'react';

import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import CartPageSection from '../../components/CartPageSection/CartPageSection';
import { Helmet } from 'react-helmet';
import PageProducts from '../../components/PageNewItems/PageProducts';

const Cart = () => {
	return (
		<div>
			<Helmet>
				<title>UrbanUtopia | Cart</title>
			</Helmet>
			<CartPageSection></CartPageSection>
			<PageProducts />
			<DownloadMobile></DownloadMobile>
		</div>
	);
};

export default Cart;
