import React from 'react'
import banner from "../assets/4547829.jpg";
import { GrSecure } from "react-icons/gr"
import { GiFoodTruck } from "react-icons/gi"
import { IoFastFood } from "react-icons/io5"
const Banner = () => {
    return (
        <section className='p-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
                <div className='p-10'><img src={banner} alt="winter-sale-banner"  /></div>
                <div className='flex flex-col lg:mt-18 md:mt-12 text-center md:items-start items-cente'>
                    <h2 className='fony-roboto font-bold text-[33px] mb-2 md:whitespace-nowrap md:text-[39px] lg:text-[43px]'>Winter Sale Upto 50% off</h2>

                    <ul className='flex flex-col items-start gap-2 mt-2 md:mt-6 md:gap-3 lg:gap-4'>
                        <li className="flex items-center justify-center gap-1.5">
                            <GrSecure className='text-[33px] font-bold bg-blue-300  p-[5px] block-inline rounded-3xl ' /> <span className='font-semibold text-[22px]'>Quality Products</span>
                        </li>
                        <li className="flex items-center justify-center gap-1.5">
                            <IoFastFood className='text-[33px] font-bold bg-amber-200 p-[5px] block-inline rounded-3xl ' /> <span className='font-semibold text-[22px]'>Fast Delivery</span>
                        </li>
                        <li className="flex items-center justify-center gap-1.5">
                            <GiFoodTruck className='text-[33px] font-bold bg-pink-200  p-[5px] block-inline rounded-3xl ' /> <span className='font-semibold text-[22px]'>Easy Payment method</span>
                        </li>
                        <li className="flex items-center justify-center gap-1.5">
                            <GiFoodTruck className='text-[33px] font-bold bg-blue-300  p-[5px] block-inline rounded-3xl ' /> <span className='font-semibold text-[22px]'>Quality Products</span>
                        </li>
                    </ul>


                </div>
            </div>

        </section>
    )
}

export default Banner
