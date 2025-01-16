import React, { useState, useEffect } from "react";
import MusicPlayer from "./MusicPlayer"; // Importing the MusicPlayer component
import { Link } from "react-router-dom";

function ValentinePage() {
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setScale(1); // Animate to full scale
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleYes = () => {
    alert("Yayyyyyyyyyyyyyy! I love you! ❤️");
  };

  const handleNo = () => {
    alert("Woooohooooooo!!!! I love You❤️");
  };

  return (
    <div
      className="valentine-page"
      style={{
        transform: `scale(${scale})`,
        transition: "transform 1s ease-in-out",
      }}
    >
      <h1>Will You Be My Valentine? ❤️</h1>
      <img 
        src="https://media4.giphy.com/media/quvIXSlkzFQq5Bx6LZ/200.webp?cid=790b7611b73e1bdk89eo6dyzp79zxub75grl9eemptm7kbrk&ep=v1_gifs_search&rid=200.webp&ct=g" 
        alt="bemine" 
      />

      {/* Adding the MusicPlayer component */}
      <div className="music-container">
        <MusicPlayer />
      </div>

      <div className="button-container">
        <button className="valentine-button yes-button" onClick={handleYes}>Yes 💕💕</button>
        <button className="valentine-button no-button" onClick={handleNo}>Of course 💕💕</button>
        <p></p>
        <Link to="/" className="button">Go Home</Link>
      </div>
    </div>
  );
}

export default ValentinePage;
