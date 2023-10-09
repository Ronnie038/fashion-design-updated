import { useEffect, useState } from 'react';
import { getIems } from '../../Api/ApiService';
import PageItem from '../PageItems/PageItem';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { Fade } from 'react-awesome-reveal';

import { addToCart } from '../../store/slices/CartSlices';
import 'animate.css';
import { fetchProducts } from '../../store/slices/productsSlices';

const PageProducts = ({ section, subCategory }) => {
	const user = true;
	const dispatch = useDispatch();
	// const [items, setItems] = useState([]);
	const [quantity, setQuantity] = useState(4);
	const [addAnimate, setAddAnimate] = useState([]);

	// console.log(items);
	const itemsData = useSelector((state) => {
		return state.items;
	});
	console.log(subCategory);

	const products = useSelector((state) => state.products);
	console.log(products);
	// toastify
	const notify = () =>
		toast.success('Your Product Added Successfull', {
			style: {
				backgroundColor: '#0C4E67',
				color: 'white',
			},
			className: 'bg-black',
		});
	const handleAddToCart = (item, index, e) => {
		e.preventDefault();

		dispatch(addToCart(item));
		const newAddAnimate = [...addAnimate];
		// console.log(addAnimate);

		newAddAnimate[index] = 'animate__animated animate__fadeOutTopRight z-40';

		setAddAnimate(newAddAnimate);

		if (user) {
			notify();
		}

		setTimeout(() => {
			setAddAnimate('');
		}, 1000);
	};

	useEffect(() => {
		dispatch(fetchProducts({ section, subCategory }));
	}, [section, subCategory]);
	return (
		<div>
			<div className='container w-[80%] mx-auto'>
				<div className='text-center py-20'>
					<h3 className='text-3xl font-medium'>
						New items that you can't miss out on
					</h3>
				</div>
				<div className=' grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 xl:mx-0 lg:mx-5 md:mx-5 mx-5 justify-center'>
					{products?.data?.slice(0, quantity)?.map((item, index) => (
						<Fade key={item._id}>
							<div
								id={index}
								className={`card w-full bg-base-100 drop-shadow-md rounded-none ${addAnimate[index]}`}
							>
								<Link to={`/product-details/${item._id}`}>
									<PageItem item={item}></PageItem>
								</Link>
								<Link
									to={user ? '' : '/login'}
									onClick={(e) => handleAddToCart(item, index, e)}
									className='btn mx-5 my-5 bg-[#3B95B0] text-white hover:bg-[#0C4E67]'
								>
									Add to Cart
								</Link>
							</div>
						</Fade>
					))}
				</div>
				<div className='flex text-end lg:justify-end md:justify-end justify-center xl:mr-0 lg:mr-5 md:mr-5 mt-10'>
					<button
						onClick={() => setQuantity(quantity + 4)}
						className='bg-[#0C4E67] text-white py-4 px-10 text-2xl'
					>
						More
					</button>
				</div>
			</div>
		</div>
	);
};

export default PageProducts;
