"use client";
import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import BookDoctorCard from "../HomePage/BookDoctorCard";

export default function App() {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: true,
    slides: {
      perView: 1, // Default 1 slide per view for smaller screens
      spacing: 0, // Set spacing to 0 to remove space between slides
    },
    breakpoints: {
      "(min-width:800px)": {
        slides: {
          perView: 2,
          spacing: 0,
        },
      },
      "(min-width:1200px)": {
        slides: {
          perView: 3,
          spacing: 0,
        },
      },
    },
  });

  const data = [
    {
      name: "karam",
      img: "/profile.jpg",
      star: 4,
      location: "Salfit",
    },
    {
      name: "majd",
      img: "/profile.jpg",
      star: 1,
      location: "Tulkarm",
    },
    {
      name: "Mahdi",
      img: "/profile.jpg",
      star: 2,
      location: "Bethlehem",
    },
    {
      name: "anan",
      img: "/profile.jpg",
      star: 1,
      location: "Jenen",
    },
    {
      name: "saleh",
      img: "/profile.jpg",
      star: 1,
      location: "Jenen",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="keen-slider-wrapper mt-4 relative">
        <div ref={ref} className="keen-slider">
          {data.map((ele, index) => (
            <div key={index} className="flex justify-center keen-slider__slide">
              <BookDoctorCard
                name={ele.name}
                star={ele.star}
                location={ele.location}
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => slider.current?.prev()}
          className="keen-slider-arrow-left  "
        >
          &lt;
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => slider.current?.next()}
          className="keen-slider-arrow-right"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
