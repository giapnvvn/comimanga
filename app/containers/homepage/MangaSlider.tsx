'use client';

import { Box, Text, Container, Heading, Flex } from "@radix-ui/themes";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MangaCardLayout1 from "../../components/MangaCardLayout1";
import MangaCardLayout2 from "../../components/MangaCardLayout2";
import MangaCardLayout3 from "@/app/components/MangaCardLayout3";

interface MangaSliderProps {
  index: number;
  title: string;
  collection_slug: string;
  layout: number;
  items: {
    title: string;
    thumbnail: string;
    slug: string;
  }[];
}

const ArrowButton = ({ onClick, direction }: { onClick?: () => void; direction: "prev" | "next" }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        right: 0,
        top: -22.8,
        transform: direction === "next" ? 'translateY(-100%)' : 'translate(-100%, -100%)',
        border: "none",
        zIndex: 10,
        cursor: "pointer",
      }}
      aria-label={direction === "prev" ? "Previous" : "Next"}
    >
      {direction === "prev" ? <FiChevronLeft size="30" /> : <FiChevronRight size="30" />}
    </button>
  );
};

export default function MangaSlider({ title, collection_slug, items, layout }: MangaSliderProps) {

  //layout 1: 6 items, text inside box with overlay, layout 2: 5 items, text outside box

  let slidesToShow = 5;

  switch (layout) {
    case 1:
      slidesToShow = 6;
      break;
    case 2:
      slidesToShow = 5;
      break;
  }

  const sliderSettings = {
    autoplay: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    // responsive: [
    //   { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    //   { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    // ],
    prevArrow: <ArrowButton direction="prev" />,
    nextArrow: <ArrowButton direction="next" />,
  };

  let subtitle = "";

  if (collection_slug === "truyen_moi_tieu_bieu") {
    subtitle = "Bạn là người mới? Hãy thử đọc những bộ truyện hay nhất của Comi!";
  }

  return (
    <Box py="4" className="mangaSliderContainer">
      <Container size="4" mt="1">
        <Flex justify="between" mb="5">
          <Flex direction="column">
            <Heading size="6" weight="bold">
              {title}
            </Heading>
            {subtitle && <Text size="2" color="gray" mt="1">{subtitle}</Text>}
          </Flex>
        </Flex>
        <Slider {...sliderSettings}>
          {items.map((item) => (
            layout === 1 && (
              <MangaCardLayout1
                key={item.slug}
                title={item.title}
                thumbnail={item.thumbnail}
                slug={item.slug}
              />
            )  
            || layout === 2 &&  (
              <MangaCardLayout2
                key={item.slug}
                title={item.title}
                thumbnail={item.thumbnail}
                slug={item.slug}
              />
            )

            || layout === 3 &&  (
              <MangaCardLayout3
                key={item.slug}
                title={item.title}
                thumbnail={item.thumbnail}
                slug={item.slug}
              />
            )
          ))}
        </Slider>
      </Container>
    </Box>
  );
}