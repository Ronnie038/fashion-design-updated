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

export { getCategoryByName };
