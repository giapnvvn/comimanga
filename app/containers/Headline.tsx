'use client';

import { Container, Text } from "@radix-ui/themes";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Headline: React.FC = () => {

  const headlines = [
    "Comicola tham gia sự kiện Internation Comic Conference lần thứ 19",
    "Comicoco tham gia sự kiện Internation Comic Conference lần thứ 19",
    "Comicoca tham gia sự kiện Internation Comic Conference lần thứ 19",
  ]

  const sliderSettings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container size="4" pt="1" pb="1">
      <Slider {...sliderSettings}>
        {headlines.map((headline, index) => (
          <div key={index}>
            <Text align={'center'}>{headline}</Text>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Headline;