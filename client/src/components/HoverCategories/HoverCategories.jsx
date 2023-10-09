import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import HoverCategory from './HoverCategory';
const HoverCategories = ({ categoryName }) => {
	// const [categories, setCategories] = useState([]);
	// console.log(categoryName);
	const [quantity, setQuantity] = useState(5);

	const categories = useSelector((state) => state.categories);
	// console.log(categories);
	const filteredCategory = categories?.data?.find(
		(category) => category.name?.toLowerCase() === categoryName?.toLowerCase()
	);

	return (
		<div className='container mx-auto my-10'>
			<div className='bg-white mt-10'>
				<h1 className='text-2xl my-5'>Top Category</h1>
				<div className='lg:flex md:flex-none gap-8'>
					{filteredCategory?.subcategories
						?.slice(0, quantity)
						?.map((category, idx) => (
							<HoverCategory key={idx} category={category}></HoverCategory>
						))}
				</div>
			</div>
		</div>
	);
};

export default HoverCategories;
