import React from "react";
import "./habitatCard.css";

import Bigfoot from "../.././images/sticker/bigfoot-sticker.png";
import Yeti from "../.././images/sticker/yeti-sticker.png";
import Kraken from "../.././images/sticker/kraken-sticker.png";
import Dragon from "../.././images/sticker/dragon-sticker.png";
import Vampire from "../.././images/sticker/vampire-sticker.png";
import Skeleton from "../.././images/sticker/skull-sticker.png";

import Cave from "../.././images/sticker/cave-sticker.png";
import Lake from "../.././images/sticker/lake-sticker.png";
import Snowcave from "../.././images/sticker/snowcave-sticker.png";
import Wreck from "../.././images/sticker/wreck-sticker.png";

import Bigfoot_Font from "../.././images/labels/bigfoot-label.png";

import Grid from "@mui/material/Grid";

const CardData = [
  {
    id: "1",
    name: "Bigfoot",
    text: "Filler Text Bigfoot",
    label: Bigfoot_Font,
    creature: Bigfoot,
    bg: Cave,
  },
  //   {
  //     id: "2",
  //     name: "Yeti",
  //     text: "Filler Text Yeti",
  //     creature: Yeti,
  //     habitat: Snowcave,
  //   },
  //   {
  //     id: "3",
  //     name: "Kraken",
  //     text: "FIller Text Kraken",
  //     creature: Kraken,
  //     habitat: Wreck,
  //   },
  //   {
  //     id: "4",
  //     name: "Dragon",
  //     text: "Filler Text Dragon",
  //     creature: Dragon,
  //     habitat: Lake,
  //   },
];

const ItemCard2 = () => {
  return (
    <Grid container justifyContent="center">
      {CardData.map((CardData) => (
        <Grid item id="card">
          <div id={`${CardData.name}-card`} className="habitat-card">
            <img className="logo c-img" src={CardData.label} alt="" />
            {/* <img className="front-img c-img" src={CardData.creature} alt="" /> */}
            <img className="bg-img c-img" src={CardData.creature} />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemCard2;
