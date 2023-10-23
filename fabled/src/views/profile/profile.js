import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selectData, setSelectData] = useState("");
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    let processing = true;
    fetchData(processing);
    return () => {
      processing = false;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !username || !email || !password) {
      setError(<p>Form is not complete</p>);
    } else {
      setError(" ");
    }

    setError(" ");
    postData();
  };

  const fetchData = async (processing) => {
    await axios
      .get("localhost:4000/users")
      .then((res) => {
        if (processing) {
          setSelectData(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const postData = async () => {
    const postData = {
      name: name,
      username: username,
      email: email,
      password: password,
    };

    await axios
      .post("http://localhost:4000/profile", postData)
      .then((res) => setError(<p className="success">{res.data}</p>));
  };

  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Username</label>
        <input
          type="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error}

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
