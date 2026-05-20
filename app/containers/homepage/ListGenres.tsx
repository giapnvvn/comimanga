'use client';

import { Badge, Box, Container } from "@radix-ui/themes";

export default function ListGenres() {
  const genres = [
    "Action",
    "Adult",
    "Adventure",
    "Comedy",
    "Cooking",
    "Doujinshi",
    "Drama",
    "Ecchi",
    "Fantasy",
  ];
  return (
    <Container size="4" mt="1">
        <Box style={{ display: "flex", justifyContent:"center", gap: "10px", flexWrap: "wrap" }}>
        {genres.map((genre, index) => (
          <Badge key={index} style={{padding:'5px 20px', fontSize:'1em', fontWeight:'550'}} size="3" radius="full" color="gray" variant="solid">
            {genre}
          </Badge>
        ))}
        </Box>
    </Container>
  );
}