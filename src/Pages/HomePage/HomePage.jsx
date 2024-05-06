import React from 'react';
import Bannar from '../../Component/Banner/Bannar';
import { useLoaderData } from 'react-router-dom';
import CraftCard from '../../Component/CraftCard/CraftCard';
import Footer from '../../Component/Footer/Footer';

const HomePage = () => {
    const craftitem = useLoaderData()
    console.log(craftitem)
    return (
        <div>
            <Bannar />

            <div className='text-center my-10 space-y-3'>
                <h1 className='text-4xl font-bold'>Craft Items Section </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, autem.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    craftitem.slice(0,6).map((craft, index) => <CraftCard
                        key={index}
                        craftData={craft}
                    ></CraftCard>)
                }
            </div>


            {/* Testimonial  */}
            <div className='lg:my-20 my-10'>
                <section className=" bg-gray-200 text-gray-800">
                    <div className="container flex flex-col items-center mx-auto md:p-10 md:px-12">
                        <h1 className="p-4 text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
                        <p className="p-4 font-semibold leading-none text-center">What our customers are saying about us</p>
                    </div>
                    <div className="container grid grid-cols-1 lg:grid-cols-3  items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-[#23BE0A]">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>I have bought products from this shop before. The company supplied me with excellent products at the right time. I wish you success.
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-[#23BE0A]">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#23BE0A] text-gray-50">
                                <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300" />
                                <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                                <p className="text-sm uppercase">Aliquam illum</p>
                            </div>
                        </div>

                        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-[#23BE0A]">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>I have bought products from this shop before. The company supplied me with excellent products at the right time. I wish you success.
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-[#23BE0A]">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#23BE0A] text-gray-50">
                                <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 " />
                                <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                                <p className="text-sm uppercase">Aliquam illum</p>
                            </div>
                        </div>

                        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-[#23BE0A]">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>I have bought products from this shop before. The company supplied me with excellent products at the right time. I wish you success.
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-[#23BE0A]">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#23BE0A] text-gray-50">
                                <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-300" />
                                <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                                <p className="text-sm uppercase">Aliquam illum</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* user questions form submit  */}
            <div className='my-10'>
                <div className="grid p-4 w-full grid-cols-1 gap-8 py-16 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
                    <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                            <div className="text-gray-600">Vivamus in nisl metus? Phasellus.</div>
                        </div>
                        <img src="https://i.postimg.cc/mDM81pKS/loudspeaker-1459128-640.png" alt="" className="p-6 h-96 w-96" />
                    </div>
                    <form noValidate="" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="text-sm">Full name</label>
                            <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" className="w-full p-3 rounded bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm">Message</label>
                            <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-100"></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#23BE0A] text-gray-50">Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default HomePage;