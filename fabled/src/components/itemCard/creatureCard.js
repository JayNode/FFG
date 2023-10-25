import React from "react";
import { Link } from "react-router-dom";
import "./creatureCard.css";

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

import Bigfoot_Label from "../.././images/labels/bigfoot-label.png";
import Yeti_Label from "../.././images/labels/yeti-label.png";
import Kraken_Label from "../.././images/labels/kraken-label.png";
import Dragon_Label from "../.././images/labels/dragon-label.png";
import Skeleton_Label from "../.././images/labels/skeleton-label.png";
import Vampire_Label from "../.././images/labels/vampire-label.png";

import Grid from "@mui/material/Grid";

const CardData = [
  {
    id: "1",
    name: "Bigfoot",
    text: "Filler Text Bigfoot",
    label: Bigfoot_Label,
    creature: Bigfoot,
    bg: Cave,
  },
  {
    id: "2",
    name: "Kraken",
    text: "FIller Text Kraken",
    label: Kraken_Label,
    creature: Kraken,
    habitat: Wreck,
  },
  {
    id: "3",
    name: "Yeti",
    text: "Filler Text Yeti",
    label: Yeti_Label,
    creature: Yeti,
    habitat: Snowcave,
  },
  {
    id: "4",
    name: "Dragon",
    text: "Filler Text Dragon",
    label: Dragon_Label,
    creature: Dragon,
    habitat: Lake,
  },
  // {
  //   id: "5",
  //   name: "Vampire",
  //   text: "Filler Text Vampire",
  //   label: Vampire_Label,
  //   creature: Vampire,
  // },
  // {
  //   id: "6",
  //   name: "Skeleton",
  //   text: "Filler Text Skeleton",
  //   label: Skeleton_Label,
  //   creature: Skeleton,
  // },
];

const CreatureCard = () => {
  return (
    <Grid container justifyContent="center" spacing={7}>
      {CardData.map((CardData) => (
        <Grid item id="card">
          <Link>
            <div className="creature-card">
              <img className="label" src={CardData.label} alt="" />
              <img
                className={`${CardData.name}-img creature-img`}
                src={CardData.creature}
              />
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default CreatureCard;
