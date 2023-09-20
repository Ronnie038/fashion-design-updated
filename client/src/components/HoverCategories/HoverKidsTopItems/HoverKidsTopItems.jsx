// import React from "react";
import kidTop1 from '../../../assets/KidsTopCategories/img1.png';
// import kidTop2 from "../../../assets/KidsTopCategories/img2.png";
// import kidTop3 from "../../../assets/KidsTopCategories/img3.png";
// import kidTop4 from "../../../assets/KidsTopCategories/img4.png";
// import kidTop5 from "../../../assets/KidsTopCategories/img5.png";
// // import KidsPageCategories from "../../PageCategories/KidsPageCategories/KidsPageCategories";
import React, { useEffect, useState } from 'react';
import Category from '../../Category/Category';
import { getCategory } from '../../../Api/ApiService';
import HoverCategory from '../../HoverCategory/HoverCategory';
const HoverKidsTopItems = () => {
	const [categories, setCategories] = useState([]);
	const [quantity, setQuantity] = useState(5);
	useEffect(() => {
		const categoryData = async () => {
			const data = await getCategory();
			setCategories(data);
		};
		categoryData();
	}, []);
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

export default HoverKidsTopItems;
