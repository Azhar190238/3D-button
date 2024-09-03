import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Button = () => {
    return (
        <div className='my-96 mx-20 w-96 h-96 bg-[#D9D9D9]'>
            <div className='relative border-2 h-[50px] border-red-500 max-w-[184px] rounded-[4px]  hover:text-white group'>
                <div className='flex font-chakra rounded-[4px] hover:rounded-[2px] absolute bg-[#fff] hover:bg-red-500 text-[16px] px-[26px] whitespace-pre py-[12px] font-semibold bottom-2 left-2 transition-all duration-300 group-hover:bottom-0 group-hover:left-0'>
                    <p className=''>Explore More</p>
                    <FiArrowUpRight className="text-red-500 mt-1 ml-2 text-xl font-extrabold transition-transform duration-300 group-hover:rotate-45 group-hover:text-white" />
                </div>
            </div> 
        </div>
    );
};

export default Button;
