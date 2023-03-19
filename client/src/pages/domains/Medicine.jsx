import React, { useState, useEffect } from 'react'

import { images } from '../image';


const Medicine = () => {
   
    return(
        <div id='Medicine' className='relative z-10 w-[15%] h-[30vh] rounded-[20px] bg-[#e9e9e9] cursor-pointer border-[1px] border-[#d0d0d0]'>
            <img className=' w-full h-full rounded-t-2xl' src={image} alt="image" />
            <button className='w-[100%] h-[30px] bg-[#6f6f6f] rounded-b-2xl border-[#6f6f6f] mt-[2px]'> Economic</button>
        </div>
    )
}

export default Medicine
