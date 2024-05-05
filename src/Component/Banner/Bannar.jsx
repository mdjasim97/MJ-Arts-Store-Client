import React from 'react';

const Bannar = () => {
    return (
        <div>
            <div className="carousel w-full max-h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/wTqYbxfH/pexels-steve-1070534.jpg" className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/Bbyy6s07/pexels-dibakar-roy-2432543-22643641.jpg" className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/c4fyHgvQ/pexels-agustina-sobnno-81431993-23229781.jpg" className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/YCtVCXKH/pexels-steve-23350735.jpg" className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-5">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;