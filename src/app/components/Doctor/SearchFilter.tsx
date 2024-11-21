"use client";
import { doctors, locations, specialists, top100Doctors } from "@/data/doctor";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { DoctorCard } from "./DoctorCard";

const SearchFilter = () => {
  const [age, setAge] = React.useState("");

  const [name, setname] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [specialist, setSpecialist] = React.useState("");
  const [location, setLocation] = React.useState("");

  const [search, setSearch] = useState(doctors);

  const [filteredOptions, setFilteredOptions] = useState(doctors);


  // const filtered = doctors.filter((doctor) => {
  //   // return (
  //   //   (!specialist ||
  //   //     doctor.specialty.toLowerCase() === specialist.toLowerCase()) &&
  //   //   (!location ||
  //   //     doctor.location.toLowerCase() === location.toLowerCase()) &&
  //   //   (!gender || doctor.gender.toLowerCase() === gender.toLowerCase()) &&
  //   //   (!name || doctor.name.toLowerCase().includes(name.toLowerCase()))
  //   // );

  // });
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();   
     console.log(name , gender,location,specialist);
    
    var filtered;
    if (!specialist && !gender && !location && !name) {
      return;
    }
    if (name || location || gender || specialist) {
      filtered = doctors.filter((doctor) => {
        return doctor.name === name || doctor.location===location || doctor.gender===gender || doctor.specialty===specialist ;
      });
      
      
    }
  console.log(filtered);
  
    if (filtered) {
      setSearch(filtered);
    }
  };



  return (
    <div className="flex sm:flex-col md:flex-row justify-center p-5">
      {/* search div */}
      <div className="md:w-1/4 w-full flex flex-col md:mt-6  gap-5 md:mx-16">
        <form className="w-full space-y-6" onSubmit={(e)=>handleSearch(e)}>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Doctors Name
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={name}
                label="Doctors Name"
                onChange={(e) => {
                  // handleInputChange(e);
                 //setAge(e.target.value);
                  setname(e.target.value);
                }}
              >
                {doctors.map((ele, index) => (
                  <MenuItem key={index} value={ele.name}>
                    {ele.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Search Location
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={location}
                label="Search Location"
                onChange={(e) => setLocation(e.target.value)}
              >
                {locations.map((lo) => (
                  <MenuItem key={lo.id} value={lo.name}>
                    {lo.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Search By Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Search By Gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </Box>{" "}
          <Box>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Search By Specialist
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Search By Specialist"
                value={specialist}
                onChange={(e) => setSpecialist(e.target.value)}
              >
                {specialists.map((ele) => (
                  <MenuItem key={ele.id} value={ele.name}>
                    {ele.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button
            sx={{
              height: "55px",
            }}
           type="submit"
            variant="contained"
            className="bg-sky-500 text-white "
          >
            Search
          </Button>
        </form>
      </div>
      <div className="md:w-3/4 w-full mt-7">
        <DoctorCard search={search} />
      </div>
    </div>
  );
};

export default SearchFilter;
