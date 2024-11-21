import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationArrow, faLocationCrosshairs, faStar } from "@fortawesome/free-solid-svg-icons";
import { Icon, Rating } from "@mui/material";
export default function BookDoctorCard(props:any) {
 
  return (
  
      
        <Card  sx={{ maxWidth: 345,margin:0 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/profile.jpg"
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <span>
              <Rating name="half-rating-read" defaultValue={props.star} precision={0.5} readOnly />
              </span>
             

            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
             <LocationOnIcon sx={{minHeight:"10px"}}/> {props.location}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">Share</Button>
            <Button variant="contained" size="small">Book Now</Button>
          </CardActions>
        </Card>
  
   
  );
}
