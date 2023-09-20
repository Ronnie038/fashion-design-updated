import React from "react";

const Category = ({ category }) => {
  const { id, image, title } = category;
  // console.log(image);
  return (
    <div className="w-full bg-base-100">
      <figure className="">
        <img
          className="object-fit "
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-xl font-medium">{title}</h2>
      </div>
    </div>
    

  );
};

export default Category;
