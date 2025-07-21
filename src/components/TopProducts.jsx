import React from 'react'
import { FaStar } from "react-icons/fa6";
import { TopProductsData } from '../constants'

const BestProducts = () => {
  return (
    <div className='mt-16'>
       <div className='text-center'> 
       <h1 className='font-bold text-4xl md:text-5xl'>Top Products</h1>
       <p className='font-bold mt-3'>Top Rated Products for you</p>
       </div>

      <div className='flex flex-wrap justify-center gap-8 mt-10'>
        {
          TopProductsData.map((product, index) => (
            <div
              key={product.id}
              className={`relative bg-gray-100  dark:bg-gray-800 hover:bg-black text-center p-6 rounded-3xl shadow-lg w-[280px] transition duration-300 hover:text-white group mt-14`}
            >
              <img
                src={product.img}
                alt={product.title}
                className='w-[150px] mx-auto -mt-20 drop-shadow-xl transition-transform duration-300 group-hover:scale-105'
              />

              <div className='mt-6'>
                <div className='flex justify-center gap-1 mb-2 text-yellow-400'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <h3 className='text-lg font-bold'>{product.title}</h3>
                <p className='text-sm mt-2 px-2 text-gray-500 group-hover:text-white'>
                  {product.description}
                </p>

                <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition'>
                  Order Now
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BestProducts;
