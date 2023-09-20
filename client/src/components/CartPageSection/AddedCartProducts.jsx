import React, { useState } from 'react';
import { removeFromDb } from '../../utilities/fakedb';
import Rating from 'react-rating';
import { Icon } from '@iconify/react';
import ProductCouter from '../ProductCouter/ProductCouter';
import { useDispatch } from 'react-redux';
import { removeSingleItem } from '../../store/slices/CartSlices';

const AddedCartProducts = ({ item, productIsCheck }) => {
	const dispatch = useDispatch();
	console.log(item);
	return (
		<>
			<div className='border p-5 mt-10 flex items-center justify-between'>
				<div className='flex gap-5 flex-wrap items-center justify-between'>
					<div className='flex items-center gap-5 cursor-pointer'>
						<input
							type='checkbox'
							checked={productIsCheck ? true : false}
							for='selectAll'
							className='text-xlappearance-none indeterminate:bg-gray-300 rounded-lg border-4 border-black w-8 h-8'
						/>
					</div>
					<div className='lg:w-2/12 md:w-4/12 w-6/12 lg:order-none md:order-none order-first sm:order-first'>
						<img src={item.image} className='w-full' alt='' />
					</div>
					<div className='space-y-3'>
						<h2 className='lg:text-4xl md:text-3xl text-2xl font-semibold'>
							{item.title}
						</h2>
						<div className='flex flex-wrap lg:gap-8 md:gap-5 gap-3 items-center'>
							<p className='text-xl font-semibold'>
								<del className='text-[#757575]'>41.40৳</del>
							</p>
							<p className='text-2xl font-semibold'>
								<ins className='no-underline'>{item.price}৳</ins>
							</p>
							<h4 className='bg-[#DE2121] px-3 py-1 text-sm text-white font-semibold text-center'>
								50% Off
							</h4>
						</div>
						<div className='flex items-center gap-3'>
							<Rating
								readonly
								placeholderRating={4.5}
								emptySymbol={<Icon icon='gridicons:star-outline' />}
								placeholderSymbol={<Icon icon='ic:baseline-star' />}
								fullSymbol={<Icon icon='ic:baseline-star-half' />}
								className='text-xl text-[#0C4E67]'
							></Rating>
							<span className='text-xs font-medium'>{`( 4.5 Rating )`}</span>
						</div>
					</div>
					<div>
						<ProductCouter item={item} />
					</div>
				</div>
				<div className='' title='Delete'>
					<Icon
						onClick={() => dispatch(removeSingleItem(item.id))}
						className='cursor-pointer text-3xl text-red-600'
						icon='fluent-mdl2:delete'
					/>
				</div>
			</div>
		</>
	);
};

export default AddedCartProducts;
