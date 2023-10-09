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
import Orders from '../pages/Dashboard/Orders/Orders';
import Products from '../pages/Dashboard/Products/Products';
import AddProducts from '../pages/Dashboard/Products/AddProducts';
import Delivery from '../pages/Dashboard/Delivery';
import ContactDetails from '../pages/Dashboard/ContactDetails';
import Faq from '../pages/Dashboard/Faq';
import UserProfile from '../pages/UserProfile/UserProfile';
import Women from '../pages/MainPages/Women/Women';
import Men from '../pages/MainPages/Men/Men';
import Kids from '../pages/MainPages/Kids/Kids';
import AddCategory from '../pages/Dashboard/Category/AddCategory';
import Checkout from '../pages/Checkout/Checkout';
import AdminRoutes from './AdminRoute';
import UpdateProduct from '../pages/Dashboard/Products/UpdateProduct';
import Order from '../pages/UserProfile/Order';
import OrderDetails from '../components/OrderDetails/OrderDetails';
import UpdateOrder from '../pages/Dashboard/Orders/UpdateOrder';
import CategoryProducts from '../pages/CategoryProduct/CategoryProducts';

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
				path: ':section/:subcategory',
				element: <CategoryProducts />,
			},
			{
				path: 'userProfile',
				element: (
					<PrivateRoute>
						<UserProfile />
					</PrivateRoute>
				),
			},
			{
				path: 'order/:id',
				element: <OrderDetails />,
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
				element: <Cart />,
			},
			{
				path: '/checkOut',
				element: (
					<PrivateRoute>
						<Checkout />
					</PrivateRoute>
				),
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
				element: (
					<PrivateRoute>
						<AdedAdress></AdedAdress>
					</PrivateRoute>
				),
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
		element: (
			<AdminRoutes>
				<Dashboard></Dashboard>
			</AdminRoutes>
		),

		children: [
			{
				path: '',
				index: true,
				element: <DashboardDetails></DashboardDetails>,
			},
			{
				path: 'dashboard',
				element: <DashboardDetails></DashboardDetails>,
			},

			{
				path: 'orders',
				element: <Orders></Orders>,
			},
			{
				path: 'orders/:id',
				element: <UpdateOrder />,
			},
			{
				path: 'products',
				element: <Products></Products>,
			},
			{
				path: 'addproducts',
				element: <AddProducts></AddProducts>,
			},
			{
				path: 'updateProduct/:id',
				element: <UpdateProduct />,
			},
			{
				path: 'addcategories',
				element: <AddCategory />,
			},
			{
				path: 'delivery',
				element: <Delivery></Delivery>,
			},
			{
				path: 'contact',
				element: <ContactDetails></ContactDetails>,
			},
			{
				path: 'faq',
				element: <Faq></Faq>,
			},
		],
	},
	{
		path: 'order/:id',
		element: <OrderDetails />,
	},
]);

export default router;
