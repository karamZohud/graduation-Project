import { DoctorCard } from "@/app/components/Doctor/DoctorCard";
import DoctorProfile from "@/app/components/Doctor/DoctorProfile";
import { doctors } from "@/data/doctor";
import { Doctor } from "@/data/utils";
import React from "react";

interface SingleDoctorPage {
  params: { id: string };
}

const page = ({ params }: SingleDoctorPage) => {
  const doctorData = doctors.filter((doc) => {
    return doc.id === parseInt(params.id);
  });
  

  return (
    <div className="mx-auto container p-8">
      <DoctorProfile doctorData={doctorData[0]} />
    </div>
  );
};

export default page;
