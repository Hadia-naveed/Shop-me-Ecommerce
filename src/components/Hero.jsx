import React from 'react';
import { ImageList } from "../constants";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='bg-gray-200 relative min-h-screen overflow-hidden dark:bg-gray-800'>

      {/* Background Shape */}
      <div className='absolute bg-blue-500 dark:bg-blue-950
                      h-[700px] w-[700px] 
                      sm:w-[600px] 
                      right-0 
                      rounded-3xl 
                      -top-[60%] 
                      rotate-[135deg] 
                      z-[5]' >
      </div>

      {/* Slider Content */}
      <div className='relative z-[20] w-full h-full flex items-center'>
        <Slider {...settings} className='w-full'>
          {
            ImageList.map((data) => (
              <div key={data.id} className='w-full px-4 py-10 flex justify-center'>
                {/* This is the actual flex container */}
                <div className='flex flex-col sm:flex-row items-center gap-10 max-w-7xl mx-auto'>

                  {/* Image */}
                  <div className='w-full sm:w-1/2 flex justify-center'>
                    <img src={data.img} alt={data.title} className='max-w-[90%] h-auto rounded-xl' />
                  </div>

                  {/* Text */}
                  <div className='w-full sm:w-1/2 text-center sm:text-left space-y-5'>
                    <h1 className='font-bold text-black text-3xl sm:text-5xl leading-tight dark:text-white'>{data.title}</h1>
                    <p className='text-gray-700 text-lg dark:text-white'>{data.description}</p>
                  </div>

                </div>
              </div>
            ))
          }
        </Slider>
      </div>

    </div>
  );
};

export default Hero;
