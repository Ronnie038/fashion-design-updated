import { Link } from 'react-router-dom';
// import logo from "../../../assets/logo/UrbanUtopia.png";
import category1 from '../../assets/TopCategory/topCategory1.png';
import category2 from '../../assets/TopCategory/topCategory2.png';
import category3 from '../../assets/TopCategory/topCategory3.png';
import { Helmet } from 'react-helmet';
import { Slide, Fade } from 'react-awesome-reveal';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PdfCompo = ({ pdf }) => {
	const handleDownload = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5000/api/v1/pdf/download?pdf=${pdf.pdfUrl}`,
				{
					responseType: 'blob', // Set the response type to 'blob' for binary data
				}
			);

			// Create a blob object and initiate a download
			const blob = new Blob([response.data], { type: 'application/pdf' });
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = pdf.title; // Set the desired download filename
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<h1>{pdf.title}</h1>
			<button onClick={handleDownload}>Download Pdf</button>
		</>
	);
};

const Home = () => {
	return (
		// home page
		<div>
			<Helmet>
				<title>UrbanUtopia | Home</title>
			</Helmet>
			{/* --------------Start------------------- */}

			{/* --------------End------------------- */}
			<div className='container mx-auto'>
				<div className='flex justify-center items-center my-10'>
					<Link to='/' className=''>
						<p className='logoFont text-[#03384D] text-5xl font-bold'>
							<span className='text-[#3B95B0] logoFont'>Urban</span>Utopia
						</p>
					</Link>
				</div>
				<div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 md:mx-10 mx-10 my-5'>
					<Slide direction='left'>
						<div className='w-full relative customHomeCardHover'>
							<Link to='/women'>
								<img className='w-full' src={category1} alt='UrbanUtopia' />
								<div className='CardHoverItem bg-[#3B95B0] text-white py-3 font-semibold text-xl text-center absolute w-full bottom-0 rounded-t-full uppercase'>
									Women
								</div>
							</Link>
						</div>
					</Slide>
					<Fade>
						<div className='w-full relative customHomeCardHover'>
							<Link to='/men'>
								<img className='w-full' src={category2} alt='UrbanUtopia' />
								<div className='CardHoverItem bg-[#3B95B0] text-white py-3 font-semibold text-xl text-center absolute w-full bottom-0 rounded-t-full uppercase'>
									Men
								</div>
							</Link>
						</div>
					</Fade>
					<Slide direction='right'>
						<div className='w-full relative customHomeCardHover'>
							<Link to='/kids'>
								<img className='w-full' src={category3} alt='UrbanUtopia' />
								<div className='CardHoverItem bg-[#3B95B0] text-white py-3 font-semibold text-xl text-center absolute w-full bottom-0 rounded-t-full uppercase'>
									Kids
								</div>
							</Link>
						</div>
					</Slide>
				</div>
			</div>
		</div>
	);
};

export default Home;
