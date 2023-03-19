import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    link: '',
    target: '',
    category: '',
    image: '',
  });


  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18) })
        setIsLoading(false);
        // navigate('/');
      } else {
        alert('Provide valid image URL')
        setForm({ ...form, image: '' });
      }
    })
  }

  return (
    <div className="flex  w-[100%] mt-[3%] mb-[2%] bg-[#eaeaea]  justify-center items-center flex-col rounded-[3px] ">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center  mb-[3%]  bg-none rounded-[3px]">
        <h1 className="font-epilogue font-bold sm:text-[32px]  text-[24px] leading-[38px] text-black">Typeform</h1>
      </div>

      <hr className='border-[1px] border-[#6f6f6f] w-[40%] mb-[5%]'/>
      <br />
     <div className='flex flex-col  w-[70%] justify-center items-center'>
      <form onSubmit={handleSubmit} className="w-1/2 flex flex-col  justify-center items-center gap-[20px] ">
        <div className="flex w-[100%]  flex-col ">
          <FormField 
            labelName="Your Name *"
            placeholder=" example : Serine Neghouche "
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          </div>
          <div className="flex w-[100%] flex-col ">
          <FormField 
            labelName="Title *"
            placeholder="Exploration of dust science ..."
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
          
        </div>
        <div className="flex w-[100%] flex-col ">
  
        <FormField 
            labelName="Short description*"
            placeholder="....."
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
          />
          </div>
          <div className="flex w-[100%] flex-col ">
          <FormField
             labelName=" More informations *"
             placeholder="www.example.com."
             inputType="text"
             value={form.link}
             handleChange={(e)=> handleFormFieldChange('link',e)}
           />
            </div>

          <div className="flex w-[100%] flex-wrap mt-[10px] ">
          <FormField 
            labelName="Research total cost *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          </div>
          <div className="flex w-[100%] flex-wrap mt-[10px] ">
          
          <FormField
              labelName="Category*"
              placeholder="'0' for Biology, '1' for Physical, '2' for Social, '3' for Formal Sciences"
              inputType="text"
              value={form.category}
              handleChange={(e) => handleFormFieldChange('category', e)}
            />
        </div>
        <div className="flex w-[100%] flex-wrap mt-[10px] ">

        <FormField 
            labelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />
          </div>

          <div className="flex  flex-wrap mt-[10px] ">
            <CustomButton 
              btnType="submit"
              title="Submit new campaign"
              styles="bg-[#616161]"
            />
            </div>
         

       </form>
      </div>
    </div>
  )
}

export default CreateCampaign