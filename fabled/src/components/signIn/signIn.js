import { useState, useEffect } from "react";
import axios from "axios";

import ".././navbar/Navbar.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const NavLogin = () => {
  /** FIX THIS DATABASE LOGIN THINGY!!!! */
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      fetchData();
    }
  };

  const fetchData = async () => {
    await axios.get("http://localhost:4000/users").then((res) => {
      setUser(res.data);
      console.log(user);
    });
  };

  return (
    <Container
      component="main"
      onSubmit={handleSubmit}
      noValidate
      maxWidth="xs"
    >
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
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signUp" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default NavLogin;
