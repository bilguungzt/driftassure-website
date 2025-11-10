import React from "react";
import heroVideoSrc from "../assets/video.mp4";

const DEFAULTS = {
  videoSrc: heroVideoSrc,
  poster: "https://placehold.co/1920x1080/0a0c20/0a0c20",
  overlayOpacity: 0.55,
  gradientStop: 0.66,
};

const ThreeBackground = ({
  videoSrc = DEFAULTS.videoSrc,
  poster = DEFAULTS.poster,
  overlayOpacity = DEFAULTS.overlayOpacity,
  gradientStop = DEFAULTS.gradientStop,
}) => (
  <div className="hero-video" aria-hidden="true">
    <video
      className="hero-video__media"
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      preload="auto"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
    <div className="hero-video__overlay" style={{ opacity: overlayOpacity }} />
    <div
      className="hero-video__gradient"
      style={{
        background: `linear-gradient(160deg, rgba(5,5,16,0.92) 0%, rgba(13,15,35,0.85) ${
          gradientStop * 100
        }%, rgba(8,10,25,0.6) 100%)`,
      }}
    />
  </div>
);

ThreeBackground.DEFAULTS = DEFAULTS;

export default ThreeBackground;
