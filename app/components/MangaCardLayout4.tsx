import { Flex, Box, Heading, Text, Badge } from "@radix-ui/themes";
import { FaCircleDot } from "react-icons/fa6";

interface MangaCardLayout4Props {
  ranking?: number;
  badge?: string;
  title: string;
  thumbnail: string;
  slug: string;
  genre?: string[];
  views?: number;
}

export default function MangaCardLayout4({
  ranking,
  badge,
  title,
  thumbnail,
  slug,
  genre,
  views,
}: MangaCardLayout4Props) {
  return (
    <Flex key={slug} gap="4" align='center'>
      <Flex direction="column" align="center" justify="center" style={{flex:1, width: '33%'}}>
        {ranking && (
          <Text size="2" weight="bold" color="gray" mb="2">
            #{ranking}
          </Text>
        )}
        <Box>
          <img
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "188/260",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "6px",
            }}
            src={thumbnail}
            alt={title}
          />
        </Box>
      </Flex>

      {/* Content */}
      <Flex direction="column" justify="between" style={{flex:2, width: '66%'}}>
        {badge && (
          <Badge variant="solid" color="red" mb="2">
            {badge}
          </Badge>
        )}
        <Heading size="3" weight="bold" style={{maxWidth:'100%'}}>
          {title}
        </Heading>
        <Flex align="center" mt="2" gap="1">
          <Text size="1" color="gray">
            {genre}
          </Text>
          {genre && <FaCircleDot size="10" />}
          <Text size="1" color="gray">
            {views} views
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}