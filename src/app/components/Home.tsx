"use client";
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
} from "@mui/material";
import Image from "next/image";
import React from "react";

const Home = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div
      className="w-full h-[400px] bg-cover bg-center bg-no-repeat relative flex flex-col justify-center "
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      <div className="text-center pt-3 ">
        <h1 className="text-3xl ">Search Doctor, Make an Appointment</h1>
        <p className=" text-sm text-slate-500">
          Discover the best doctors, clinic & hospital the city nearest to you.
        </p>
      </div>
      {/* search div */}
      <div className="flex justify-center items-center  gap-5 my-16">
        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Search Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Search Location"
              onChange={handleChange}
            >
              <MenuItem value={10}>Tulkarem</MenuItem>
              <MenuItem value={20}>Jenin</MenuItem>
              <MenuItem value={30}>Ramallah</MenuItem>
              <MenuItem value={40}>Nablus</MenuItem>
              <MenuItem value={50}>Jericho</MenuItem>
              <MenuItem value={60}>Hebron</MenuItem>
              <MenuItem value={70}>Bethlehem</MenuItem>
              <MenuItem value={80}>Qalqilya</MenuItem>
              <MenuItem value={90}>Salfit</MenuItem>
              <MenuItem value={100}>Jerusalem</MenuItem>
              <MenuItem value={110}>Tubas</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Stack spacing={2} sx={{ width: 300}} className="">
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={top100Doctors.map(
              (option) => option.title + " - " + option.location
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Doctors, Clinic , etc"
                slotProps={{
                  input: {
                    ...params.InputProps,
                    type: "search",
                  },
                }}
              />
            )}
          />
        </Stack>
        <Button
          sx={{
            height: "55px",
           
          }}
          variant="contained"
          className="bg-sky-500 text-white "
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Home;

const top100Doctors = [
  { title: "Mahdi Alsholi", location: "Tulkarem" },
  { title: " Karam Zohud", location: "Salfit" },
  { title: "Saleh Zetawi", location: "Tulkarem" },
  { title: "Annan Qarareyah", location: "Jenin" },
  { title: "Majd Alnajjar", location: "Nablus" },
];
