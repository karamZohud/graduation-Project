import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import Card from "./Card";

const cards = [1, 2, 3];

const HomeCard = () => {
  return (
    <div className="grid lg:grid-cols-3  md:grid-cols-2 ">
      {cards.map((card, ind) => (
        <Card imgno={ind + 1} />
      ))}
    </div>
  );
};

export default HomeCard;
