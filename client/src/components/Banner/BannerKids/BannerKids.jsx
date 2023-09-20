import React from 'react';
import bannerKidsText from '../../../assets/Banner/Kids/BannerKidsText.png'
import bannerKids from '../../../assets/Banner/Kids/BannerKid.png'

const BannerKids = () => {
    return (
        <>

            <div className="flex justify-between items-center">
                <div className=''>
                    <img className='w-full' src={bannerKidsText} alt="" />
                </div>
                <div className=''>
                    <img className='w-full' src={bannerKids} alt="" />
                </div>
            </div>


            {/* <div className="absolute xl:top-20 lg:top-40 top-[320px] md:left-36 md:top-36 lg:right-24 px-5 z-0">
                <div className='flex justify-end items-center'>
                    <div className='xl:w-6/12 lg:w-10/12 md:w-11/12 w-11/12'>
                        <img className='w-full' src={bannerKidsText} alt="" />
                    </div>
                    <div className=''>
                        <img className='w-full' src={bannerKids} alt="" />
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default BannerKids;