import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const AddProducts = () => {
	const [sizeGuides, setSizeGuides] = useState([]);
	const [size, setSize] = useState('');
	const [sizeServices, setSizeServices] = useState([]);
	const [selectedImages, setSelectedImages] = useState([]);

	const [formData, setFormData] = useState({});

	const handleAddSizeService = () => {
		if (!size) return;
		setSizeServices([...sizeServices, size]);
		setSize('');
	};

	const handleRemoveSizeService = (index) => {
		const service = [...sizeServices];
		service.splice(index, 1);
		setSizeServices(service);
	};

	const handleSizeValue = (e) => {
		const sizeValue = e.target.value;
		setSize(sizeValue);
	};

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [name]: value });
	};

	console.log(formData);
	console.log(sizeServices);

	const handleImageChange = (e) => {
		let files = e.target.files;
		console.log({ files });
		const imageList = [];
		if (files.length > 5 || selectedImages.length > 5) {
			setSelectedImages([]);
			e.target.value = '';
			alert('image cannot be more than 5 ');
		} else {
			setSelectedImages([...selectedImages, ...files]);
		}
	};

	const handleRemoveSelectedImage = (index) => {
		const images = [...selectedImages];
		const deletedImage = images.splice(index, 1);
		setSelectedImages(images);
	};

	return (
		<div className=' w-11/12 mx-auto' style={{ userSelect: 'none' }}>
			<h1 className='text-3xl my-8 font-semibold'>Add Products</h1>
			<div className='grid md:grid-cols-2  grid-cols-1 w-full gap-8'>
				<div className='w-full'>
					<div className='w-full'>
						<label className='font-semibold cursor-pointer' htmlFor='name'>
							Product Name
						</label>{' '}
						<br />
						<input
							onChange={handleInput}
							className='border w-full border-purple-200 mt-3 p-3 '
							type='text'
							name='name'
							placeholder='Core i7 5th gen Leptop'
							id='name'
						/>
					</div>
					<div className='flex w-full gap-6 mt-6'>
						<div className='w-1/2'>
							<label htmlFor='sku' className='font-semibold cursor-pointer'>
								Product SKU
							</label>{' '}
							<br />
							<input
								onChange={handleInput}
								className='border w-full border-purple-200 p-3 mt-3'
								type='text'
								name='sku'
								placeholder='MEGA-JEWE-177-1'
								id='sku'
							/>
						</div>
						<div className='w-1/2'>
							<label htmlFor='stock' className='font-semibold cursor-pointer'>
								Product Stock
							</label>{' '}
							<br />
							<input
								onChange={handleInput}
								className='border w-full text-center border-purple-200 p-3 mt-3'
								type='number'
								name='stock'
								placeholder='10,000'
								id='stock'
							/>
						</div>
					</div>
					<div className='flex w-full gap-6 mt-6'>
						<div className='w-1/2'>
							<label
								htmlFor='regularPrice'
								className='font-semibold cursor-pointer'
							>
								Product Regular Price
							</label>{' '}
							<br />
							<input
								onChange={handleInput}
								className='border w-full text-center border-purple-200 p-3 mt-3'
								type='number'
								name='regularPrice'
								placeholder='1250 ৳ '
								id='regularPrice'
							/>
						</div>
						<div className='w-1/2'>
							<label
								htmlFor='offerPercentage'
								className='font-semibold cursor-pointer'
							>
								Discount Percentage
							</label>{' '}
							<br />
							<input
								onChange={handleInput}
								className='border w-full text-center  border-purple-200 p-3 mt-3'
								type='number'
								name='offerPercentage'
								placeholder='10%'
								id='offerPercentage'
							/>
						</div>
					</div>
					<div className='flex w-full gap-6 mt-6'>
						<div className='w-1/2'>
							<label
								htmlFor='freeDelivery'
								className='font-semibold cursor-pointer'
								style={{ userSelect: 'none' }}
							>
								Free Delivery
							</label>{' '}
							<br />
							<input
								onChange={handleInput}
								className='border w-[20px]   border-purple-200 bg-gray-700 h-[20px] p-3 mt-3'
								type='checkbox'
								name='freeDelivery'
								placeholder='Free Delivery'
								id='freeDelivery'
							/>
						</div>
					</div>

					<div className='mt-6'>
						<label className='font-semibold cursor-pointer'>
							Mega Offer Name
						</label>{' '}
						<br />
						<input
							onChange={handleInput}
							className='border w-full justify-between border-purple-200  mt-2 p-3 '
							type='text'
							name='megaOffer'
							placeholder='Eid Festival Mega offer   '
							id=''
						/>
					</div>

					<div className='mt-6 '>
						<div className='flex gap-8 items-center'>
							<label className='font-semibold cursor-pointer '>
								Create Size Guide
							</label>
							<div className='space-x-5'>
								{sizeServices?.map((item, index) => (
									<span key={index}>
										{item}{' '}
										<button
											onClick={() => handleRemoveSizeService(index)}
											className='btn px-2 border-l border-0 bg-transparent hover:bg-transparent rounded-none'
										>
											<Icon
												icon='lucide:delete'
												className='text-xl text-red-700'
											/>
										</button>
									</span>
								))}
							</div>
						</div>

						<div className='flex'>
							<div className='w-full'>
								<div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap items-center'>
									<div className='w-full border'>
										<div className='flex justify-center items-center'>
											<input
												onChange={(e) => handleSizeValue(e)}
												value={size}
												type='text'
												placeholder='Size'
												className='w-full p-3 rounded-none text-center'
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='text-2xl flex justify-center items-center'>
								<button
									onClick={handleAddSizeService}
									className='btn bg-[#282B35] text-white rounded-none hover:bg-[#3B95B0]'
								>
									<Icon icon='icomoon-free:plus' />
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* secon ............ */}
				<div className='w-full'>
					<div className='flex  gap-6'>
						<div className='w-full'>
							<label className=' font-semibold cursor-pointer'>
								Product Image
							</label>{' '}
							<br />
							<input
								autoComplete='off'
								required
								type='file'
								name='images'
								accept='image/*'
								multiple
								onChange={handleImageChange}
								// onBlur={handleInputBlur}
							/>
							<br />
							<div className='flex flex-wrap my-2'>
								{selectedImages.map((image, index) => (
									<div key={index} className='relative'>
										<img
											src={URL.createObjectURL(image)}
											alt={`Preview ${index}`}
											style={{
												maxWidth: '100px',
												maxHeight: '100px',
												margin: '5px',
											}}
										/>
										<Icon
											icon='lucide:delete'
											className='text-xl text-red-700 absolute cursor-pointer top-0 right-0'
											onClick={() => handleRemoveSelectedImage(index)}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='w-full mt-14'>
						<label htmlFor='brand' className=' font-semibold cursor-pointer'>
							Product Brand{' '}
						</label>{' '}
						<br />
						<input
							className='border w-full border-purple-200 p-3 mt-3'
							type='text'
							name='brand'
							placeholder='Apex,Bata'
							id='brand'
						/>
					</div>
					<div className='flex w-full gap-6 mt-6'>
						<div className='w-1/2'>
							<label className=' font-semibold cursor-pointer'>
								Product Category
							</label>{' '}
							<br />
							<input
								className='border w-full border-purple-200  p-3 mt-3 '
								type='text'
								name=''
								placeholder='MEGA-JEWE-177-1'
								id=''
							/>
						</div>
						<div className='w-1/2'>
							<label className='font-semibold cursor-pointer'>
								Product Sub Category
							</label>{' '}
							<br />
							<input
								className='border w-full border-purple-200 p-3 mt-3'
								type='text'
								name=''
								placeholder='MEGA-JEWE-177-1 '
								id=''
							/>
						</div>
					</div>
					<div className='flex w-full gap-6 mt-6'>
						<div className='w-1/2'>
							<label className=' font-semibold cursor-pointer'>
								Discount Amount
							</label>{' '}
							<br />
							<input
								className='border w-full border-purple-200 p-3 mt-3'
								type='text'
								name=''
								placeholder='125 ৳'
								id=''
							/>
						</div>
						<div className='w-1/2'>
							<label className=' font-semibold cursor-pointer'>
								New Discount Price
							</label>{' '}
							<br />
							<input
								className='border w-full border-purple-200 p-3 mt-3'
								type='text'
								name=''
								placeholder='1125 ৳'
								id=''
							/>
						</div>
					</div>
					<div className='flex w-full gap-6 mt-6'>
						<div className='w-1/2'>
							<label className=' font-semibold cursor-pointer'>
								Inside Area{' '}
							</label>{' '}
							<br />
							<input
								className='border w-full border-purple-200 p-3 mt-3'
								type='text'
								name=''
								placeholder='60 ৳ '
								id=''
							/>
						</div>
						<div className='w-1/2'>
							<label className=' font-semibold cursor-pointer'>
								Out Side Area
							</label>{' '}
							<br />
							<input
								className='border w-full border-purple-200 p-3 mt-3'
								type='text'
								name=''
								placeholder='100 ৳ '
								id=''
							/>
						</div>
					</div>
					<div className='flex w-full gap-6 mt-6'>
						<div className='w-1/2'>
							<label className=' font-semibold cursor-pointer'>
								Start Date
							</label>{' '}
							<br />
							<input
								className='border w-full border-purple-200 p-3 mt-2'
								type='date'
								name=''
								placeholder='12.00 am 29 July 2023  '
								id=''
							/>
						</div>
						<div className='w-1/2'>
							<label className=' font-semibold cursor-pointer'>
								Ending Date
							</label>{' '}
							<br />
							<input
								className='border w-full border-purple-200 p-3 mt-2'
								type='date'
								name=''
								placeholder='12.00 am 07 Aug 2023 '
								id=''
							/>
						</div>
					</div>

					<div className='mt-6'>
						<label className=' font-semibold cursor-pointer'>Sub Details</label>{' '}
						<br />
						<div className='flex'>
							<div className='w-full'>
								<div className='flex items-center'>
									<div className='w-full border'>
										<input type='text' className='w-full p-3 rounded-none' />
									</div>
								</div>
							</div>
							<div className='text-2xl flex justify-center items-center'>
								<button className='btn bg-[#282B35] text-white rounded-none hover:bg-[#3B95B0]'>
									<Icon icon='icomoon-free:plus' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-6'>
				<label className=' font-semibold cursor-pointer'>Product Name</label>{' '}
				<br />
				<textarea
					className='border p-4 w-full'
					placeholder='message'
					name='most'
					id=''
					cols='30'
					rows='10'
				></textarea>
			</div>

			<div className='flex justify-end my-10'>
				<button className='flex justify-center btn items-center bg-[#282B35] hover:bg-[#3B95B0] rounded-none py-3 px-8 text-[#F5F5F5]'>
					Submit
				</button>
			</div>
		</div>
	);
};

export default AddProducts;
