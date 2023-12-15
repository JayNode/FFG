import React from "react";
import { Link } from "react-router-dom";
/* Local Files */
import "./bottomNav.css";
/* Local Images */
import Facebook from "../.././images/socials/facebook-social.png";
import Instagram from "../.././images/socials/instagram-social.png";
import Twitter from "../.././images/socials/twitter-social.png";
import Youtube from "../.././images/socials/youtube-social.png";
/* MUI Tags */
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const Socials = [
  {
    id: "twitter",
    alt: "Twitter: @FFG",
    img: Twitter,
    link: "",
  },
  {
    id: "instagram",
    alt: "Instagram: @FFG",
    img: Instagram,
    link: "",
  },
  {
    id: "facebook",
    alt: "Facebook @FFG",
    img: Facebook,
    link: "",
  },
  {
    id: "youtube",
    alt: "Youtube: @FFG",
    img: Youtube,
    link: "",
  },
];

const BottomNav = () => {
  return (
    <Stack
      id="BottomNavigation"
      alignItems="flex-start"
      justifyContent="space-between"
      direction="row"
    >
      <Stack id="BN-info" alignItems="center" direction="row">
        <div>
          <h1 id="title">Fabled Fieldguide</h1>
          <div id="address">
            <p>1234 Fabled Rd, L.A.</p>
            <p>California 90032</p>
          </div>
        </div>
      </Stack>

      <div id="socialMedia">
        <h1 id="social-header">Connect With Us</h1>
        <Stack alignItems="center" direction="row">
          {Array.from(Socials).map((item) => (
            <Link to={item.link}>
              <img
                className="social-icons"
                id={item.id}
                src={item.img}
                alt={item.alt}
              />
            </Link>
          ))}
        </Stack>
      </div>
    </Stack>
  );
};

export default BottomNav;
