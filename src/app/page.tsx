'use client';
import Image from "next/image";
import Home from "./components/Home";
import Typography from "@mui/material/Typography";
import HomeCard from "./components/HomeCard";
import Happy from "./components/Happy";
import CardCarousel from "./components/HomeBookCard";
import CardComponent from "./components/HomeBookCard";
import ClinicFeatures from "./components/ClinicFeature";
import Blogs from "./components/Blogs";
import SideMenu from "./components/SideMenu";
import { useState } from "react";
import Navbar from "./components/Navbar";

export default function Page() {
  const [closedMenu, setClosedMenu] = useState(false);

 

  return (
    <>
    <Navbar    closedMenu={closedMenu} setClosedMenu={setClosedMenu}  />
    <SideMenu    closedMenu={closedMenu} setClosedMenu={setClosedMenu} />
      <Home />
      <Typography variant="h4" className="text-center mt-5" color="initial">
        What are you looking for?
      </Typography>
      <HomeCard />
      <Happy />
      <CardComponent />
      <ClinicFeatures />
      <Blogs />
    </>
  );
}
