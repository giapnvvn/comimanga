import {Flex, Box, Text} from "@radix-ui/themes";

interface MangaCardLayout3Props {
    title: string;
    thumbnail: string;
    slug: string;
    views?: number;
}

export default function MangaCardLayout3({ title, thumbnail, slug, views }: MangaCardLayout3Props) {
  return (
    <Flex key={slug} direction="column">
    <img
      style={{
        aspectRatio: "188/260",
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: "6px",
        overflow: "hidden",
      }}
      src={thumbnail}
      alt={title}
    />
      <Box mt="2">
        <Text size="2" weight="bold">{title}</Text>
        {views && (
          <Text size="1" mt="1" color="gray">30 lượt xem</Text>
        )}
      </Box>
  </Flex>
  );
}