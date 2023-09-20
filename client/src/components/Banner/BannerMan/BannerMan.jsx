import React from 'react';
import bannerMenText from '../../../assets/Banner/Men/bannerText.png'
import bannerMen from '../../../assets/Banner/Men/BannerMen.png'


const BannerMan = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className=''>
                    <img className='w-full' src={bannerMenText} alt="" />
                </div>
                <div className=''>
                    <img className='w-full' src={bannerMen} alt="" />
                </div>
            </div>

            {/* <div className="absolute xl:top-0 lg:top-20 top-36 md:left-36 md:top-0 lg:right-24 z-0">
                <div className='flex justify-end items-center'>
                    <div className='xl:w-6/12 lg:w-10/12 md:w-11/12 w-11/12'>
                        <img className='w-full' src={bannerMenText} alt="" />
                    </div>
                    <div className=''>
                        <img className='w-full' src={bannerMen} alt="" />
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default BannerMan;