/* eslint-disable react/prop-types */
import React from "react";

const BooksCard = ({ book }) => {
  const { image, name, rating, author } = book;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-lg font-bold">{name}</h2>
         <div className="flex justify-between"> 
         <p>{author}</p>
         <p className="text-right">{rating}</p>
         </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
