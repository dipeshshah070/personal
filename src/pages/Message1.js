import React from "react";
import { Link } from "react-router-dom";
import cat from "../media/cat.jpg";
function Message1() {
  return (
    <div className="page">
      <h1>You Are My Sunshine 🌞</h1>
      <p>You light up my life every single day. I am so grateful for you!</p>
      <p>Thank You for being my better half ❤️</p>
      <p>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
        ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
        ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
        ❤️❤️❤️❤️❤️❤️❤️❤️❤️
        </p>
      <img src={cat} alt="Heart" className="image" />
      <Link to="/message2" className="button">Nexttttt!!</Link>
    </div>
  );
}

export default Message1;