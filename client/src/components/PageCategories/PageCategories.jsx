import React, { useEffect, useState } from 'react';

import { Slide } from 'react-awesome-reveal';
import Category from './Category';
import Loading from '../Loading/Loading';
import { getCategoryByName } from '../../Api/categoryServices';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import Category from './Category';

const PageCategories = ({ categoryName }) => {
	// const [categories, setCategories] = useState([]);
	const categories = useSelector((state) => state.categories);
	const [quantity, setQuantity] = useState(5);
	const [categoryData, setCateGoryData] = useState();

	useEffect(() => {
		const data = categories.data?.find(
			(category) => category.name?.toLowerCase() === categoryName?.toLowerCase()
		);
		setCateGoryData(data);
	}, [categoryName, categories.status]);

	console.log(categoryData);
	if (categories.status === 'loading') return <Loading />;
	return (
		<div className='container w-[80%] mx-auto'>
			<div className='text-center py-20'>
				<h3 className='text-3xl font-medium'>Top Categories</h3>
			</div>
			<div className=' grid grid-cols-1  lg:grid-cols-5 xl:mx-0 lg:mx-5 md:mx-5 md:grid-cols-3 gap-5 justify-center'>
				{categoryData?.subcategories
					?.slice(0, quantity)
					?.map((category, idx) => (
						<Slide key={idx}>
							<Link to={`/${categoryData.name}/${category.title}`}>
								<Category category={category}></Category>
							</Link>
						</Slide>
					))}
			</div>

			<div className='flex text-end lg:justify-end md:justify-end justify-center xl:mr-0 lg:mr-5 md:mr-5 mt-10'>
				<button
					onClick={() => setQuantity(categoryData?.subcategories?.length)}
					className='bg-[#0C4E67] text-white py-4 px-10 text-2xl'
				>
					More
				</button>
			</div>
		</div>
	);
};

export default PageCategories;
