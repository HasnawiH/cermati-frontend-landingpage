import React from "react";
import "./newsletter.css";

const newsletter = props => {
  const handleHidden = newValue => {
    props.closeChange(newValue);
  };
  return (
    <div className="newsletters">
      <i onClick={() => handleHidden(false)} class="fas fa-times" />
      <div className="news-text">
        <h3> Get latest updates in web technologies </h3>
        <span>
          I write articles related to web technologies, such as design trends,
          development tools, UI/UX case studies and reviews, and more. Sign up
          to my newsletter to get them all.
        </span>
      </div>
      <div className="news-email">
        <input
          className="news-input"
          type="text"
          name="email"
          placeholder="Email Address"
        />
        <button className="news-button">Count me in!</button>
      </div>
    </div>
  );
};

export default newsletter;
