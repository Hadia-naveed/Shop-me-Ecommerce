import React from 'react'
import { ProductsData } from '../constants'
import { FaStar } from "react-icons/fa6";


const Products = () => {
  return (
    <div className='mt-8'>
      <div className='text-center'> 
        <h1 className='font-bold text-4xl md:text-5xl'>Our Products</h1>
        <p className='font-bold mt-2'>Trendy Products for you</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center px-6 md:px-12 gap-x-5 mt-7'>
          {
            ProductsData.map((data)=>(
              <div key={data.id} className='flex flex-col bg-gray-100 dark:bg-gray-700 shadow-2xl rounded-xl pt-4 pb-2 px-2 h-[300px] w-[200px] md:w-1/5 hover:scale-105 transition-transform duration-300 hover:shadow-3xl mt-4 md:mt-2'>
                <img src={data.img} alt="product img" className='h-[170px] rounded-[8px] w-full object-cover' />
                <h3 className='font-semibold mt-2 dark:text-white'>{data.title}</h3>
                <div className='flex items-center gap-2 '>
                  <FaStar className='text-yellow-300 dark:text-yellow-400'/> <span className='dark:text-white'>{data.rating}</span>

                </div>
              </div>

            ))
          }
        </div>

        <div className='text-center mt-10'>
  <button className='bg-blue-400 text-white rounded-3xl px-6 py-3 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 transition'>View all Products</button>
</div>
      
    </div>
  )
}

export default Products
