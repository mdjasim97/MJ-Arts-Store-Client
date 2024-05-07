import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CraftDetails = () => {
    const craftData = useLoaderData()
    console.log(craftData)

    const { _id, image, item_name, short_description, price, stockStatus, subcategory_name, rating, user_name, user_email, processing_time, customization } = craftData

    return (
        <div className='mx-2'>
            <h1 className='text-center text-3xl lg:text-5xl font-bold my-5'>Craft Item Details</h1>
            <hr className='h-1 bg-gray-400' />
            <div className="grid grid-cols-1 lg:grid-cols-2 my-5 lg:my-16 gap-10">

                <div className=''>
                    <img src={image} alt="Album" className='rounded-2xl w-full' />
                </div>
                <div className="border-2 rounded-2xl p-5">
                    <h2 className="text-3xl font-bold my-3 py-3 bg-[#23BE0A] text-center text-white">Carft Information</h2>
                    <div className='lg:space-y-3 flex flex-col justify-center'>
                        <h2 className='text-2xl font-bold'>Item : {item_name}</h2>
                        <p> <span className='font-bold'>Description :</span> {short_description}</p>

                        <hr className='my-5 h-1' />

                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <p className=''> <span className='font-bold'>Category :</span> {subcategory_name}</p>
                            <p className='font-bold'> <span>Rating :</span> {rating}</p>
                        </div>

                        <hr className='my-5 h-1 hidden lg:flex' />

                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <p> <span className='font-bold'>Price :</span> {price}</p>
                            <p> <span className='font-bold'>Stock status :</span> {stockStatus}</p>
                        </div>

                        <hr className='my-5 h-1 hidden lg:flex' />

                        <div className='grid lg:grid-cols-2'>
                            <p> <span className='font-bold'>Processing Time :</span> {processing_time}</p>
                            <p> <span className='font-bold'>Customization :</span> {customization}</p>
                        </div>

                        <hr className='my-5 h-1' />

                        <div className=''>
                            <h1 className=' py-2 bg-[#23BE0A] text-center text-white mb-2'>User Information : </h1>
                            <div className='grid grid-cols-2'>
                                <p>User Name : {user_name}</p>
                                <p>Email : {user_email}</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default CraftDetails;