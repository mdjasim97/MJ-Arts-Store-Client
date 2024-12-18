import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const MyCraftList = () => {

    const { user } = useContext(AuthContext)
    console.log(user)

    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`https://art-craft-store-server-ruddy.vercel.app/myCraft/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data)
            })
    }, [user])


    const handleDeleteCraft = (id) => {
        console.log(`delete id : ${id}`)



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://art-craft-store-server-ruddy.vercel.app/delete/${id}`, {
                    method: "delete",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Successful",
                                text: "Craft item delate successful.",
                                icon: "success"
                            });

                            const remaining = item.filter(item => item._id !== id)
                            setItem(remaining)
                        }
                    })

            }
        });

    }

    return (
        <div className='lg:my-24 my-5'>
            <h1 className='text-center text-3xl lg:text-4xl font-bold py-4'>My Craft List</h1>
            <hr className='h-1 bg-gray-400' />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 lg:mt-10 m-2'>
                {
                    item.map(item => <div key={item._id}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 p-2 shadow-xl border-2">
                            <div>
                                <img src={item.image} alt="Shoes" className='h-full ' />
                            </div>

                            <div className="lg:px-4 space-y-2 lg:space-y-3 lg:col-span-2">
                                <div className='flex justify-between p-2'>
                                    <h1 className='font-bold text-xl'>#{item.subcategory_name}</h1>
                                    <h1 className='font-bold lg:text-lg p-2 text-white bg-[#23BE0A] rounded-lg'>{item.stockStatus}</h1>
                                </div>
                                <h2 className="card-title font-bold text-2xl">Title : {item.item_name.length > 20 ? item.item_name.slice(0, 20) + "..." : item.item_name}</h2>
                                <p className='font-bold text-xl'>Customization : {item.customization}</p>
                                <div className="flex justify-between items-center">
                                    <h1 className="text-3xl font-bold">
                                        Price : {item.price}
                                    </h1>
                                    <div className="flex items-center">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p className='text-xl ml-2 font-bold'>{item.rating}</p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <Link to={`/update/${item._id}`}><button className='btn bg-[#23BE0A] text-white w-full text-xl mb-5'>Update</button></Link>
                                    <button onClick={() => handleDeleteCraft(`${item._id}`)} className='btn bg-[#e67737] text-white w-full text-xl mb-5'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MyCraftList;