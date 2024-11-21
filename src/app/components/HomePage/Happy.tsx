import React from "react";
import {
  faProcedures,
  faBriefcase,
  faHeartbeat,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const data = [
  {
    icon: <FontAwesomeIcon style={{minHeight:"40px"}}  icon={faProcedures} />,
    count: "3500",
    title: "Happy Customers",
  },
  {
    icon: <FontAwesomeIcon style={{minHeight:"40px"}}  icon={faBriefcase} />,
    count: "450+",
    title: "Project Done",
  },
  {
    icon: <FontAwesomeIcon style={{minHeight:"40px"}}  icon={faHeartbeat} />,
    count: "40+",
    title: "Awards",
  },
  {
    icon: <FontAwesomeIcon style={{minHeight:"40px"}} icon={faAmbulance} />,
    count: "3500",
    title: "Client Works",
  },
];

const Happy = () => {
  return (
    <div className="bg-[#15558c] sm:flex-col md:flex-row text-white flex justify-evenly flex-wrap my-10">
      {data.map((data, index) => (
        <div
          key={index}
          className="flex font-semibold gap-y-3 flex-col items-center justify-center min-h-72"
        >
          <div className="flex flex-col  ">
             {data.icon}
            <div className="text-xl text-center">{data.count}</div>
          </div>
          <div className="text-2xl">{data.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Happy;
