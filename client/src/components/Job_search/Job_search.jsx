import React, { useState } from "react";
import JobDynamicCard from "./JobDynamicCard";
import apple from "../../assets/jobsearchimg/apple.png";
// import google from"../../assets/jobsearchimg/search.png";
import twitter from "../../assets/jobsearchimg/twitter.png";
import dribble from "../../assets/jobsearchimg/dribble.png";
import airbnb from "../../assets/jobsearchimg/airbnb.png";


// Accordion section

const Job_search = () => {
  // Accordion section Start
  const [checkboxValues, setCheckboxValues] = useState({});
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const handleItemClick = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((item) => item !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const handleCheckboxChange = (event, checkboxIndex) => {
    const updatedCheckboxValues = {
      ...checkboxValues,
      [checkboxIndex]: event.target.checked,
    };
    setCheckboxValues(updatedCheckboxValues);
  };
  // Accordion item
  const accordionItems = Array.from({ length: 2 }, (_, index) => {
    let title = `Item ${index + 1}`;
    let labels = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

    if (index === 0) {
      title = "Working schedule";
      labels = [
        "Full Day",
        "flexible schedule",
        "shift work",
        "Distant work",
        "Shift method",
      ];
    } else if (index === 1) {
      title = "Employment type";
      labels = [
        "Full time",
        "Part time",
        "Internshp",
        "Project Work",
        "Volunteering",
      ];
    }

    // checkbox return 
    return {
      title: title,
      content: (
        <div className=" " key={index}>
          {labels.map((label, i) => (
            <div className="pl-2 flex gap-2 " key={i}>
              <input
              className=" cursor-pointer"
                type="checkbox"
                onChange={(event) =>
                  handleCheckboxChange(event, `checkbox${index + 1}_${i + 1}`)
                }
                checked={
                  checkboxValues[`checkbox${index + 1}_${i + 1}`] || false
                }
                style={{ backgroundColor: 'blue' }}
              />
              <label style={{color: checkboxValues[`checkbox${index + 1}_${i + 1}`] ? 'red' : 'grey' }}>{label}</label>
              <br />
            </div>
          ))}
        </div>
      ),
    };
  });

  //  Accordion section end
//card data 
const cardData = [
  {
    itemDate: "February 14, 2024",
    bookmarkLogo: "path/to/bookmark_logo1.png",
    companyName: "Apple",
    position: "Software Engineer",
    companyLogo: apple,
  
    workOptions: ["Part-time", "Senior Level", "Distant", "Project Work", "Flexible Schedule"],
    details: {
      salary: "$80,000",
      address: "123 Main St, City, Country",
      details: "Detail"
    },
    color: "[#FFE1CC]",
  },
  {
    itemDate: "February 14, 2024",
    bookmarkLogo: "path/to/bookmark_logo2.png",
    companyName: "Example Company 2",
    position: "Frontend Developer",
    
    companyLogo: twitter,
    workOptions: ["Full-time", "Entry Level", "In-office", "Team Work", "Fixed Schedule"],
    details: {
      salary: "$60,000",
      address: "456 Oak St, Town, Country",
      details: "Detail"
    },
    color: "green-400",
  },
  {
    itemDate: "February 14, 2024",
    bookmarkLogo: "path/to/bookmark_logo2.png",
    companyName: "Example Company 2",
    position: "Frontend Developer",
    companyLogo: airbnb,
    workOptions: ["Full-time", "Entry Level", "In-office", "Team Work", "Fixed Schedule"],
    details: {
      salary: "$60,000",
      address: "456 Oak St, Town, Country",
      details: "Detail"
    },
    color: "red-300",
  },
  {
    itemDate: "February 14, 2024",
    bookmarkLogo: "path/to/bookmark_logo2.png",
    companyName: "Example Company 2",
    position: "Frontend Developer",
    companyLogo: airbnb,
    workOptions: ["Full-time", "Entry Level", "In-office", "Team Work", "Fixed Schedule"],
    details: {
      salary: "$60,000",
      address: "456 Oak St, Town, Country",
      details: "Detail"
    },
    color: "red-300",
  },
  {
    itemDate: "February 14, 2024",
    bookmarkLogo: "path/to/bookmark_logo2.png",
    companyName: "Example Company 2",
    position: "Frontend Developer",
    companyLogo: dribble,
    workOptions: ["Full-time", "Entry Level", "In-office", "Team Work", "Fixed Schedule"],
    details: {
      salary: "$60,000",
      address: "456 Oak St, Town, Country",
      details: "Detail"
    },
    color: "green-400",
  },
  {
    itemDate: "February 14, 2024",
    bookmarkLogo: "path/to/bookmark_logo2.png",
    companyName: "Example Company 2",
    position: "Frontend Developer",
    companyLogo: airbnb,
    workOptions: ["Full-time", "Entry Level", "In-office", "Team Work", "Fixed Schedule"],
    details: {
      salary: "$60,000",
      address: "456 Oak St, Town, Country",
      details: "Detail"
    },
    color: "[#FFE1CC]",
  },
];



  
  return (
    <>
      <div className=" w-full h-auto bg-[#F9F9F9] ">
        <div className=" w-full sm:h-[100vh]  sm:flex-row flex flex-col p-4">
          {/* left container  */}

          <div className=" sm:h-[100%] sm:w-[30%] w-full flex flex-col justify-center items-center gap-10 sm:gap-3 p-[10px]">
            <div className="bg-[#0E0E0D] h-[260px] w-[220px] flex flex-col items-center gap-10 justify-center rounded-[20px]">
                <h1 className=" w-[90%] text-2xl font-bold text-white ">Get Your Best Profession With Luckyjob</h1>
                <div className="   text-black bg-[#88D1FF] rounded-[20px] p-[0vw] h-9  w-52 flex items-center justify-center  font-bold text-[4vw] sm:text-[1vw] cursor-pointer ">
                  Learn More
                </div>
             
            </div>

            {/* Accordion start */}
            <div className="bg-white sm:h-[60%] w-[70%] flex flex-col gap-1 p-1 items-center rounded-[5px] border-r-2 ">
              {accordionItems.map((item, index) => (
                <div className="  flex flex-col items-start " key={index}>
                  <div
                    className="text-md font-bold cursor-pointer flex items-center  gap-3 p-2"
                    onClick={() => handleItemClick(index)}
                  >
                    {item.title} {expandedIndexes.includes(index) ? <h1 className="text-xs">▼</h1> : <h1 className="text-xs">▶</h1>}
                  </div>
                  {expandedIndexes.includes(index) && <div className=" text-xs">{item.content}</div>}
                </div>
              ))}
            </div>
            {/* Accordion end */}
          </div>

          {/* right container  */}
          <div className=" w-full h-auto sm:w-[70%] sm:h-[100%] ">
            <div className=" w-[full] h-[8%] flex items-center p-[10px]  pl-[50px] justify-between">
              <div className=" font-bold text-black flex h-auto w-[20vw] justify-around">
                <h1>Recommended jobs</h1>
                <div className=" shadow shadow-[#FAF1EA]  text-black bg-[#f8f6f5] rounded-[90px] px-4 h-auto w-auto flex items-center justify-center   text-xs cursor-pointer   ">
                  386
                </div>
              </div>
              <div className=" shadow shadow-[#FAF1EA]   bg-[#f8f6f5] rounded-[90px] w-auto h-auto p-2 flex items-center justify-center  cursor-pointer  font-bold ">
                <h1 className="text-xs">Last upadte</h1>
              </div>
            </div>

            <div className=" h-[92%] px-[40px] sm:pl-[60px] gap-4 items-center  flex flex-wrap ">

              {/* // dynamic card  */}
            {cardData.map((card, index) => (
        <JobDynamicCard key={index} {...card} />
      ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job_search;
