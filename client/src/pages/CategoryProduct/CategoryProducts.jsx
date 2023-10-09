import React from 'react';
import { useParams } from 'react-router-dom';
import PageProducts from '../../components/PageNewItems/PageProducts';

const CategoryProducts = () => {
	const { section, subcategory } = useParams();
	console.log({ section, subcategory });
	return (
		<div>
			<PageProducts section={section} subCategory={subcategory} />
		</div>
	);
};

export default CategoryProducts;
