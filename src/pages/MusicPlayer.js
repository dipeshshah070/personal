import React, { useState, useEffect, useRef } from "react";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100); // Default volume at 100%
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(new Audio(require("../media/song.mp3"))); // Path to your song file

  useEffect(() => {
    const audio = audioRef.current; // Capture the current ref value
    audio.loop = true;

    // Update duration and current time
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      // Cleanup: pause the audio and remove event listeners when unmounting
      audio.pause();
      audio.currentTime = 0; // Reset playback position
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []); // Dependencies should be empty or only contain stable references

  const togglePlay = () => {
    const audio = audioRef.current; // Always access the current ref value
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value / 100;
    audioRef.current.volume = newVolume;
    setVolume(newVolume * 100);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="music-player">
      <h2>🎵</h2>
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
