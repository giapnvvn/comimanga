import {Flex, Box, Text} from "@radix-ui/themes";

interface MangaCardLayout1Props {
    title: string;
    thumbnail: string;
    slug: string;
    views?: number;
}

export default function MangaCardLayout1({ title, thumbnail, slug, views }: MangaCardLayout1Props) {
  return (
    <Flex key={slug} direction="column">
    <img
      style={{
        aspectRatio: "222/459",
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