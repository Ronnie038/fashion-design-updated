import React from 'react';
import checkIcon from '../../assets/icons/OrderDone/Check.png'
import bikeIcon from '../../assets/icons/OrderDone/bike.png'
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import { Icon } from '@iconify/react';
import { Slide, Zoom } from 'react-awesome-reveal';

const OrderDone = () => {
    return (
        <div>
            <div className='bg-[#C8C2BF] py-20'>
                <Zoom>
                    <div className='xl:max-w-7xl lg:max-w-2xl md:max-w-2xl max-w-xs mx-auto bg-white py-16'>
                        <div className='flex justify-center'>
                            <div className='text-center'>
                                <div className='w-24 mx-auto'>
                                    <img className='w-full' src={checkIcon} alt="" />
                                </div>
                                <div className='my-6'>
                                    <h3 className='text-3xl font-bold'>Order Done!</h3>
                                    <p className='text-xl font-semibold'>Thanks for ordering. Stay with us.</p>
                                </div>
                                <div className='w-80 mx-auto'>
                                    <img className='w-full' src={bikeIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
            <DownloadMobile></DownloadMobile>
        </div>
    );
};

export default OrderDone;