import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[13vw] h-[25vh]">
      <h4 className="font-epilogue font-bold text-[15px] text-white p-1 bg-[#1c1c24] h-[20%] rounded-t-[3px] w-full text-center truncate">{value} Etherium</h4>
      <p className="font-epilogue font-normal text-[16px] text-[#808191] bg-[#28282e] h-[80%] px-3 py-2 w-full rouned-b-[3px] text-center">{title}</p>
    </div>
  )
}

export default CountBox