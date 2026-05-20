import {Flex, Box, Heading} from "@radix-ui/themes";

interface MangaCardLayout2Props {
    title: string;
    thumbnail: string;
    slug: string;
}

export default function MangaCardLayout2({ title, thumbnail, slug }: MangaCardLayout2Props) {
  return (
    <Flex key={slug} direction="column" position="relative" className="bottomOverlay">
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
      <Box
        style={{
          position: "absolute",
          bottom: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          zIndex: 10,
        }}
      >
        <Heading align="center" size="6" weight="bold">{title}</Heading>
      </Box>
  </Flex>
  );
}