import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import { logOut } from '../../../Api/auth';

const Navbar = () => {
	// const user = true;
	const userData = useSelector((state) => state.user);
	const { user, status, error } = userData;

	// const [cartLength, setCartLength] = useState();
	const cartLength = useSelector((state) => {
		return state?.cartItems.cart.length;
	});

	return (
		<div className='lg:mx-0 mx-5 sticky top-0 bg-white z-50'>
			<div className='container mx-auto py-1 xl:px-0 lg:px-2 md:px-5 '>
				<div className='lg:navbar md:navbar px-0'>
					<div className='flex-1  py-5 mx-auto lg:h-14 '>
						<Link to='/' className='text-center'>
							<p className='logoFont text-[#03384D] text-4xl font-bold'>
								<span className='text-[#3B95B0] logoFont'>Urban</span>Utopia
							</p>
						</Link>
					</div>
					<div className='flex-1 items-center lg:gap-5 justify-center gap-3'>
						{/* <div className='form-control relative lg:w-80 md:w-60 w-full'>
							<input
								type='text'
								placeholder='Search Products'
								className=' input input-bordered rounded-full border-black w-full h-10 md:w-auto'
							/>
							<div className='absolute top-2 lg:right-5 md:right-5 right-2 '>
								<Icon className='text-2xl' icon='circum:search' />
							</div>
						</div> */}
						{user._id && user.isAdmin && user.role === 'admin' && (
							<div className='bg-[#3B95B0] p-2 rounded-md text-white'>
								<Link to='/dashboard'>Dashboard</Link>
							</div>
						)}
						<div>
							{user._id ? (
								<>
									<Link to='/userProfile' className=''>
										<div className='rounded-full h-10 w-10 overflow-hidden'>
											{user?.image ? (
												<img
													src={user?.image}
													alt=''
													className='object-contain object-center rounded-full'
												/>
											) : (
												<Icon
													className=' z-50 h-full w-full'
													icon='zondicons:user'
												/>
											)}
										</div>
									</Link>
								</>
							) : (
								<Link
									to='/login'
									className='border rounded-full lg:w-[122px] hover:bg-[#03384D] hover:text-white transition duration-300 ease-in-out font-medium md:w-20 text-2xl md:h-10 lg:h-10 bg-transparent px-5 py-1 border-black'
								>
									login
								</Link>
							)}
						</div>

						<div className='md:w-9 relative hover:scale-110'>
							<Link to='/cart'>
								<Icon
									className='w-full text-5xl'
									icon='fluent:cart-16-regular'
								/>
							</Link>
							<div className='badge bg-[#3B95B0] border-2 gap-2 absolute -top-0 -right-4 text-white'>
								{cartLength}
							</div>
							{/* <div className="badge badge-primary absolute -top-0 -right-8">+99</div> */}
						</div>
						{user._id && (
							<div onClick={logOut} className='btn btn-sm'>
								Logout
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
