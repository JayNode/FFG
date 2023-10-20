import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [selectData, setSelectData] = useState("");
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    let processing = true;
    axiosFetchData(processing);
    return () => {
      processing = false;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email + " | " + message);

    if (!message) {
      setError(<p>Message is empty, please enter a message</p>);
    } else {
      setError("");
    }
  };

  const axiosFetchData = async (processing) => {
    await axios
      .get("localhost:4000/user")
      .then((res) => {
        if (processing) {
          setSelectData(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
