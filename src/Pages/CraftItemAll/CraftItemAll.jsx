import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CraftCard from '../../Component/CraftCard/CraftCard';

const CraftItemAll = () => {

    const loadedCraft = useLoaderData()
    console.log(loadedCraft)

    return (
        <div>
            <div className='text-center space-y-3 my-10'>
                <h1 className='text-4xl font-bold'>All Art & Craft Item</h1>
                <p>Choose your favirawite craft item.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    loadedCraft.map(craft => <div key={craft._id}>

                        <div className="card shadow-xl">
                            <figure><img src={craft.image} alt="Shoes" className='w-full h-52' /></figure>
                            <div className='flex justify-between p-2'>
                                <h1 className='font-bold text-xl'>#{craft.subcategory_name}</h1>
                                <h1 className='font-bold text-xl p-2 text-white bg-[#23BE0A] rounded-lg'>{craft.stockStatus}</h1>
                            </div>
                            <div className=" px-4 space-y-3">
                                <h2 className="card-title font-bold text-2xl">Title : {craft.item_name.length > 20 ? craft["item_name"].slice(0, 20) + "..." : craft.item_name}</h2>
                                <p>{craft.short_description}</p>
                                <div className="flex justify-between items-center">
                                    <h1 className="text-3xl font-bold">
                                        Price : {craft.price}
                                    </h1>
                                    <div className="flex items-center">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p className='text-xl ml-2 font-bold'>{craft.rating}</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <Link to={`details/${craft._id}`}><button className='btn bg-[#23BE0A] text-white w-full text-xl mb-5'>View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CraftItemAll;