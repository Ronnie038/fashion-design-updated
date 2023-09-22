const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const createProduct = (formData, setLoading, toast, form, selectedImages) => {
	const create = async () => {
		try {
			const res = await fetch(`${apiUrl}/products`, {
				method: 'POST',
				// headers: {
				// 	'Content-Type': 'Application/json',
				// },
				credentials: 'include',
				body: formData,
			});
			if (res.ok) {
				toast.success('Product added');
				form.reset();
				selectedImages([]);
			}
			const data = await res.json();
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	create();
};

const updateProduct = (updatedData, id, setLoading, toast) => {
	const update = async () => {
		try {
			const res = await fetch(`${apiUrl}/products/${id}`, {
				method: 'PUT',
				credentials: 'include',
				body: updatedData,
			});
			const data = res.json();
			if (res.ok) {
				toast.success('product Updated');
			}
		} catch (error) {
			toast.error('something went wrong');
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	update();
};

export { createProduct, updateProduct };
