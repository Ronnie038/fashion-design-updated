import React from 'react';

const CustomInput = ({ onChange, type, name, placeholder, id = '' }) => {
	return (
		<input
			onChange={onChange}
			className='border w-full border-purple-200  p-3 mt-3 '
			type={type}
			name={name}
			placeholder={placeholder}
			id={id}
		/>
	);
};

export default CustomInput;
