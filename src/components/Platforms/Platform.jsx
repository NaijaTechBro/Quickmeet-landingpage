import React from "react";

function Platform({ name, comingSoon, logo }) {
  return (
    <div className="platform" id="platforms">
      <div className="platform__logo">{logo}</div>
      <h3>{name}</h3>
    </div>
  );
}

export default Platform;
