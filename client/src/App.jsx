import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './store/slices/CategorySlices';
import { useEffect } from 'react';

function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
