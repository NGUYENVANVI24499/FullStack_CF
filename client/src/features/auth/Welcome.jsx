import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", { timeStyle: "long" }).format(
    date
  );
  return (
    <div className="container">
      <h1>Welcome {today}</h1>
      <div>
        <Link to="/dash/notes">view techNotes</Link>
      </div>
      <Link to="/dash/users">user settings</Link>
    </div>
  );
};

export default Welcome;
