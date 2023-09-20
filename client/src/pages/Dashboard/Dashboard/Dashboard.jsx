import React from 'react';
import { Icon } from '@iconify/react';
import { NavLink, Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
	return (
		<>
			<div className='flex xl:flex-nowrap lg:flex-wrap md:flex-wrap flex-wrap justify-between'>
				<div className='bg-[#0C4E67] xl:min-h-screen xl:w-96 lg:w-full md:w-full w-full'>
					<div className='xl:my-7 lg:my-5 md:my-5 my-5 mx-8'>
						<Link to='/' className=''>
							<p className='logoFont text-[#03384D] text-center text-4xl font-bold'>
								<span className='text-[#3B95B0] logoFont'>Urban</span>Utopia
							</p>
						</Link>
					</div>
					<ul className='nabLinkStyle space-y-4 mx-auto xl:w-full lg:w-[90%] md:w-[90%] w-[95%]'>
						<li className=' text-white xl:block lg:inline-block md:inline-block inline-block'>
							<NavLink
								className='flex gap-2 p-4 text-xl font-semibold items-center'
								to='dashboardDetails'
							>
								<Icon icon='material-symbols:dashboard' /> Dashboard
							</NavLink>
						</li>
						<li className='text-white xl:block lg:inline-block md:inline-block inline-block'>
							<NavLink
								className='flex gap-2 p-4 text-xl font-semibold items-center'
								to='/dashboard/orders'
							>
								<Icon icon='iconoir:cart' />
								Orders
							</NavLink>
						</li>
						<li className='text-white xl:block lg:inline-block md:inline-block inline-block'>
							<NavLink
								className='flex gap-2 p-4 text-xl font-semibold items-center'
								to='/dashboard/products'
							>
								<Icon icon='streamline:shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products' />
								Products
							</NavLink>
						</li>
						<li className='text-white xl:block lg:inline-block md:inline-block inline-block'>
							<NavLink
								className='flex gap-2 p-4 text-xl font-semibold items-center'
								to='/dashboard/addproducts'
							>
								<Icon icon='streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products' />{' '}
								Add Products
							</NavLink>
						</li>
						<li className='text-white xl:block lg:inline-block md:inline-block inline-block'>
							<NavLink
								className='flex gap-2 p-4 text-xl font-semibold items-center'
								to='/dashboard/addcategories'
							>
								<Icon icon='streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products' />{' '}
								Add category
							</NavLink>
						</li>
						<li className=' text-white xl:block lg:inline-block md:inline-block inline-block'>
							<NavLink
								className='flex gap-2 text-xl p-4 font-semibold items-center'
								to='/dashboard/delivery'
							>
								<Icon icon='iconoir:delivery-truck' />
								Delivery & Return
							</NavLink>
						</li>
						<li className='text-white xl:block lg:inline-block md:inline-block inline-block'>
							<NavLink
								className='flex gap-2 p-4 text-xl font-semibold items-center'
								to='/dashboard/contact'
							>
								<Icon icon='ri:contacts-fill' /> Contact Details
							</NavLink>
						</li>
						<li className='text-white xl:block lg:inline-block md:inline-block inline-block'>
							<NavLink
								className='flex gap-2 p-4 text-xl font-semibold items-center'
								to='/dashboard/faq'
							>
								<Icon icon='bi:chat-right-dots-fill' /> FAQ
							</NavLink>
						</li>
						<li className='text-white xl:block lg:inline-block md:inline-block inline-block'>
							<button className='flex hover:text-[#3997B1] transition-all delay-100 ease-in-out p-4 gap-2 text-xl font-semibold items-center'>
								<Icon icon='mi:log-in' /> Log Out
							</button>
						</li>
					</ul>
				</div>
				<div className='w-full'>
					<Outlet></Outlet>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
