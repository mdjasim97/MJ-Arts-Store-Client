import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CraftCard = ({ craftData }) => {

    const { _id, image, item_name, short_description, price, stockStatus, subcategory_name, rating } = craftData

    // const cardlenght = craftData.slice(0,6)
    // console.log(cardlenght)

    return (
        <div>
            <div className="card shadow-xl">
                <figure><img src={image} alt="Shoes" className='w-full h-52' /></figure>
                <div className='flex justify-between p-2'>
                    <h1 className='font-bold text-xl'>#{subcategory_name}</h1>
                    <h1 className='font-bold text-xl p-2 text-white bg-[#23BE0A] rounded-lg'>{stockStatus}</h1>
                </div>
                <div className=" px-4 space-y-3">
                    <h2 className="card-title font-bold text-2xl">Title : {item_name.length > 20 ? item_name.slice(0, 20) + "..." : item_name}</h2>
                    <p>{short_description}</p>
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold">
                            Price : {price}
                        </h1>
                        <div className="flex items-center">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className='text-xl ml-2 font-bold'>{rating}</p>
                        </div>
                    </div>
                    <div className=''>
                        <Link to={`details/${_id}`}><button className='btn bg-[#23BE0A] text-white w-full text-xl mb-5'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;