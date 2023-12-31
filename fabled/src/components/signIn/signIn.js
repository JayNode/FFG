import { useState, useEffect } from "react";
import axios from "axios";

import ".././navbar/Navbar.css";
import SignUpScreen from ".././signUp/signUp";

import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
  Dialog,
} from "@mui/material";

const NavLogin = () => {
  /** FIX THIS DATABASE LOGIN THINGY!!!! */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (panel) => (_event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let processing = true;
    fetchData(processing);
    return () => {
      processing = false;
    };
  }, []);

  /** Change to database data */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError(<p>Missing Fields</p>);
    } else {
      setError(" ");
      postData();
    }
  };

  const fetchData = async () => {
    await axios.get("http://localhost:4000/users");
  };

  const postData = async () => {
    const postData = {
      email: email,
      password: password,
    };

    await axios
      .post("http://localhost:4000/userData/check", postData)
      .then((res) => setError(<p className="success">{res.data}</p>));
  };

  return (
    <Container component="main" noValidate maxWidth="xs">
      <Box
        noValidate
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            name="email"
            required
            fullWidth
            margin="normal"
            label="Email Address"
            type="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            name="password"
            required
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          {error}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Button
                onClick={handleOpen}
                variant="text"
                disableElevation={true}
              >
                Don't have an account? Sign Up
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <SignUpScreen />
              </Dialog>
              {/* <Link href="/signUp" variant="body2">
                Don't have an account? Sign Up
              </Link> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default NavLogin;
