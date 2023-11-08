import { useState, useEffect } from "react";
import axios from "axios";
/** Local Imports */
import "./signUp.css";
/** MUI Tags */
import { TextField, Button, Box, Container, Typography } from "@mui/material";

const NewUserForm = () => {
  const [name, setName] = useState("");
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

  const fetchData = async () => {
    await axios.get("http://localhost:4000/users");
  };

  const postData = async () => {
    const postData = {
      name: name,
      email: email,
      password: password,
    };

    await axios
      .post("http://localhost:4000/userData/send", postData)
      .then((res) => setError(<p className="success">{res.data}</p>));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError(<p>Missing Fields</p>);
    } else {
      setError(" ");
      postData();
    }
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
          Fabled Fieldguide
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            name="name"
            className="user-textfield name-field"
            required
            autoFocus
            fullWidth
            margin="normal"
            label="Full Name"
            autoComplete="name"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            autoFocus
            fullWidth
            className="user-textfield email-field"
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            autoFocus
            fullWidth
            className="user-textfield password-field"
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NewUserForm;
