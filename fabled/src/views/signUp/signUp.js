import { useState, useEffect } from "react";
import axios from "axios";
/** Local Imports */
import "./signUp.css";
/** MUI Tags */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const NewUserForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
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
      username: username,
      email: email,
      password: password,
    };

    await axios
      .post("http://localhost:4000/newUser/send", postData)
      .then((res) => setError(<p className="success">{res.data}</p>));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !username || !email || !password) {
      setError(<p>Missing Fields</p>);
    } else {
      setError(" ");
      postData();
    }
  };

  return (
    <div>
      <Stack
        id="textfield"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <h1>Fabled Fieldguide</h1>
        <TextField
          required
          className="user-textfield name-field"
          label="Full Name"
          type="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          required
          className="user-textfield username-field"
          label="Username"
          type="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          className="user-textfield password-field"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error}

        <Button
          id="user-form-bttn"
          type="submit"
          variant="contained"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </Stack>
    </div>
  );
};

export default NewUserForm;
