import React from 'react';

const HoverCategory = ({category}) => {
    const { id, image, title } = category;
    return (
        <div className="w-40 bg-base-400">
            <figure className="">
                <img src={image} className='w-full' alt="Shoes" />
            </figure>
            <div className="flex justify-center my-5">
                <h2 className="text-[17px] font-medium text-center">{title}</h2>
            </div>
        </div>
    );
};

export default HoverCategory;