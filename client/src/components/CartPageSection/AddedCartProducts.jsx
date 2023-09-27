import React, { useState } from 'react';
import Rating from 'react-rating';
import { Icon } from '@iconify/react';

import { useDispatch } from 'react-redux';
import { removeSingleItem } from '../../store/slices/CartSlices';
import ProductCounter from '../Counter/ProductCounter';

const AddedCartProducts = ({ item, productIsCheck }) => {
	const dispatch = useDispatch();

	const removeSingleProduct = (id) => {
		dispatch(removeSingleItem(id));
	};

	console.log({ item });
	return (
		<>
			<div className='border p-5 mt-10 flex lg:flex-nowrap md:flex-wrap flex-wrap items-center gap-5 justify-between'>
				<div className='w-full flex gap-5 lg:flex-nowrap md:flex-wrap flex-wrap items-center justify-start'>
					<div className='flex items-center gap-5'>
						<input
							type='checkbox'
							checked={productIsCheck ? true : false}
							for='selectAll'
							className='text-xlappearance-none indeterminate:bg-gray-300 rounded-lg border-4 border-black w-6 h-6'
						/>
					</div>
					<div className='flex lg:flex-nowrap md:flex-wrap flex-wrap lg:justify-center lg:gap-10 md:gap-5 gap-5 items-center'>
						<div className='lg:w-[150px] md:w-[150px] w-[150px] lg:order-none md:order-none order-first sm:order-first'>
							<img src={item.image} className='w-full' alt='' />
						</div>
						<div className='space-y-3'>
							<h2 className='xl:text-3xl lg:text-2xl md:text-3xl text-2xl font-semibold'>
								{item.title}
							</h2>
							<div className='flex flex-wrap lg:gap-6 md:gap-5 gap-3 items-center'>
								<p className='text-xl font-semibold'>
									<del className='text-[#757575]'>41.40৳</del>
								</p>
								<p className='lg:text-xl md:text-xl text-xl font-semibold'>
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
					</div>
				</div>
				<div className='w-full flex items-center justify-between'>
					<div>
						<ProductCounter item={item} />
					</div>
					<div className='' title='Delete'>
						<Icon
							onClick={() => removeSingleProduct(item?._id)}
							className='cursor-pointer text-3xl text-red-600'
							icon='fluent-mdl2:delete'
						/>
					</div>
				</div>
				          
			</div>
		</>
	);
};

export default AddedCartProducts;
