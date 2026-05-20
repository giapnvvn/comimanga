'use client';

import { Box } from "@radix-ui/themes";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ListGenres from "./ListGenres";

interface TopSliderProps {
  items: {
    title: string;
    thumbnail: string;
    slug: string;
  }[];
}

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        left: "12.5%",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        border: "none",
        borderRadius: "50%",
        padding: "10px",
        zIndex: 10,
        cursor: "pointer",
      }}
    >
      <FiChevronLeft size="30"/>
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        right: "12.5%",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        border: "none",
        borderRadius: "50%",
        padding: "10px",
        zIndex: 10,
        cursor: "pointer",
      }}
    >
      <FiChevronRight size="30"/>
    </button>
  );
};

export default function TopSlider({ items }: TopSliderProps) {
  const sliderSettings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "25%",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Box py="4" className="topSliderContainer">
      <Slider {...sliderSettings}>
        {items.map((item, index) => (
          <div key={index}>
            <img
              style={{
                height: "484px",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "20px",
                padding: "8px"
              }}
              src={item.thumbnail}
              alt={item.title}
            />
          </div>
        ))}
      </Slider>
    <ListGenres />
    </Box>
  );
}