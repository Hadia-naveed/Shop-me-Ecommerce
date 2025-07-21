import React from 'react';
import Slider from 'react-slick';
import { TestimonialData } from '../constants'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='py-14 px-4 md:px-12'>
      <h1 className='font-bold  text-2xl md:text-4xl text-center'>What Our Customers Are Saying About Us</h1>
        
      <Slider {...settings}>
        {TestimonialData.map((t) => (
          <div key={t.id} className='px-4 mt-8'>
            <div className='bg-gray-200 dark:bg-gray-300 p-6 rounded-2xl shadow-md max-w-lg mx-auto text-center transition-all'>
              <img
                src={t.img}
                alt={t.name}
                className='w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-gray-300'
              />
              <p className='text-gray-600 text-sm mb-4'>{t.text}</p>
              <h3 className='text-md font-semibold text-gray-800'>{t.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;

