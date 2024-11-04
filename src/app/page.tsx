import Image from "next/image";
import Home from "./components/Home";
import Typography from "@mui/material/Typography";
import HomeCard from "./components/HomeCard";

export default function Page() {
  return (
    <>
      <Home />
      <Typography variant="h4" className="text-center mt-5" color="initial">
        What are you looking for?
      </Typography>
      <HomeCard />
    </>
  );
}
