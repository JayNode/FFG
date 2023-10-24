import React from "react";
import "./ItemCard.css";

import Bigfoot from "../.././images/sticker/bigfoot-sticker.png";
import Yeti from "../.././images/sticker/yeti-sticker.png";
import Kraken from "../.././images/sticker/kraken-sticker.png";
import Dragon from "../.././images/sticker/dragon-sticker.png";
import Vampire from "../.././images/sticker/vampire-sticker.png";
import Skeleton from "../.././images/sticker/skull-sticker.png";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const CardData = [
  {
    id: "1",
    name: "Bigfoot",
    img: Bigfoot,
    text: "Filler Text Bigfoot",
  },
  {
    id: "2",
    name: "Yeti",
    img: Yeti,
    text: "Filler Text Yeti",
  },
  {
    id: "3",
    name: "Kraken",
    img: Kraken,
    text: "FIller Text Kraken",
  },
  {
    id: "4",
    name: "Dragon",
    img: Dragon,
    text: "Filler Text Dragon",
  },
  {
    id: "5",
    name: "Vampire",
    img: Vampire,
    text: "Filler Text Vampire",
  },
  {
    id: "6",
    name: "Skeleton",
    img: Skeleton,
    text: "Filler Text Skeleton",
  },
];

const ItemCard = () => {
  return (
    <Grid container justifyContent="center" spacing={5}>
      {CardData.map((CardData) => (
        <Grid item justifyContent="center">
          <Stack
            id={`${CardData.name}-card`}
            className="creature-card"
            justifyContent="space-evenly"
            alignItems="center"
            direction="row"
          >
            <Container className="card-info">
              <h1 className="card-name">{CardData.name}</h1>
              <p className="card-text">{CardData.text}</p>
            </Container>

            <img className="card-img" src={CardData.img} alt={CardData.name} />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemCard;
