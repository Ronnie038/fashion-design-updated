import React, { useEffect, useState } from 'react';
import Category from '../../Category/Category';
import { getCategory } from '../../../Api/ApiService';
import HoverCategory from '../../HoverCategory/HoverCategory';

const HoverWomenItems = () => {
	const [categories, setCategories] = useState([]);
	const [quantity, setQuantity] = useState(5);
	useEffect(() => {
		const categoryData = async () => {
			const data = await getCategory();
			setCategories(data);
		};
		categoryData();
	}, []);
	console.log({ categories });
	return (
		<div className='container mx-auto my-10'>
			<div className='bg-white mt-10'>
				<h1 className='text-2xl my-5'>Top Category</h1>
				<div className='lg:flex md:flex-none gap-8'>
					{categories?.subcategories
						?.slice(0, quantity)
						?.map((category, idx) => (
							<HoverCategory key={idx} category={category}></HoverCategory>
						))}
				</div>
			</div>
		</div>
	);
};

export default HoverWomenItems;
