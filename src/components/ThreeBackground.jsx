import React, { useEffect, useRef } from "react";
import heroVideoSrc from "../assets/video.mp4";

const DEFAULTS = {
  videoSrc: heroVideoSrc,
  poster: "",
  overlayOpacity: 0.55,
  gradientStop: 0.66,
};

const ThreeBackground = ({
  videoSrc = DEFAULTS.videoSrc,
  poster = DEFAULTS.poster,
  overlayOpacity = DEFAULTS.overlayOpacity,
  gradientStop = DEFAULTS.gradientStop,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = async () => {
      try {
        // Small delay to ensure video is ready
        await new Promise(resolve => setTimeout(resolve, 100));
        await video.play();
      } catch (error) {
        console.log("Video autoplay failed:", error);
        // Try again on first user interaction
        const playOnInteraction = () => {
          video.play();
          document.removeEventListener('touchstart', playOnInteraction);
          document.removeEventListener('click', playOnInteraction);
        };
        document.addEventListener('touchstart', playOnInteraction, { once: true });
        document.addEventListener('click', playOnInteraction, { once: true });
      }
    };

    // Try to play when video has loaded enough data
    if (video.readyState >= 3) {
      attemptPlay();
    } else {
      video.addEventListener('canplay', attemptPlay, { once: true });
    }

    return () => {
      video.removeEventListener('canplay', attemptPlay);
    };
  }, []);

  return (
    <div className="hero-video" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-video__media"
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        preload="auto"
        webkit-playsinline="true"
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
};

ThreeBackground.DEFAULTS = DEFAULTS;

export default ThreeBackground;
