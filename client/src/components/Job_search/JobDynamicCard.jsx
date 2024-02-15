
import React, { useState } from 'react';
import { FaBookmark } from "react-icons/fa";

const JobDynamicCard = ({
  itemDate,
  bookmarkLogo,
  companyName,
  position,
  companyLogo,
  workOptions,
  details,
  key,
  color,
}) => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="bg-white h-[300px] sm:h-[260px] sm:w-[240px] w-[270px] flex flex-col rounded-[15px] p-2 border-[1px] border-slate-400">
        <div className={`bg-${color}  h-[75%] rounded-[15px]`}>
          <div className=" w-full h-[20%] flex items-center p-[10px] justify-between">
            <div className=" shadow    bg-[#f8f6f5] rounded-[90px] p-2 h-[20px]  w-auto flex items-center justify-center   text-xs cursor-pointer  font-bold ">
              {itemDate}
            </div>
            <div className=" shadow   bg-[#c57953]  rounded-[100%] p-[0vw] h-[25px]  w-[25px] flex items-center justify-center  cursor-pointer text-[0.6vw] font-extrabold  ">
            <FaBookmark onClick={handleClick} className={` border-slate-500 text-sm ${clicked ? 'text-black' : 'text-white'}`} />
            </div>
          </div>

          <div className=" h-[35%] w-full flex items-center justify-between p-[10px]">
            <div className=" h-[70%] ">
              <p className=" text-sm font-bold">{companyName}</p>
              <h1>{position}</h1>
            </div>
            <div className=" shadow   bg-[#f8f6f5] rounded-[50%]  h-[30px]  w-[30px] flex items-center justify-center  cursor-pointer text-[0.6vw] font-extrabold  ">
              <img className="w-[60%] h-[60%]" src={companyLogo} alt="" />
            </div>
          </div>

          <div className=" h-[40%]  p-[3px] flex flex-wrap gap-1 ">
          {workOptions.map((option, index) => (
          <button key={index} className="work-option shadow   bg-[#f8f6f5] rounded-[20px]  h-[20px] p-2  w-auto flex items-center justify-center  cursor-pointer text-[9px]  border-slate-400 border-[1px] font-bold gap 1">{option}</button>
        ))}


          </div>
        </div>
        <div className="h-[20%] p-2 flex items-center justify-center gap-3">
          <div className="bg-white h-[80%]">
            <h1 className=" font-extrabold">{details.salary}</h1>
            <p className=" text-[10px] ">{details.address}</p>
          </div>
          <div className=" text-white  bg-[#0c0c0c] rounded-[20px] p-[0vw] h-[30px]  w-[70px] flex items-center justify-center  cursor-pointer  ">
            <h1 className="text-xs">{details.details}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDynamicCard;
