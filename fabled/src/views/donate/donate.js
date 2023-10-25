import { useState, useEffect } from "react";
import axios from "axios";
/** Local Imports */
import "./donate.css";
/** MUI Tags */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Donate = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [addressApt, setAddressApt] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !country ||
      !address ||
      !city ||
      !state ||
      !zipCode
    ) {
      setError(<p>Missing Fields</p>);
    } else {
      setError(" ");
    }
  };

  return (
    <Stack id="Donate" direction="row">
      <div id="donate-info">
        <h1 id="info-header">Donate to FFG</h1>
        <img src="" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div id="donate-textfield">
        <Stack
          id="textfield"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <h1 id="textfield-header">Your Information</h1>
          <TextField
            required
            className="user-textfield firstName-field"
            label="Full Name"
            type="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            required
            className="user-textfield lastName-field"
            label="Last Name"
            type="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            required
            className="user-textfield email-field"
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            className="user-textfield country-field"
            label="Country"
            type="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <TextField
            required
            className="user-textfield address-field"
            label="Address"
            type="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            className="user-textfield addressApt-field"
            label="Apt., Ste., Bldg."
            type="addressApt"
            name="addressApt"
            value={addressApt}
            onChange={(e) => setAddressApt(e.target.value)}
          />
          <TextField
            required
            className="user-textfield city-field"
            label="City"
            type="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            required
            className="user-textfield state-field"
            label="State"
            type="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <TextField
            required
            className="user-textfield zipCode-field"
            label="ZIP Code"
            type="zipCode"
            name="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />

          {error}

          <Button
            id="donate-bttn"
            type="submit"
            variant="contained"
            onClick={handleSubmit}
          >
            DONATE
          </Button>
        </Stack>
      </div>
    </Stack>
  );
};

export default Donate;
