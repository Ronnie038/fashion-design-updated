const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');

require('./config/passport');
const app = express();

// Middleware
app.use('/images', express.static('images'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
	session({
		secret: process.env.ACCESS_TOKEN_SECRET, // Change this to a secure secret key
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: false, // Set to true in a production environment with HTTPS
			httpOnly: true,
			// domain:'hosted domain url',

			expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
			path: '/',
		},
	})
);

app.use(passport.initialize());
app.use(passport.session());

let allowedOrigins = [];

if (process.env.NODE_ENV === 'development') {
	// Development environment
	allowedOrigins = ['http://localhost:5173'];
} else {
	// Production environment
	// allowedOrigins = ["https://it-product-client.netlify.app"];
}

app.use(
	cors({
		origin: allowedOrigins,
		methods: 'GET,POST,PUT,DELETE',
		credentials: true,
	})
);

// Routes
const userRoute = require('./routes/user.route');
const paymentRoute = require('./routes/payment.route');
const orderRoute = require('./routes/order.route');
const productRoute = require('./routes/product.route');
const cartRoutes = require('./routes/cart.route');
const bannerRoutes = require('./routes/banner.route');
const categoryRoutes = require('./routes/category.route');

// Root route
app.get('/', (req, res) => {
	return res.send('hello from behind');
});

// API Routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/payment', paymentRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/products', productRoute);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/banner', bannerRoutes);
app.use('/api/v1/category', categoryRoutes);

// Error handling middleware
// app.use((err, req, res, next) => {
// 	console.error(err.stack);
// 	res.status(500).send('Something broke!');
// });

module.exports = app;
