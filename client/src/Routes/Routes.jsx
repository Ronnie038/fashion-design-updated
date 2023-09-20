import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';

import OrderDone from '../pages/OrderDone/OrderDone';
import Login from '../pages/LoginPage/LoginPage';

import Error from '../pages/Error/Error';
import Cart from '../pages/Cart/Cart';
import SingleProductDetails from '../pages/SingleProductDetails/SingleProductDetails';
import PaymentCancel from '../pages/payment/paymentCancel';
import PaymentFail from '../pages/payment/paymentFail';
import PaymentSuccess from '../pages/payment/paymentSucces';
import SignUp from '../pages/SignUp/SignUp';
import AddNewAddress from '../pages/AddNewAddress/AddNewAddress';
import AdedAdress from '../pages/AddNewAddress/AdedAdress';
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword';
import ForgetPasswordRequest from '../pages/ForgetPassword/ForgetPasswordRequest';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard/Dashboard/Dashboard';
import DashboardDetails from '../pages/Dashboard/DashboardDetails';
import Orders from '../pages/Dashboard/Orders';
import Products from '../pages/Dashboard/Products';
import AddProducts from '../pages/Dashboard/AddProducts';
import Delivery from '../pages/Dashboard/Delivery';
import ContactDetails from '../pages/Dashboard/ContactDetails';
import Faq from '../pages/Dashboard/Faq';
import UserProfile from '../pages/UserProfile/UserProfile';
import Women from '../pages/MainPages/Women/Women';
import Men from '../pages/MainPages/Men/Men';
import Kids from '../pages/MainPages/Kids/Kids';
import AddCategory from '../pages/Dashboard/AddCategory';
import Checkout from '../pages/Checkout/Checkout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			// pages
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'women',
				element: <Women />,
			},
			{
				path: 'men',
				element: <Men />,
			},
			{
				path: 'kids',
				element: <Kids />,
			},
			{
				path: 'userProfile',
				element: <UserProfile />,
			},
			{
				path: 'orderDone',
				element: <OrderDone />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: '/signUp',
				element: <SignUp />,
			},
			{
				path: '/user/forget-password/:id',
				element: <ForgetPassword />,
			},
			{
				path: '/user/forgetPasswordRequest',
				element: <ForgetPasswordRequest />,
			},
			{
				path: '/cart',
				element: (
					<PrivateRoute>
						<Cart />
					</PrivateRoute>
				),
			},
			{
				path: '/checkOut',
				element: <Checkout />,
			},
			{
				path: '/product-details/:_id',
				element: <SingleProductDetails />,
			},
			{
				path: '/payment/success/:transId',
				element: <PaymentSuccess />,
			},
			{ path: '/payment/fail', element: <PaymentFail /> },
			{
				path: '/addNewAddress',
				element: <AddNewAddress></AddNewAddress>,
			},
			{
				path: '/adedAddress',
				element: <AdedAdress></AdedAdress>,
			},
			{
				path: '/payment/cancel',
				element: <PaymentCancel />,
			},
			{
				path: '*',
				element: <Error />,
			},
		],
	},
	{
		path: '/dashboard',
		element: <Dashboard></Dashboard>,

		children: [
			{
				path: '/dashboard',
				element: <DashboardDetails></DashboardDetails>,
			},
			{
				path: 'dashboardDetails',
				element: <DashboardDetails></DashboardDetails>,
			},
			{
				path: '/dashboard/orders',
				element: <Orders></Orders>,
			},
			{
				path: '/dashboard/products',
				element: <Products></Products>,
			},
			{
				path: '/dashboard/addproducts',
				element: <AddProducts></AddProducts>,
			},
			{
				path: '/dashboard/addcategories',
				element: <AddCategory />,
			},
			{
				path: '/dashboard/delivery',
				element: <Delivery></Delivery>,
			},
			{
				path: '/dashboard/contact',
				element: <ContactDetails></ContactDetails>,
			},
			{
				path: '/dashboard/faq',
				element: <Faq></Faq>,
			},
		],
	},
]);

export default router;
