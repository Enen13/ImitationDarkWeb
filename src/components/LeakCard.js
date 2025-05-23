import React from "react";
import { Link } from "react-router-dom";
import "./LeakCard.css";

const LeakCard = ({ title, idx }) => {
  return (
    <Link to={`/leak-detail/${idx}`} className="leak-card-link" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="leak-card">
        <img
          src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/folder-icon.png"
          alt="Folder Icon"
        />
        <p>~ {title}</p>
      </div>
    </Link>
  );
};

export default LeakCard;