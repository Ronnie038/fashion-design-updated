import React from 'react';
import downloadMobile1 from "../../assets/icons/downloadMobile1.png";
import downloadMobile2 from "../../assets/icons/downloadMobile2.png";

const DownloadMobile = () => {
    return (
        <div className='flex justify-center text-center my-20'>
            <div className='space-y-5'>
                <p className='logoFont text-[#03384D] text-5xl'><span className='text-[#3B95B0] logoFont'>Urban</span>Utopia</p>
                <h3 className='text-xl font-medium'>Download Our MobileApps</h3>
                <div className='flex gap-5 lg:w-full w-80 justify-center'>
                    <div><img className='w-full' src={downloadMobile1} alt="" /></div>
                    <div><img className='w-full' src={downloadMobile2} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default DownloadMobile;