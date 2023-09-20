import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Helmet } from 'react-helmet';
import { useForm } from "react-hook-form";
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';

const ForgetPassword = () => {

    const [matchPassword, setMatchPassword] = useState('');

    // from handle 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)


        // password confirm validation
        if (data.password == data.confirm_password) {
            setMatchPassword('')
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Your password is set successfull',
                showConfirmButton: false,
                timer: 2000
            })
        }
        else {
            setMatchPassword("Password is dose't Matched")
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again',
                footer: '<a href="/">Why do I have this issue?</a>'
            })
        }

    };


    // password eye show hide 
    const [open, setOpen] = useState(false)


    const toggle = () => {
        setOpen(!open)
    }


    return (
        <div>
            <Fade>
                <Helmet><title>UrbanUtopia | Set Password</title></Helmet>
                <div className='bg-[#C8C2BF] py-20'>
                    <div className="xl:w-5/12 mx-auto">
                        <div className=" flex-col lg:flex-row-reverse">
                            <div className="xl:max-w-full lg:max-w-3xl md:max-w-2xl max-w-sm flex-shrink-0 rounded-md shadow-md bg-white mx-1 md:mx-0 lg:mx-0 xl:mx-0 ">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:px-28 md:px-28 px-[16px] space-y-5 py-16">
                                    <div>
                                        <Link to="/" className="text-center">
                                            <p className='logoFont mb-8 mt-3 text-[#03384D] lg:text-5xl text-3xl font-bold'><span className='text-[#3B95B0] logoFont'>Urban</span>Utopia</p>
                                        </Link>
                                        <h5 className='font-bold text-xl'>Set Your Password</h5>
                                    </div>

                                    <div className="form-control relative">
                                        <input type={open ? 'text' : 'password'} {...register("password")} required placeholder="Password" className="placeholder-black input h-16 rounded-none input-bordered border-black text-black text-xl placeholder-dots" />
                                        {open ? <div className='absolute right-5 top-5 cursor-pointer'><Icon icon="mdi:eye" onClick={toggle} className='text-3xl' /></div>
                                            :
                                            <div className='absolute right-5 top-5 cursor-pointer'><Icon icon="mdi:eye-off" onClick={toggle} className='text-3xl' /></div>

                                        }
                                    </div>
                                    <div className="form-control relative">
                                        <input type={open ? 'text' : 'password'} {...register("confirm_password")} required placeholder="Confirm Password" className="placeholder-black input h-16 rounded-none input-bordered border-black text-black text-xl placeholder-dots" />
                                        {open ? <div className='absolute right-5 top-5 cursor-pointer'><Icon icon="mdi:eye" onClick={toggle} className='text-3xl' /></div>
                                            :
                                            <div className='absolute right-5 top-5 cursor-pointer'><Icon icon="mdi:eye-off" onClick={toggle} className='text-3xl' /></div>
                                        }
                                        <p className='text-red-600 text-xl mt-2'>{matchPassword}</p>
                                    </div>
                                    <div className="flex justify-end gap-3 mt-10">
                                        <Link to='/login'><input type="submit" value='Cancel' className='px-8 btn bg-[#849094] text-white mt-4 normal-case text-[16px] h-16 rounded-none hover:bg-[#3B95B0]' /></Link>
                                        <input type="submit" value='Save' className='btn bg-[#0C4E67] px-8 text-white mt-4 normal-case text-[16px] h-16 rounded-none hover:bg-[#3B95B0]' />
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

export default ForgetPassword;