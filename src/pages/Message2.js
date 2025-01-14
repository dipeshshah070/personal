import React from "react";
import { Link } from "react-router-dom";
import cute from "../media/cute.jpg";
function Message2() {
  return (
    <div className="page">
      <h1>Forever and Always ❤️</h1>
      <p>No matter what happens, I will always be by your side. You are my everything.
        <p>My cutie Patotieeeee.</p>
        <p>I Love You Soo Muchhh</p>
        <p>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
        ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
        ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
        ❤️❤️❤️❤️❤️❤️❤️❤️❤️
        </p>
      </p>
      <img src={cute} alt="Heart" className="image" />
      <Link to="/photos" className="button">Photossssss</Link>
    </div>
  );
}

export default Message2;