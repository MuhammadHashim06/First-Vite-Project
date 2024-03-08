import { useState } from "react";
import "./tabs.css";
import img1 from './Images/1.png'

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const List = [
    [
      "Accounting and Payroll Administration",
      "Business Administration Professional",
      "Business and Digital Marketing Management",
      "Human Resources and Payroll Coordinatior",
      "Business Accounting Technician",
      "Social Media and Marketing",
      "Social Media Specialist",
    ],
    [
      "Child and Youth Services Worker",
      "Massage Therapy 2400",
      "Medical Office Administration",
      "Rehabilitation Therapy Assistant",
    ],
    ["Dental Assisting"],
    ["Immigration Assistant"],
    ["Education Assistant"],
    [
      "Cybersecurity Specialist",
      "Web and Mobile Applicatiobs Development",
      "Cybersecurity Specialist",
      "Web and Mobile Applicatiobs Development",
      "Mobile Application Development",
    ],
  ];

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="box">
        <div className="navlinks">
          {List.map((item, index) => (
            <a
              href="#"
              key={index}
              onClick={() => handleClick(index)}
              className={activeTab === index ? "active" : ""}
            >
              {item[0]}
            </a>
          ))}
        </div>
        {List.map((item, index) => (
          <section key={index} style={{ display: activeTab === index ? "block" : "none" }}>
            <ul>
              {item.map((program, i) => (
                <li key={i}>
                  <img src={img1} alt="Program Logo" />
                  {program}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}

export default Tabs;


// import { useState } from "react";
// import "./tabs.css";

// function Tabs() {
//   const [activeTab, setActiveTab] = useState(0);
//   const List = [
//     [
//       "Accounting and Payroll Administration",
//       "Business Administration Professional",
//       "Business and Digital Marketing Management",
//       "Human Resources and Payroll Coordinatior",
//       "Business Accounting Technician",
//       "Social Media and Marketing",
//       "Social Media Specialist",
//     ],
//     [
//       "Child and Youth Services Worker",
//       "Massage Therapy 2400",
//       "Medical Office Administration",
//       "Rehabilitation Therapy Assistant",
//     ],
//     ["Dental Assisting"],
//     ["Immigration Assistant"],
//     ["Education Assistant"],
//     [
//       "Cybersecurity Specialist",
//       "Web and Mobile Applicatiobs Development",
//       "Cybersecurity Specialist",
//       "Web and Mobile Applicatiobs Development",
//       "Mobile Application Development",
//     ],
//   ];

//   const handleClick = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <>
//       <div className="box">
//         <div className="navlinks">
//           {List.map((item, index) => (
//             <a href="#" id="" key={index} onClick={() => handleClick(index)}>
//                 {item[0]}
//             </a>
//           ))}
//         </div>
//         {List.map((item, index) => (
//           <section key={index} style={{ display: activeTab === index ? "block" : "none" }}>
//             <ul>
//               {item.map((program, i) => (
//                 <li key={i}>{program}</li>
//               ))}
//             </ul>
//           </section>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Tabs;

{
  /* <section style={{ display: activeTab === 0 ? "block" : "none" }}>
          Business Programs Content
        </section>
        <section style={{ display: activeTab === 1 ? "block" : "none" }}>
          Healthcare Programs Content
        </section>
        <section style={{ display: activeTab === 2 ? "block" : "none" }}>
          Dental Programs Content
        </section>
        <section style={{ display: activeTab === 3 ? "block" : "none" }}>
          Legal Programs Content
        </section>
        <section style={{ display: activeTab === 4 ? "block" : "none" }}>
          Early Childhood Education Programs
        </section>
        <section style={{ display: activeTab === 5 ? "block" : "none" }}>
          Technology Programs
        </section> */
}
