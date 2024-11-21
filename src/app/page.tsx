import Image from "next/image";
import Home from "./components/HomePage/Home";
import Typography from "@mui/material/Typography";
import HomeCard from "./components/HomePage/HomeCard";
import Happy from "./components/HomePage/Happy";
import CardCarousel from "./components/HomePage/HomeBookCard";
import CardComponent from "./components/HomePage/HomeBookCard";
import ClinicFeatures from "./components/HomePage/ClinicFeature";
import Blogs from "./components/HomePage/Blogs";
import SideMenu from "./components/SideMenu";

import Navbar from "./components/Navbar";
import HeaderSide from "./components/HomePage/HeaderSide";

export default function Page() {
  return (
    <>
      <HeaderSide />
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
