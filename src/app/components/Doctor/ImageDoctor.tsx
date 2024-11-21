"use client";
import {
  ImageList,
  ImageListItem,
  Modal,
  Backdrop,
  Fade,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React, { useState } from "react";


const useStyles = makeStyles((theme) => ({
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
 
  },
  img: {
    outline: "none",
    borderRadius:"5px",
  },
}));

export default function ImageDoctors() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("false");

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value:any) => {
    setImage(value);
    setOpen(true);
  
  };

  return (
    <div className="App">
      <ImageList  className="flex m-1" cols={2.5}>
        {tileData.map((tile) => (
          <ImageListItem key={tile.img} className="container">
            <Image height={50} width={50}
              src={tile.img}
              alt={""}
              onClick={(e) => handleImage(tile.img)}
              className="img hover:cursor-pointer"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
      
      >
        <Fade in={open} timeout={500} className={classes.img}>
          <Box>
            <img
              src={image}
              className="rounded-lg shadow-sm"
              alt="asd"
              style={{ maxHeight: "90%", maxWidth: "90%" }}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

const tileData = [
  {
    img: "/doctor-1.jpg",
  },
  {
    img: "/doctor-2.jpg",
  },
  {
    img: "/doctor-3.jpg",
  },
];
