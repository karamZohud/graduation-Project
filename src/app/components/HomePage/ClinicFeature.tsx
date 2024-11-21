import {
  faCapsules,
  faHeartbeat,
  faHospital,
  faPills,
  faProcedures,
  faXRay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ClinicFeatures = () => {
  const features = [
    {
      name: "Medical",
      icon: <FontAwesomeIcon icon={faCapsules} style={{ minHeight: "40px" }} />,
    },
    {
      name: "Operation",
      icon: (
        <FontAwesomeIcon icon={faHeartbeat} style={{ minHeight: "40px" }} />
      ),
    },
    {
      name: "Laboratory",
      icon: <FontAwesomeIcon icon={faHospital} style={{ minHeight: "40px" }} />,
    },
    {
      name: "ICU",
      icon: <FontAwesomeIcon icon={faPills} style={{ minHeight: "40px" }} />,
    },
    {
      name: "Test Room",
      icon: <FontAwesomeIcon icon={faXRay} style={{ minHeight: "40px" }} />,
    },
    {
      name: "Patient Ward",
      icon: (
        <FontAwesomeIcon icon={faProcedures} style={{ minHeight: "40px" }} />
      ),
    },
  ];

  return (
    <div className="text-center my-10 container mx-auto">
      <h2 className="text-4xl">Available Features in Our Clinic</h2>
      <p className="text-gray-400 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="  cursor-pointer   grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="parent text-start overflow-hidden text-xl font-semibold  m-8 p-8 rounded-md bg-[#15558c]"
          >
            <div>{feature.icon}</div>
            <h3>{feature.name}</h3>
            <div className="-top-10  child -right-16 transition-[0.5]  min-h-36 min-w-36 bg-[#437bac] rounded-full shadow-2xl absolute"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicFeatures;
