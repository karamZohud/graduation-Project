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



  interface DoctorCardProps {
    search: Doctor[]; // Array of Doctor objects
  }
export const DoctorCard: React.FC<DoctorCardProps> = ({search}) => {

const doctorBysearch=search || doctors;


  const doctorsCard = doctorBysearch.map((doctor) => (
    <Card className="flex sm:flex-col md:flex-row items-center justify-between p-4">
      <div className="flex sm:flex-col md:flex-row space-x-3">
        <div>
          <Image width={200} height={200} alt="ada" src={"/doctor-1.jpg"} />
        </div>
        <div>
          <h2>
            {doctor.name}{" "}
            <CheckCircleOutlineIcon
              className={doctor.isVerified ? "text-green-500" : "text-red-600"}
            />
          </h2>
          <h5>{doctor.description}</h5>
          <h5 className="text-blue-600">{doctor.specialty}</h5>
          <Rating
            name="simple-uncontrolled"
            defaultValue={doctor.rating}
            readOnly
          />
          <div className="text-gray-400">
            <LocationOnIcon /> {doctor.location}
          </div>
          <div>
            <ImageDoctors />
          </div>
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
        <Button className="mt-3" variant="outlined" color="primary">
       <Link underline="none" href={`/doctors/${doctor.id}`}>View Profile</Link>

        </Button>
      </div>
    </Card>
  ));
  return <div className="flex flex-col gap-y-3">{doctorsCard}</div>;
};
