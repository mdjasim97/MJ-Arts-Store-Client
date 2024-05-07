import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/ContextProvider';

const AddCraft = () => {

    const {user} = useContext(AuthContext)


    const [category, setCategory] = useState(" ")
    const [customaization, setCustomaization] = useState(" ")
    const [processTime, setProcessTime] = useState(" ")
    const [stock, setStock] = useState(" ")


        const categoryOptions = (e) => {
            setCategory(e.target.value)
        }

        const customaizationOptions = (e) => {
            setCustomaization(e.target.value)
        }

        const processingTimeOptions = (e) => {
            setProcessTime(e.target.value)
        }

        const handleStockOptions = (e) => {
            setStock(e.target.value)
        }


    const handleAddCraftItem = (e) => {
        e.preventDefault()

        

        

        const form = e.target
        const item_name = form.craftName.value;
        const subcategory_name = category;
        const short_description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = customaization;
        const processing_time = processTime;
        const stockStatus = stock;
        const user_name = form.userName.value;
        const user_email = form.email.value;
        const image = form.photo.value;

        const newCraft = {item_name, subcategory_name, short_description, price, rating, customization, processing_time, stockStatus, user_name, user_email, image }
        console.log(newCraft)


        fetch("http://localhost:4000/craftAdd",{
            method : "post",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(newCraft)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Successfull",
                    text: "New Craft Item Added Successfully.",
                    icon: "success"
                });
            }
        })

    }

    

    

    
    return (
        <div>
            <div className='bg-base-200 p-2 lg:p-28'>
                <div className='bg-white lg:px-20 rounded-3xl'>
                    <div className='space-y-3 py-5'>
                        <h1 className='text-4xl text-center mt-5 font-bold'>Add Carft Item Form </h1>
                        <p className='text-center'>Add your new craft item and all field required be carefully</p>
                    </div>
                    <form onSubmit={handleAddCraftItem} className='space-y-4'>

                        <div className='grid grid-cols-1 lg:grid-cols-2 px-2 lg:gap-10'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Craft name : </span>
                                </label>
                                <input type="text" name="craftName" placeholder="Enter craft title name" className="input bg-base-200 w-full text-lg" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Sub-Category</span>
                                </label>
                                <select onChange={categoryOptions} className="select select-bordered w-full bg-base-200 text-lg">
                                    <option selected disabled>Select Subcategory</option>
                                    <option value="Landscape Painting">Landscape Painting</option>
                                    <option value="Portrait Drawing">Portrait Painting</option>
                                    <option value="Watercolour Painting">Watercolour Painting</option>
                                    <option value="Oil Painting">Oil Painting</option>
                                    <option value="Charcoal Sketching">Charcoal Sketching</option>
                                    <option value="Cartoon Drawing">Cartoon Drawing</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex justify-between px-2 lg:gap-10'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Short description </span>
                                </label>
                                <textarea type="text" name="description" placeholder="Craft item short description" className="input bg-base-200 resize-none h-24 w-full text-lg" required />
                            </div>
                        </div>


                        <div className='grid grid-cols-1 lg:grid-cols-3 px-2 lg:gap-10'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Price : </span>
                                </label>
                                <input type="text" name="price" placeholder="Enter craft price" className="input bg-base-200 w-full text-lg" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Rating : </span>
                                </label>
                                <input type="text" name="rating" placeholder="Give craft rating" className="input bg-base-200 w-full text-lg" required />
                            </div>


                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Customization : </span>
                                </label>
                                <select onChange={customaizationOptions} className="input bg-base-200 w-full text-lg">
                                    <option selected disabled>Select Yes/No</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>


                        <div className='grid grid-cols-1 lg:grid-cols-3 px-2 lg:gap-10'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Processing Time : </span>
                                </label>
                                <select onChange={processingTimeOptions} className="input bg-base-200 w-full text-lg">
                                    <option selected disabled>Select Delivary Options</option>
                                    <option value="1-3 days">1-3 business days</option>
                                    <option value="4-7 days">4-7 business days</option>
                                    <option value="1-2 week">1-2 weeks</option>
                                    <option value="3-5 week">3-6 week</option>
                                </select>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">User Name </span>
                                </label>
                                <input type="text" name="userName" defaultValue={user?.displayName} placeholder="Enter your Name" className="input bg-base-200 w-full text-lg" required />
                            </div>


                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">User email </span>
                                </label>
                                <input type="text" name="email" defaultValue={user?.email} placeholder="Enter your email" className="input bg-base-200 text-lg w-full" required />
                            </div>
                        </div>


                        <div className='grid grid-cols-1 lg:grid-cols-3 px-2 gap-10'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Stock Status : </span>
                                </label>
                                <select onChange={handleStockOptions} className="input bg-base-200 w-full text-lg">
                                    <option selected disabled>Seclect stock status</option>
                                    <option value="In stock">In stock</option>
                                    <option value="Made to Order">Made to Order</option>

                                </select>
                            </div>
                            
                            <div className="grid lg:col-span-2 form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Craft Photo URL </span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter craft photo URL" className="input bg-base-200 w-full text-lg" required />
                            </div>
                        </div>


                        <div className="flex justify-center">
                            <button className="btn bg-[#23BE0A] my-5 text-white">Add Craft Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCraft;