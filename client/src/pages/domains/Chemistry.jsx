import {React} from 'react'

import { images } from '../image';

const Chemistry= () => {

    return (
            <div  className='  w-[15%] h-[30vh] rounded-[20px] bg-[#e9e9e9] cursor-pointer border-[1px] border-[#d0d0d0]'>
                <img className=' w-full h-full rounded-t-2xl' src={images} alt="image" />
                <button className='w-[100%] h-[30px] bg-[#000000 ] rounded-b-2xl border-[#000000 ] p-2 mt-[2px]'> 
                   Chimistry
                   onClick={handleClick}
                </button>
            </div>
    )
    
}
export default Chemistry

