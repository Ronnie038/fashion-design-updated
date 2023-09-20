import React from 'react';
import Chart from './Chart';
import ReChart from './ReChart';

const DashboardDetails = () => {
	return (
		<div className='w-11/12 mx-auto '>
			<p className='text-3xl my-8 font-semibold'>Dashboard</p>
			<div className='flex md:flex-nowrap flex-wrap justify-between gap-5'>
				<div className='border text-center border-green-500 rounded-lg w-full py-8 px-5'>
					<p>Total Sales</p>
					<p className='text-4xl mt-3 font-semibold'>৳ 75.9k</p>
				</div>
				<div className='border text-center border-green-500 rounded-lg w-full py-8 px-5'>
					<p>Last Month Sales</p>
					<p className='text-4xl mt-3 font-semibold'>৳ 75.9k</p>
				</div>
				<div className='border text-center border-green-500 rounded-lg w-full py-8 px-5'>
					<p>Last Week Sales</p>
					<p className='text-4xl mt-3 font-semibold'>৳ 75.9k</p>
				</div>
				<div className='border text-center border-green-500 rounded-lg w-full py-8 px-5'>
					<p>Recent Sales</p>
					<p className='text-4xl mt-3 font-semibold'>৳ 75.9k</p>
				</div>
			</div>
			<div className='flex gap-5 justify-between flex-col xl:flex-row my-10'>
				<Chart></Chart>

				<ReChart></ReChart>
			</div>
		</div>
	);
};

export default DashboardDetails;
