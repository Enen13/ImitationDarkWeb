import React from "react";
import { Link } from "react-router-dom";
import "./LeakCard.css";

const LeakCard = ({ title, idx, post_date }) => {
  return (
    <Link to={`/leak-detail/${idx}`} className="leak-card-link">
      <div className="leak-card">
        <div className="leak-card-content">
          <img
            src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/folder-icon.png"
            alt="Folder Icon"
          />
          <p className="leak-card-title">~ {title}</p>
        </div>
        <span className="leak-card-date">{post_date}</span>
      </div>
    </Link>
  );
};

export default LeakCard;