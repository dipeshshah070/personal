import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Message1 from "./pages/Message1";
import Message2 from "./pages/Message2";
import PhotoSlideshow from "./photos"; // Importing the photos component
import VideoGallery from "./videos";   // Importing the videos component
import ValentinePage from "./pages/ValentinePage";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/message1" className="nav-link">Sunshine</Link>
          <Link to="/message2" className="nav-link">Forever</Link>
          <Link to="/photos" className="nav-link">Photos</Link>
          <Link to="/videos" className="nav-link">Videos</Link>
          <Link to="/valentine" className="nav-link">Valentine</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message1" element={<Message1 />} />
          <Route path="/message2" element={<Message2 />} />
          <Route path="/photos" element={<PhotoSlideshow />} /> {/* Adding the photo slideshow */}
          <Route path="/videos" element={<VideoGallery />} />   {/* Adding the video gallery */}
          <Route path="/valentine" element={<ValentinePage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
