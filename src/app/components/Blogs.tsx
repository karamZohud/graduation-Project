import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

const Blogs = () => {
  const data = [
    {
      img: "/Blog/blog-04.jpg",
      type: "Doctor",
      title: "Doccure – Making your clinic painless visit?",
      description:
        "Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good...",
      date: new Date("2023-10-5"),
    },
    {
      img: "/Blog/blog-10.jpg",
      type: "Clinic",
      title: "Benefits of Consulting With an Online Doctor",
      description:
        "Uncover strategies to achieve a harmonious balance between professional and personal well-being....",
      date: new Date("2022-5-5"),
    },
    {
      img: "/Blog/blog-02-1.jpg",
      type: "Clinic",
      title: "What are the benefits of online doctor booking",
      description:
        "Explore importance of quality sleep & learn tips to improve your sleep, ensuring raise-up refreshed...",
      date: new Date("2000-12-1"),
    },
  ];

  return (
    <div className="my-20 container mx-auto ">
      <div className="text-center">
        <h2 className="text-4xl">Blogs and News</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((ele, index) => (
          <Card key={index} className="m-8">
            <CardActionArea sx={{ position: "relative" }}>
              <div className="overflow-hidden">
                <CardMedia
                  component="img"
                  height="140"
                  className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  image={ele.img}
                  alt={ele.title}
                />
              </div>
              <CardContent>
                <p className="text-sm text-gray-400 relative">
                  {ele.type}{" "}
                  <Typography
                    variant="body2"
                    width={100}
                    className="text-center absolute top-0 right-0 rounded-md text-white bg-[#15558c]"
                  >
                    {ele.date.toLocaleDateString()}
                  </Typography>
                </p>
                <Typography gutterBottom variant="h5" component="div">
                  {ele.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {ele.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" variant="outlined" color="primary">
                Read More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blogs;