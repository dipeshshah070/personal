import React, { useState, useEffect, useRef } from "react";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100); // Default volume at 100%
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audio = useRef(new Audio(require("../media/song.mp3"))); // Path to your song file

  // Enable looping
  useEffect(() => {
    audio.current.loop = true;

    // Update duration and current time
    const handleTimeUpdate = () => setCurrentTime(audio.current.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.current.duration);

    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    audio.current.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
      audio.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  // Play or pause the audio
  const togglePlay = () => {
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Set volume
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value / 100;
    audio.current.volume = newVolume;
    setVolume(newVolume * 100);
  };

  // Format time (e.g., 01:23)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="music-player">
      <h2>Enjoy Our Song 🎵</h2>
      <button onClick={togglePlay} className="music-button">
        {isPlaying ? "Pause" : "Play"} Song
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="volume-slider"
      />
      <div className="time-info">
        <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}

export default MusicPlayer;
