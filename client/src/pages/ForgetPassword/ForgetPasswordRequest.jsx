import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Helmet } from 'react-helmet';
import { useForm } from "react-hook-form";
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import { Fade } from 'react-awesome-reveal';

const ForgetPasswordRequest = () => {

    // from handle 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };


    // password eye show hide 
    const [open, setOpen] = useState(false)


    const toggle = () => {
        setOpen(!open)
    }

    return (
        <div>
            <Fade>
                <Helmet><title>UrbanUtopia | Forget Password Request</title></Helmet>
                <div className='bg-[#C8C2BF] py-20'>
                    <div className="xl:w-5/12 mx-auto">
                        <div className=" flex-col lg:flex-row-reverse">
                            <div className="xl:max-w-full lg:max-w-3xl md:max-w-2xl max-w-sm flex-shrink-0 rounded-md shadow-md bg-white mx-1 md:mx-0 lg:mx-0 xl:mx-0 ">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:px-28 md:px-28 px-[16px] space-y-5 py-16">
                                    <div>
                                        <h5 className='font-bold text-xl mb-3'>Find Your Account</h5>
                                        <p>Please enter your email address  to search for your account.</p>
                                    </div>
                                    <div className="form-control">
                                        <input type="email" {...register("email")} required placeholder="Email" className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl" />
                                    </div>
                                    <div className="flex justify-end gap-3 mt-10">
                                        <Link to='/login'><input type="submit" value='Cancel' className='px-8 btn bg-[#849094] text-white mt-4 normal-case text-[16px] h-16 rounded-none hover:bg-[#3B95B0]' /></Link>
                                        <input type="submit" value='Search' className='btn bg-[#0C4E67] px-8 text-white mt-4 normal-case text-[16px] h-16 rounded-none hover:bg-[#3B95B0]' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <DownloadMobile></DownloadMobile>
            </Fade>
        </div>
    );
};

export default ForgetPasswordRequest;