import React from "react";
import { Link } from "react-router-dom";
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

import Forest_Label from "../.././images/labels/forest-label.png";
import Ocean_Label from "../.././images/labels/ocean-label.png";
import Tundra_Label from "../.././images/labels/tundra-label.png";
import Mountain_Label from "../.././images/labels/mountain-label.png";

import Grid from "@mui/material/Grid";

const CardData = [
  {
    id: "1",
    name: "Cave",
    text: "Filler Text Bigfoot",
    label: Forest_Label,
    habitat: Cave,
  },
  {
    id: "2",
    name: "Wreck",
    text: "FIller Text Kraken",
    label: Ocean_Label,
    habitat: Wreck,
  },
  {
    id: "3",
    name: "Snowcave",
    text: "Filler Text Yeti",
    label: Tundra_Label,
    habitat: Snowcave,
  },
  {
    id: "4",
    name: "Lake",
    text: "Filler Text Dragon",
    label: Mountain_Label,
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

const HabitatCard = () => {
  return (
    <Grid container justifyContent="center" spacing={7}>
      {CardData.map((CardData) => (
        <Grid item>
          <Link>
            <div className="habitat-card">
              <img className="label" src={CardData.label} alt="" />
              <img
                className={`${CardData.name}-img habitat-img`}
                src={CardData.habitat}
              />
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default HabitatCard;
