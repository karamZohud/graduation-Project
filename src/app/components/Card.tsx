import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Card = (props : any) => {
  return (
    <div className="flex flex-col min-w-[300px] min-h-[300px] items-center justify-evenly relative  gap-1  rounded-md overflow-hidden m-4">
      <Image

        alt="casadasd"
        src={`/doctor-${props.imgno}.jpg`}
        className="
        
         inset-0 w-full h-full object-cover opacity-80 hover:opacity-100"
        fill
      />

      <h1 className="text-white text-2xl z-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)] ">
        Visit a doctor
      </h1>
      <Button variant="contained" className="z-10">
        saSas
      </Button>
    </div>
  );
};

export default Card;
