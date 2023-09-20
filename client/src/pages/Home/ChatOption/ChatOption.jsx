import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ChatOption = () => {

    const botUsername = 'kaykobadyiasinkhan';
    const startParameter = 'Hi, Welcome to Urban Utopia';

    return (
        <div>
            <div className="dropdown dropdown-top dropdown-hover dropdown-end">
                <label tabIndex={0} className="btn m-1 text-xl normal-case lg:w-full md:w-full w-12 lg:px-5 lg:h-auto md:px-5 px-0 bg-white hover:bg-white hover:border-[#3B95B0] border-2 border-[#0C4E67]">
                    {/* <Icon icon="ant-design:message-filled" className='text-[#03384D]' /> */}
                    <div className='lg:w-[30px] md:w-[30px] w-[20px]'>
                        <img className='w-full' src="../../../../public/fav.png" alt="" />
                    </div></label>
                <ul tabIndex={0} className="dropdown-content z-[1]  menu shadow  rounded-box  py-3 border-2 bg-[#fff] border-[#0C4E67]">
                    <li><Link className='text-xl py-3 font-semibold' to='https://wa.me/1706084806?text=Are You Avilable Now?' target='blank'><Icon icon="logos:whatsapp-icon" className='text-3xl' /> </Link></li>
                    <div className='divider my-1'></div>
                    <li><Link className='text-xl py-3 font-semibold' target='blank' to={`https://t.me/${botUsername}?start=${startParameter}`}><Icon icon="logos:telegram" className='text-3xl' /> </Link></li>
                    <div className='divider my-1'></div>
                    <li><Link className='text-xl py-3 font-semibold'><Icon icon="logos:messenger" className='text-3xl' /></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default ChatOption;