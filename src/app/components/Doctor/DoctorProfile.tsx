"use client";
import { Button, Card, Link, Rating } from "@mui/material";
import Image from "next/image";
import React from "react";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ImageDoctors from "./ImageDoctor";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { doctors } from "@/data/doctor";
import { Doctor } from "@/data/utils";
import { PersonOffOutlined, PersonOutlined } from "@mui/icons-material";

interface Props {
  doctorData: Doctor;
}

const DoctorProfile: React.FC<Props> = ({ doctorData }) => {
  return (
    <Card className="flex sm:flex-col md:flex-row items-center justify-between p-4">
      <div className="flex sm:flex-col md:flex-row space-x-3">
        <div>
          <Image width={200} height={200} alt="ada" src={"/doctor-1.jpg"} />
        </div>
        <div>
          <h2>
            {doctorData.name}{" "}
            <CheckCircleOutlineIcon
              className={
                doctorData.isVerified ? "text-green-500" : "text-red-600"
              }
            />
          </h2>
          <h5>{doctorData.description}</h5>
          <h5 className="text-blue-600">{doctorData.specialty}</h5>
          <Rating
            name="simple-uncontrolled"
            defaultValue={doctorData.rating}
            readOnly
          />
          <div className="text-gray-400">
            <LocationOnIcon /> {doctorData.location}
          </div>
          <div>
            <ImageDoctors />
          </div>
        </div>
      </div>

<div className="flex flex-col gap-4 justify-start items-center">
  <div className="flex gap-2 justify-center items-center">
  <Card className="p-2 flex justify-center items-center ">
    <PersonOutlined className="text-purple-600"/> 
  </Card>0 Patients Treated
  </div>


<div className="flex w-full flex-col bg-gray-100 p-2 rounded-sm">
<div className="font-semibold">
{doctorData.name}
  </div>
  online
</div>


</div>


      <div className="flex flex-col  ">
        <div className="text-gray-400">
          <ThumbUpOffAltIcon />1 Votes
        </div>
        <div className="text-gray-400">
          <CalendarTodayIcon />
          Sun, Mon, Tue, Wed, Thu, Fri, Sat
        </div>
        <div className="text-gray-400">
          <LocationOnIcon /> Aust
        </div>
        <div className="text-gray-400">
          <LocalAtmIcon /> 150.0
        </div>
        <div className="text-gray-400">
          <EventAvailableIcon />
          <span className="text-green-500"> Available Today</span>
        </div>
       <div className="flex gap-2">
       <Button className="mt-3" variant="outlined" color="primary">
          <Link underline="none" href={`/doctors`}>
            Add Feedback
          </Link>
        </Button>
        <Button className="mt-3 " variant="contained" color="primary">
          <Link className="text-white" underline="none" href={`/doctors`}>
           Book Appointment
          </Link>
        </Button>
       </div>
      </div>
    </Card>
  );
};

export default DoctorProfile;
