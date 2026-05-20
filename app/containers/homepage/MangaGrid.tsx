'use client';

import { Box, Container, Heading, Flex, Grid } from "@radix-ui/themes";
import React from "react";
import MangaCardLayout4 from "../../components/MangaCardLayout4";

interface MangaGridProps {
  title: string;
  collection_slug: string;
  items: {
    title: string;
    thumbnail: string;
    slug: string;
    genre: string[];
    views?: number;
    badge?: string;
  }[];
}

export default function MangaSlider({ title, items }: MangaGridProps) {

  return (
    <Box py="6" className="mangaSliderContainer" style={{background:'var(--gray-3)'}}>
      <Container size="4" mt="1">
        <Flex justify="between" mb="5">
          <Flex direction="column">
            <Heading size="6" weight="bold">
              {title}
            </Heading>
          </Flex>
        </Flex>
        <Grid columns="3" gap="5" width="auto">
            {items.slice(0,9).map((item) => (
                <MangaCardLayout4
                  key={item.slug}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  slug={item.slug}
                  genre={item.genre}
                  views={item.views}
                  badge={item.badge}
                />
            ))}
        </Grid>
      </Container>
    </Box>
  );
}