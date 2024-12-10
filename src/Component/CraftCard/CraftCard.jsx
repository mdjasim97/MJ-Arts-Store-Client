import React, { useState } from "react";
import { Link } from "react-router-dom";

const CraftCard = ({ craftData }) => {
  const {
    _id,
    image,
    item_name,
    short_description,
    price,
    stockStatus,
    subcategory_name,
    rating,
  } = craftData;

  // const cardlenght = craftData.slice(0,6)
  // console.log(cardlenght)

  return (
    <div className="card shadow-xl m-2">
      <div className="flex-grow">
        <img src={image} alt="Craft item picture" className="w-full" />

        <div className="flex justify-between p-2 font-raleway font-bold">
          <h2>#{subcategory_name}</h2>
          <p className=" text-white bg-orange-400 px-2 rounded-sm">
            {stockStatus}
          </p>
        </div>
        <div className="px-2 lg:px-4 space-y-2">
          <h2 className="card-title font-bold text-2xl font-Alegreya">
            {item_name.length > 30 ? item_name.slice(0, 30) + "..." : item_name}
          </h2>
          <p className="font-raleway">{short_description}</p>
        </div>
      </div>

      <Link to={`details/${_id}`} className="px-2 lg:px-4">
        <div className="flex justify-between items-center my-2">
          <p className="text-xl font-Alegreya font-bold">Price : {price} $</p>
          <div className="flex items-center">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-base ml-2 font-bold">{rating}</p>
          </div>
        </div>
        <button className="btn bg-orange-400 text-white w-full text-xl mb-5">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default CraftCard;
