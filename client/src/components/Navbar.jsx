import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useStateContext } from '../context';
import { CustomButton } from './';
import { logo, menu, search, user_icon } from '../assets';
import { navlinks } from '../constants';
import { defaultAbiCoder } from 'ethers/lib/utils';

const Icon = ({ styles, name, imgUrl, isActive, isNavElement, handleClick }) => (
  <div className={` rounded-[3px] ${isActive && isActive === name && 'text-[#1dc071]'} font-epilogue flex justify-center items-center cursor-pointer ${styles}`} onClick={handleClick}>
    
    {isNavElement ? (
      <span className=''>{name}</span>
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
  <div>
    <div className="flex md:flex-row   mb-[0]  w-[94vw] ">
      
     <div className="flex md:flex-row   w-[94vw]">
      <Link to="/">
        <Icon styles="w-[90px] h-[52px] bg-none" imgUrl={logo} />
      </Link>

      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#bbbbbb] rounded-[3px]">
        <input type="text" placeholder="Search for Research" className="flex w-full font-epilogue font-normal text-[16px] placeholder:text-[#616161] placeholder:text-[14px] text-black bg-transparent outline-none" />

        <div className="w-[72px] h-full rounded-[3px] bg-[#838383] flex justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain" />
        </div>
      </div>
      </div>
    
      <div className="flex md:flex-row  justify-end mb-[1%] mr-[22px] gap-x-10 w-[94vw]">  
      
          {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              isNavElement={link.isNavElement}
              handleClick={() => {
                setIsActive(link.name);
                navigate(link.link);
              }}
            />
          ))}
        

      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton
          btnType="button"
          title={address ? 'Add a Research' : 'Connect'}
          styles={address ? 'bg-[#838383]' : 'bg-[#838383]'}
          handleClick={() => {
            if (address) navigate('create-campaign')
            else connect()
          }}
        />

        {/* <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-none flex justify-center items-center cursor-pointer">
            <img src={user_icon} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link> */}
      </div>

      {/* Small screen navigation */}
      <div className="sm:hidden flex  items-center relative ">
        <div className="w-[40px] h-[40px] rounded-[3px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img src={logo} alt="user" className="w-[60%] h-[60%] object-contain" />
        </div>

        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div className={`absolute top-[60px] right-0 left-3% bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                />
                <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex mx-4">
            <CustomButton
              btnType="button"
              title={address ? 'Add a Research' : 'Connect'}
              styles={address ? 'bg-[#838383]' : 'bg-[#838383]'}
              handleClick={() => {
                if (address) navigate('create-campaign')
                else connect();
              }}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
    
      <hr className='border-[0.5px] border-[#bbbbbb] w-[100%] mb-[1%]'/>
</div>
 
  )
}

export default Navbar