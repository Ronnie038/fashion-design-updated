import React from 'react';
import Banner from '../../components/Banner/Banner';
import WomenPageNewItems from '../../components/PageNewItems/WomenPageNewItems/WomenPageNewItems';
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import SingleProductDetails from '../../components/SingleProductDetails/SingleProductDetails';

const SingleProductDetailsPage = () => {
    return (
        <div>
            <Banner></Banner>
            <SingleProductDetails></SingleProductDetails>
            <WomenPageNewItems></WomenPageNewItems>
            <DownloadMobile></DownloadMobile>
        </div>
    );
};

export default SingleProductDetailsPage;