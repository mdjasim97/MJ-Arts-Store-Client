import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CraftCard from '../../Component/CraftCard/CraftCard';

const CraftItemAll = () => {

    const loadedCraft = useLoaderData()
    console.log(loadedCraft)

    return (
        <div className='border-4 my-20 rounded-3xl'>
            <div className='text-center space-y-3 my-10'>
                <h1 className='text-4xl font-bold'>All Art & Craft Item</h1>
                <p>Choose your favirawite craft item.</p>
            </div>

            {/* table create */}
            <div className='my-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='font-bold'>
                                <th className='text-lg'>SL</th>
                                <th className='text-lg'>Name</th>
                                <th className='text-lg'>Stock Status</th>
                                <th className='text-lg'>Rating</th>
                                <th className='text-lg'>Processing Time</th>
                                <th className='text-lg'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {

                                loadedCraft.map((Item, index) => <tr key={Item._id}>
                                    <th>{index + 1}</th>
                                    <td>{Item.item_name}</td>
                                    <td>{Item.stockStatus}</td>
                                    <td>{Item.rating}</td>
                                    <td>{Item.processing_time}</td>
                                    <td className='font-bold'>{Item.price} $</td>
                                    <td>
                                        <div>
                                            <Link to={`/details/${Item._id}`} ><button className='btn bg-[#23BE0A] text-white'>View Details</button></Link>
                                        </div>
                                    </td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default CraftItemAll;