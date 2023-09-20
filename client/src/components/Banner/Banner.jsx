import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import BannerWomen from './BannerWomen/BannerWomen';
import BannerMan from './BannerMan/BannerMan';
import BannerKids from './BannerKids/BannerKids';
import { Fade, Slide } from 'react-awesome-reveal';

import { useSelector } from 'react-redux';
import HoverCategories from '../HoverCategories/HoverCategories';

const Banner = () => {
	const location = useLocation();

	return (
		<>
			<div>
				<div
					className='xl:h-[880px] lg:h-[650px] md:h-[300px] sm:h-[600px] xs:h-[600px] bg-no-repeat bg-cover'
					style={{
						backgroundImage: 'url(https://i.ibb.co/16Stkjh/BannerBG.png)',
					}}
				>
					<div className='container mx-auto'>
						<div className='grid grid-rows-none grid-flow-col lg:mx-0 mx-5 lg:py-0 py-5'>
							<div className='col-span-2 lg:pt-8 pt-3 xl:mx-2 lg:mx-4 md:mx-4 sm:mx-2 xs:mx-2'>
								<div className='flex gap-5'>
									<div className='relative dropdown xl:dropdown-right lg:dropdown-right dropdown-bottom dropdown-hover z-40 cursor-pointer sm:mr-2 xs:mr-2'>
										<NavLink to='/women' className=' cursor-pointer'>
											<label
												tabIndex={0}
												className='text-white lg:text-2xl uppercase'
											>
												Women
											</label>
										</NavLink>
										<div className='xl:block lg:hidden md:block hidden absolute lg:-top-0 lg:-right-48 top-0 -right-40'>
											<ul
												tabIndex={0}
												className='dropdown-content z-[1] menu shadow bg-base-100 sm:ml-2 xs:ml-2'
											>
												<div className=' px-4 sm:px-2 xl:block lg:block xs:px-2 object-center hover:object-top'>
													<HoverCategories categoryName='women' />
												</div>
											</ul>
										</div>
									</div>
									<div className='relative dropdown xl:dropdown-right lg:dropdown-right dropdown-bottom dropdown-hover z-40 cursor-pointer sm:mr-2 xs:mr-2'>
										<NavLink to='/men'>
											<span
												tabIndex={0}
												className='text-white lg:text-2xl uppercase'
											>
												Men
											</span>
										</NavLink>
										<div className='xl:block lg:hidden md:block hidden absolute lg:-top-0 lg:-right-[105px] md:top-0 md:-right-24'>
											<ul
												tabIndex={0}
												className='dropdown-content z-[1] menu p-2 shadow bg-base-100 sm:ml-2 xs:ml-2 '
											>
												<div className='px-4 sm:px-2 xs:px-2'>
													<HoverCategories categoryName='men' />
												</div>
											</ul>
										</div>
									</div>
									<div className='dropdown xl:dropdown-right lg:dropdown-right dropdown-bottom dropdown-hover z-40 cursor-pointer sm:mr-2 xs:mr-2'>
										<NavLink to='/kids'>
											<label
												tabIndex={0}
												className='text-white lg:text-2xl uppercase'
											>
												Kids
											</label>
										</NavLink>
										<div className='xl:block lg:hidden md:block hidden absolute lg:-top-0 lg:-right-5 md:top-0 md:-right-8'>
											<ul
												tabIndex={0}
												className='dropdown-content z-[1] menu p-2 shadow bg-base-100 sm:ml-2 xs:ml-2'
											>
												<div className='px-4 sm:px-2 xs:px-2'>
													<HoverCategories categoryName='kids' />
												</div>
											</ul>
										</div>
									</div>
								</div>
								<ul className='text-[#CCCCCC] lg:space-y-3 space-y-2 lg:mt-8 mt-6 sm:mt-4 xs:mt-4 text-lg sm:text-base xs:text-base w-full'>
									<li>
										<Link to='/' className='lg:text-xl text-md'>
											Newest
										</Link>
									</li>
									<li>
										<Link to='' className='lg:text-xl text-md'>
											Trending
										</Link>
									</li>
									<li>
										<Link to='' className='lg:text-xl text-md'>
											Cosmetics
										</Link>
									</li>
									<li>
										<Link to='' className='lg:text-xl text-md'>
											Best Rated
										</Link>
									</li>
								</ul>
							</div>
							<div className='w-12/12 row-span-3 col-span-12 relative'>
								<div className=''>
									<div className='absolute right-0 xl:top-[80px] lg:top-[80px] md:top-0 top-[50px]'>
										{location.pathname == '/women' ? (
											<div>
												<Slide duration={3000}>
													<div className='w-full'>
														<BannerWomen></BannerWomen>
													</div>
												</Slide>
											</div>
										) : (
											<></>
										)}
									</div>
									<div className='absolute right-0 xl:top-[80px] lg:top-[80px] md:top-0 top-[50px]'>
										{location.pathname == '/men' ? (
											<div>
												<Slide duration={3000} direction='right'>
													<div className='w-full'>
														<BannerMan></BannerMan>
													</div>
												</Slide>
											</div>
										) : (
											<></>
										)}
									</div>
									<div className='absolute  right-0 2xl:top-[251px] xl:top-[382px] lg:top-[290px] md:top-[33px] top-[116px]'>
										{location.pathname == '/kids' ? (
											<div>
												<Slide duration={3000}>
													<div className='w-full'>
														<BannerKids></BannerKids>
													</div>
												</Slide>
											</div>
										) : (
											<></>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
