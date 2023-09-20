import React from 'react';
import errorImg from '../../assets/Error/Error.png'
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='py-16'>
                <div className='flex justify-center'>
                    <img src={errorImg} alt="UrbanUtopia" />
                </div>
                <div className='flex justify-center my-4'>
                    <Link to='/' className='btn rounded-none bg-[#0C4E67] hover:bg-[#3B95B0] text-white px-8'>Go Back</Link>
                </div>
            </div>
            <DownloadMobile></DownloadMobile>
        </div>
    );
};

export default Error;