import { Typography } from '@mui/material';
import CardCarousel from './CardCarousel';

const CardComponent =()=> {
  return (
    <div className=" bg-gray-100 p-4">
           <Typography variant="h4" className="text-center mt-5" color="initial">
      Book Our Doctor
            </Typography>
      <CardCarousel />
    </div>
  );
}

export default CardComponent;