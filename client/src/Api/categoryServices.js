const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const getCategoryByName = (categoryName, setFilteredCategory, setLoading) => {
	const getData = async () => {
		try {
			const res = await fetch('../../public/file2.json');
			const data = await res.json();

			const categoryData = data?.find((category) =>
				category.name?.toLowerCase().includes(categoryName?.toLowerCase())
			);
			setFilteredCategory({ ...categoryData });
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	getData();
};

const getAllCategoryService = (setCategories) => {
	const getData = async () => {
		try {
			const res = await fetch(`${apiUrl}/category`);
			const data = await res.json();
			console.log(data);
			if (res.ok) {
				setCategories(data.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	getData();
};

const createCategoryService = (categoryObj, toast, setRefetch) => {
	const create = async () => {
		try {
			const res = await fetch(`${apiUrl}/category`, {
				method: 'POST',
				// headers: { 'Content-Type': 'application/json' },
				body: categoryObj,
				credentials: 'include',
			});
			const data = await res.json();
			if (res.ok) {
				setRefetch((prev) => !prev);
				toast.success('category added');
			}
		} catch (error) {
			console.log(error);
		}
	};
	create();
};

const deleteCategoryService = (id, category, toast) => {
	const del = async () => {
		try {
			const res = await fetch(`${apiUrl}/category/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'Application/json',
				},
				body: JSON.stringify(category),
			});
			const data = await res.json();
			if (res.ok) {
				toast.success('subcategory deleted');
			}
		} catch (error) {
			console.log(error);
		}
	};
	del();
};

export {
	getCategoryByName,
	getAllCategoryService,
	createCategoryService,
	deleteCategoryService,
};
