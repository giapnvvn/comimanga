import { Box } from "@radix-ui/themes";
import React from "react";
import Header from "./containers/Header";
import Headline from "./containers/Headline";
import TopSlider from "./containers/homepage/TopSlider";
import MangaSlider from "./containers/homepage/MangaSlider";
import MangaGrid from "./containers/homepage/MangaGrid";

export default async function HomePage() {

  const formData = new FormData();
  formData.append('key', '46`F$)C;u~vmQ\\H*');

  const data = await fetch('https://comi.mobi/v3/home?app_ver=1.0', {
    method: 'POST',
    body: formData,
  });
  const jsonData = await data.json();
  const collections = jsonData.data;
  const featured_manga = collections.featured_manga;
  console.log(collections);
  return (
    <Box>
      <Headline />
      <Header />
      <TopSlider items={featured_manga.items} />
      {Object.keys(collections).find((key: string) => collections[key].collection_slug === "truyen_moi_tieu_bieu") && (
        <MangaSlider
          title={collections.truyen_moi_tieu_bieu.title}
          collection_slug={collections.truyen_moi_tieu_bieu.collection_slug}
          index={collections.truyen_moi_tieu_bieu.index}
          items={collections.truyen_moi_tieu_bieu.items}
          layout={2}
        />
      )}
      {Object.keys(collections).find((key: string) => collections[key].bxh_id === "top_read_vn") && (
        <MangaGrid
          title={collections.top_read_vn.title}
          collection_slug={collections.top_read_vn.collection_slug}
          items={collections.top_read_vn.items}
        />
      )}
      {Object.keys(collections).map((key: string, index: number) => {
        const collection = collections[key];
        if (collection.collection_slug === "featured_manga") {
          return;
        }
        if (collection.collection_slug === "truyen_moi_tieu_bieu") {
          return;
        }
        if (collection.bxh_id === "top_read_vn") {
          return;
        }
        return (
          <Box key={index}>
            <MangaSlider
              title={collection.title}
              collection_slug={collection.collection_slug}
              index={collection.index}
              items={collection.items}
              layout={1}
            />
          </Box>
        );
      })}
    </Box>
	);
}
